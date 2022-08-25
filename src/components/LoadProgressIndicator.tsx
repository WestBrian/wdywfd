/* istanbul ignore file */
import { type FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: true })

export interface LoadProgressIndicatorProps {
  forPaths: string[]
}

export const LoadProgressIndicator: FC<LoadProgressIndicatorProps> = ({
  forPaths,
}) => {
  const router = useRouter()

  useEffect(() => {
    const start = (url: string) => {
      if (forPaths.find((path) => url.includes(path))) {
        NProgress.start()
      }
    }

    const stop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', start)
    router.events.on('routeChangeComplete', stop)
    router.events.on('routeChangeError', stop)

    return () => {
      router.events.off('routeChangeStart', start)
      router.events.off('routeChangeComplete', stop)
      router.events.off('routeChangeError', stop)
    }
  }, [router.events, forPaths])

  return null
}
