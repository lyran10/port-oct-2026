// Fails if tracked files include secrets, env files or build output.
import { execSync } from 'node:child_process'

const files = execSync('git ls-files', { encoding: 'utf8' }).split('\n').filter(Boolean)

const forbiddenPaths = [
  /(^|\/)\.env(\..+)?$/,
  /^dist\//,
  /(^|\/)node_modules\//,
  /\.(pem|key|p12|pfx)$/,
]
const allowedPaths = [/(^|\/)\.env\.example$/]

const secretPatterns = [
  { name: 'AWS access key', re: /AKIA[0-9A-Z]{16}/ },
  { name: 'Private key', re: /-----BEGIN [A-Z ]*PRIVATE KEY-----/ },
  { name: 'GitHub token', re: /gh[pousr]_[A-Za-z0-9]{36,}/ },
  { name: 'Google API key', re: /AIza[0-9A-Za-z_-]{35}/ },
  { name: 'Slack token', re: /xox[baprs]-[0-9A-Za-z-]{10,}/ },
]
const textFile = /\.(m?[jt]sx?|json|html|css|md|ya?ml|conf|txt)$|(^|\/)(Dockerfile|\.env.*)$/

const problems = []

for (const file of files) {
  if (forbiddenPaths.some((re) => re.test(file)) && !allowedPaths.some((re) => re.test(file))) {
    problems.push(`${file}: this file must not be committed`)
    continue
  }
  if (!textFile.test(file) || file === 'package-lock.json') continue
  let content
  try {
    content = execSync(`git show :"${file}"`, { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 })
  } catch {
    continue
  }
  for (const { name, re } of secretPatterns) {
    if (re.test(content)) problems.push(`${file}: possible ${name}`)
  }
}

if (problems.length) {
  console.error('Forbidden files or secrets found:\n' + problems.map((p) => `  - ${p}`).join('\n'))
  process.exit(1)
}
console.log('No forbidden files or secrets found.')
