import { useMutation } from '@tanstack/react-query'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { type FormEvent, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { API_URL } from '@/lib/api'

type Values = { name: string; email: string; message: string; website: string }
type Errors = Partial<Record<'name' | 'email' | 'message', string>>

const EMPTY: Values = { name: '', email: '', message: '', website: '' }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate({ name, email, message }: Values): Errors {
  const errors: Errors = {}
  if (!name.trim()) errors.name = 'Please enter your name'
  else if (name.trim().length > 100) errors.name = 'Name is too long'
  if (!EMAIL_RE.test(email.trim())) errors.email = 'Please enter a valid email'
  if (!message.trim()) errors.message = 'Please write a message'
  else if (message.trim().length > 5000) errors.message = 'Message is too long (max 5000 characters)'
  return errors
}

class SendError extends Error {
  fieldErrors: Errors
  constructor(message: string, fieldErrors: Errors = {}) {
    super(message)
    this.fieldErrors = fieldErrors
  }
}

async function sendMessage(values: Values) {
  let res: Response
  try {
    res = await fetch(`${API_URL}/api/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
  } catch {
    throw new SendError('Could not send right now. Please check your connection and try again.')
  }
  if (res.ok) return
  const body = await res.json().catch(() => ({}))
  const fieldErrors: Errors = {}
  for (const issue of body.issues ?? []) fieldErrors[issue.path as keyof Errors] = issue.message
  throw new SendError(body.message ?? 'Something went wrong. Please try again.', fieldErrors)
}

const labelClass = 'text-sm font-medium'
const errorClass = 'text-sm text-destructive'

// Contact form: sends the message to the backend, which saves it and emails it to me.
export function ContactForm() {
  const [values, setValues] = useState<Values>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const send = useMutation({
    mutationFn: sendMessage,
    onSuccess: () => setValues(EMPTY),
    onError: (error) => error instanceof SendError && setErrors(error.fieldErrors),
  })

  const set = (field: keyof Values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [field]: e.target.value }))
    if (field in errors) setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length === 0) send.mutate(values)
  }

  if (send.isSuccess) {
    return (
      <div className="flex flex-col items-center gap-3 py-6 text-center" role="status">
        <CheckCircle2 className="size-10 text-emerald-500" />
        <p className="font-display text-lg font-semibold">Thanks, your message was sent!</p>
        <p className="text-sm text-muted-foreground">I&apos;ll get back to you as soon as I can.</p>
        <Button variant="outline" onClick={() => send.reset()}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex w-full flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-name" className={labelClass}>
            Name
          </label>
          <Input
            id="contact-name"
            autoComplete="name"
            value={values.name}
            onChange={set('name')}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
          />
          {errors.name && (
            <p id="contact-name-error" className={errorClass}>
              {errors.name}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-email" className={labelClass}>
            Email
          </label>
          <Input
            id="contact-email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={set('email')}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
          />
          {errors.email && (
            <p id="contact-email-error" className={errorClass}>
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className={labelClass}>
          Message
        </label>
        <Textarea
          id="contact-message"
          value={values.message}
          onChange={set('message')}
          placeholder="Tell me about the role, project, or idea…"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
        />
        {errors.message && (
          <p id="contact-message-error" className={errorClass}>
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot: hidden from people, but bots fill it in, which tells the server to ignore them. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={set('website')}
        />
      </div>

      {send.isError && !Object.values(errors).some(Boolean) && (
        <p className={errorClass} role="alert">
          {send.error.message}
        </p>
      )}

      <Button type="submit" size="lg" className="self-center" disabled={send.isPending}>
        {send.isPending ? <Loader2 className="animate-spin" /> : <Send />}
        {send.isPending ? 'Sending…' : 'Say hello'}
      </Button>
    </form>
  )
}
