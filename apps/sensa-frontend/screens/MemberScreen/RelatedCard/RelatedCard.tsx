import React, { ReactNode } from 'react'
import { Box } from '@island.is/island-ui/core'
import * as styles from './RelatedCard.css'

interface RelatedCardProps {
  children: ReactNode
}

const RelatedCard = ({ children }: RelatedCardProps) => {
  return <Box className={styles.root}>{children}</Box>
}

export default RelatedCard
