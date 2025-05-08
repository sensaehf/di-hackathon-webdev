import { AsyncSearch } from '@island.is/island-ui/core'
import { getAllBillsAsSearchItem } from '../../data/endpoints'
import { useI18n } from '../../i18n'
import { useRouter } from 'next/router'
import { useState } from 'react'

const BillSearch = () => {
  const i18n = useI18n()
  const router = useRouter()
  const billOptions = getAllBillsAsSearchItem()

  const [value, setValue] = useState('')
  const [selected, setSelected] = useState<null | typeof billOptions[0]>(null)

  const handleSubmit = (inputValue: string, selectedOption: any) => {
    setValue(inputValue)
    setSelected(selectedOption)

    if (selectedOption !== null) {
      router.push(`${i18n.t.routes.bills}/${selectedOption.value}`)
    }
  }

  return (
    <AsyncSearch
      placeholder={i18n.t.search.placeholder}
      options={billOptions}
      inputValue={value}
      onSubmit={handleSubmit}
      onChange={(selectedItem) => setSelected(selectedItem)}
      noOptionsMessage={() => i18n.t.search.noResults}
      loadingMessage={() => i18n.t.search.loading}
      showDividerIfActive
      size="medium"
    />
  )
}

export default BillSearch
