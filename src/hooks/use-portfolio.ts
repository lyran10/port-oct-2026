import { useSuspenseQuery } from '@tanstack/react-query'

import { API_URL } from '@/lib/api'
import type { Portfolio } from '@/types/portfolio'

async function fetchPortfolio(): Promise<Portfolio> {
  const res = await fetch(`${API_URL}/api/portfolio`)
  if (!res.ok) throw new Error(`Could not load the portfolio (${res.status})`)
  const data = (await res.json()) as Omit<Portfolio, 'profile'> & { profile: Portfolio['profile'] | null }
  if (!data.profile) throw new Error('The portfolio has no profile yet. Add one in the admin app.')
  return data as Portfolio
}

// All portfolio content, loaded once from the backend. Components render inside
// <PortfolioBoundary>, which shows the loading and error screens, so `data` is always ready here.
export function usePortfolio() {
  return useSuspenseQuery({
    queryKey: ['portfolio'],
    queryFn: fetchPortfolio,
    staleTime: 5 * 60 * 1000,
  }).data
}
