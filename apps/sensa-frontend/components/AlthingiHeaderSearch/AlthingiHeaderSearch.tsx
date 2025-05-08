import {
  AsyncSearch,
  Box,
  Inline,
  Stack,
  Text,
} from '@island.is/island-ui/core'
import * as styles from './AlthingiHeaderSearch.css'
import { useState } from 'react'
import Image from 'next/image'
import { useI18n } from '../../i18n'

const dummyOptions = [
  { label: 'Þingmaður A', value: 'a' },
  { label: 'Þingmaður B', value: 'b' },
  { label: 'Þingmaður C', value: 'c' },
]

const AlthingiHeaderSearch = () => {
  const [value, setValue] = useState('')
  const [selected, setSelected] = useState<null | typeof dummyOptions[0]>(null)

  const i18n = useI18n()

  console.log(i18n.activeLocale)

  const handleSubmit = (inputValue: string, selectedOption: any) => {
    console.log('Submitted:', { inputValue, selectedOption })
    setValue(inputValue)
    setSelected(selectedOption)
  }

  return (
    <>
      <Box className={styles.root}>
        <Box className={styles.leftBox}>
          <Box>
            <Text color="white" as="h1" variant="h2">
              {i18n.t.home.header}
            </Text>
          </Box>
          <Box>
            <AsyncSearch
              placeholder="Search Alþingi"
              options={dummyOptions}
              inputValue={value}
              onSubmit={handleSubmit}
              onChange={(selectedItem) => setSelected(selectedItem)}
              showDividerIfActive
              size="medium"
            />
          </Box>
        </Box>
        <Box className={styles.rightBox}>
          <img className={styles.image} src={'/althingiheaderlogo.svg'} />
        </Box>
      </Box>
    </>
  )
}

export default AlthingiHeaderSearch
