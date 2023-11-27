import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'

import 'styles/globals.css'

const MyApp = ({ Component, pageProps, router }: AppProps) => (
  <AnimatePresence mode="wait">
    <Component key={router.asPath} {...pageProps} />
  </AnimatePresence>
)

export default MyApp