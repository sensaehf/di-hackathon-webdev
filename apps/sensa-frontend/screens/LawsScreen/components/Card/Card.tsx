import { Box, Tag, Text } from '@island.is/island-ui/core'
import Webreader from 'apps/sensa-frontend/components/Webreader/Webreader'
import { ClassValue } from 'classnames/types'
import * as styles from './Card.css'
export interface CardProps {
  title: string
  shortcuts: string[]
  className?: ClassValue
}

const Card = ({ title, shortcuts, className }: CardProps) => {
  return <Box className={className}>
    <Text marginBottom={1} variant='h2' as='h2'>Laws</Text>
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