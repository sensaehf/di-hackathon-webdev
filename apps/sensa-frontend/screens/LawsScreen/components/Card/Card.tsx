import { Box, Tag, Text } from '@island.is/island-ui/core'
import { ClassValue } from 'classnames/types'

export interface CardProps {
  title: string
  shortcuts: string[]
  className?: ClassValue
}

const Card = ({ title, shortcuts, className }: CardProps) => {
  return <Box className={className}>
    <Text variant='h3' as='h3'>Laws</Text>
    <Text variant='default' as='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio, quaerat quisquam odio saepe architecto. Eius odio mollitia quasi cupiditate, possimus tenetur voluptate blanditiis error, excepturi maxime impedit tempora debitis.</Text>
    <Text variant='eyebrow'>Shortcuts</Text>
    {/* Pills */}
    <Box>
      <Tag>asdgaggfdafdgs</Tag>
      <Tag>afdgfadadfgfdgaagdf</Tag>
      <Tag>agfdfgddgfsdgsgsgdfsdg</Tag>
    </Box>
  </Box>
}

export default Card