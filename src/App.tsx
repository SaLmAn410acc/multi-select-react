import { useState } from 'react'

import MultiSelect from './components/MultiSelect'

type SelectOption = {
  label: string
  value: string | number
}

const options = [
  { label: 'Salman', value: 'sallu' },
  { label: 'Noman', value: 'nomi' },
  { label: 'Ayesha', value: 'ayesh' },
  { label: 'Hassan', value: 'hassu' },
  { label: 'Fatima', value: 'fati' },
  { label: 'Ali', value: 'aloo' },
  { label: 'Sana', value: 'sanu' },
  { label: 'Usman', value: 'usmu' },
  { label: 'Zara', value: 'zazu' },
  { label: 'Bilal', value: 'billy' },
  { label: 'Kashif', value: 'kashi' },
  { label: 'Mariam', value: 'mary' },
  { label: 'Omar', value: 'omi' },
  { label: 'Sadia', value: 'sadie' },
  { label: 'Adil', value: 'addy' },
  { label: 'Aminah', value: 'ami' },
  { label: 'Daniyal', value: 'danny' },
  { label: 'Zainab', value: 'zainu' },
  { label: 'Irfan', value: 'irfi' },
  { label: 'Tania', value: 'tanu' },
];


function App() {

  const [value, setValue] = useState<SelectOption[] | []>([])

  return (
    <>
      <MultiSelect options={options} value={value} onChange={(val)=> setValue(val) }/>
    </>
  )
}

export default App
