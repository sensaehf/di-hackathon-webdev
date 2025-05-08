import { AsyncSearch } from '@island.is/island-ui/core'
import { getAllParliamentMembersAsSearchItem } from 'apps/sensa-frontend/data/endpoints';
import { useI18n } from 'apps/sensa-frontend/i18n';
import { useRouter } from 'next/router';
import { useState } from 'react'

const MockSearch = () => {
  const i18n = useI18n()
  const router = useRouter();
  const pmOptions = getAllParliamentMembersAsSearchItem();
  
  const [value, setValue] = useState('')
  const [selected, setSelected] = useState<null | typeof pmOptions[0]>(null)

  const handleSubmit = (inputValue: string, selectedOption: any) => {
    setValue(inputValue)
    setSelected(selectedOption)

    console.log('selectedOption', selectedOption);

    if(selectedOption !== null){
      router.push(`${i18n.t.routes.member}/${selectedOption.value}`); 
    }
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
