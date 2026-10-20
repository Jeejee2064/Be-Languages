import OnlineSchemas from '../components/site/OnlineSchemas'
import { ONLINE_PAGES, onlineMetadata } from '../content/online'

const page = ONLINE_PAGES.enSpanish

export const metadata = onlineMetadata(page)

export default function Layout({ children }) {
  return (
    <>
      <OnlineSchemas page={page} />
      {children}
    </>
  )
}
