import { AsyncSearch } from '@island.is/island-ui/core'
import { getAllParliamentMembersAsSearchItem } from 'apps/sensa-frontend/data/endpoints';
import { useState } from 'react'

const MockSearch = () => {
  
  const pmOptions = getAllParliamentMembersAsSearchItem();
  

  const dummyOptions = [
    { label: 'Þingmaður A', value: 'a' },
    { label: 'Þingmaður B', value: 'b' },
    { label: 'Þingmaður C', value: 'c' },
  ]
  const [value, setValue] = useState('')
  const [selected, setSelected] = useState<null | typeof pmOptions[0]>(null)

  const handleSubmit = (inputValue: string, selectedOption: any) => {
    console.log('Submitted:', { inputValue, selectedOption })
    setValue(inputValue)
    setSelected(selectedOption)
  }
  return (
    <>
      <AsyncSearch
        placeholder="Search Alþingi"
        options={pmOptions}
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
