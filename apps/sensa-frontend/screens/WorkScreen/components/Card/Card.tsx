import { Box, Tag, Text } from '@island.is/island-ui/core'
import { ClassValue } from 'classnames/types'
import * as styles from './Card.css'
import Link from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router'
export interface CardProps {
  title: string
  shortcuts: string[]
  description?: string
  className?: ClassValue
  href?: Url
}


const Card = ({ title, shortcuts, description, className, href }: CardProps) => {
  return (
    <Box className={className}>
      <Text marginBottom={1} variant="h2" as="h2">
        <Link href={href ?? '#'}>{title}</Link>
      </Text>

      {/* Dynamic description */}
      {description && (
        <Text marginBottom={2} variant="default" as="p">
          {description}
        </Text>
      )}

      {/* Dynamic shortcuts */}
      {shortcuts.length > 0 && (
        <>
          <Text marginBottom={2} variant="eyebrow">
            Flýtileiðir
          </Text>
          <Box className={styles.tags}>
            {shortcuts.map((shortcut, index) => (
              <Tag key={index}>{shortcut}</Tag>
            ))}
          </Box>
        </>
      )}
    </Box>
  )
}


export default Card