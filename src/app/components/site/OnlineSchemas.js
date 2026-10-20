import { onlineSchemas } from '../../content/online'

export default function OnlineSchemas({ page }) {
  return onlineSchemas(page).map((schema, i) => (
    <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  ))
}
