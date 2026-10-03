import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

import type { Profile } from '@/types/portfolio'

// Social icons in display order. Links left empty in the admin app are hidden.
export function getSocialLinks(social: Profile['social']) {
  return [
    { id: 'GitHub', href: social.github, icon: FaGithub },
    { id: 'LinkedIn', href: social.linkedin, icon: FaLinkedin },
    { id: 'LeetCode', href: social.leetcode, icon: SiLeetcode },
    { id: 'Instagram', href: social.instagram, icon: FaInstagram },
  ].filter((link): link is typeof link & { href: string } => Boolean(link.href))
}
