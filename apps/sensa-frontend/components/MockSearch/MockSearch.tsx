import { AsyncSearch } from '@island.is/island-ui/core'
import { useState } from 'react'

const MockSearch = () => {
  const dummyOptions = [
    { label: 'Þingmaður A', value: 'a' },
    { label: 'Þingmaður B', value: 'b' },
    { label: 'Þingmaður C', value: 'c' },
  ]
  const [value, setValue] = useState('')
  const [selected, setSelected] = useState<null | typeof dummyOptions[0]>(null)

  const handleSubmit = (inputValue: string, selectedOption: any) => {
    console.log('Submitted:', { inputValue, selectedOption })
    setValue(inputValue)
    setSelected(selectedOption)
  }
  return (
    <>
      <AsyncSearch
        placeholder="Search Alþingi"
        options={dummyOptions}
        inputValue={value}
        onSubmit={handleSubmit}
        onChange={(selectedItem) => setSelected(selectedItem)}
        showDividerIfActive
        size="medium"
      />
    </>
  )
}

export default MockSearch
