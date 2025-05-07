import { Box, Tag, Text } from '@island.is/island-ui/core'
import Webreader from 'apps/sensa-frontend/components/Webreader/Webreader'
import { ClassValue } from 'classnames/types'
import * as styles from './Card.css'
import Link from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router'
export interface CardProps {
  title: string
  shortcuts: string[]
  className?: ClassValue
  href?: Url
}

const Card = ({ title, shortcuts, className, href }: CardProps) => {
  return <Box className={className}>
    <Text marginBottom={1} variant='h2' as='h2'><Link href={href ?? '#'}>{title}</Link></Text>
    <Text marginBottom={2} variant='default' as='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio, quaerat quisquam odio saepe architecto. Eius odio mollitia quasi cupiditate, possimus tenetur voluptate blanditiis error, excepturi maxime impedit tempora debitis.</Text>
    <Text marginBottom={2} variant='eyebrow'>Shortcuts</Text>
    {/* Pills */}
    <Box className={styles.tags}>
      <Tag >asdgaggfdafdgs</Tag>
      <Tag >afdgfadadfgfdgaagdf</Tag>
      <Tag >agfdfgddgfsdgsgsgdfsdg</Tag>
    </Box>
  </Box>
}

export default Card