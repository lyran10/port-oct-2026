import * as React from 'react'

export type Theme = 'dark' | 'light'

type ThemeProviderState = {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = React.createContext<ThemeProviderState | undefined>(undefined)
