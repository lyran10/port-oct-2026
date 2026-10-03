import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { Component, type ReactNode, Suspense } from 'react'

import { Button } from '@/components/ui/button'

function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center" role="status" aria-live="polite">
      <div className="flex flex-col items-center gap-4">
        <span className="size-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
        <p className="text-sm text-muted-foreground">Loading portfolio…</p>
      </div>
    </div>
  )
}

type ErrorBoundaryProps = { onReset: () => void; children: ReactNode }

class ErrorBoundary extends Component<ErrorBoundaryProps, { error: Error | null }> {
  state = { error: null as Error | null }

  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  retry = () => {
    this.props.onReset()
    this.setState({ error: null })
  }

  render() {
    if (!this.state.error) return this.props.children
    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="flex max-w-md flex-col items-center gap-4 text-center">
          <h1 className="font-display text-2xl font-bold">Couldn’t load the portfolio</h1>
          <p className="text-sm text-muted-foreground">{this.state.error.message}</p>
          <Button onClick={this.retry}>Try again</Button>
        </div>
      </div>
    )
  }
}

// Shows a spinner while the portfolio loads and a retry screen if the API can't be reached.
export function PortfolioBoundary({ children }: { children: ReactNode }) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset}>
          <Suspense fallback={<LoadingScreen />}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}
