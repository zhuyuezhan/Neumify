import React from 'react'
import { TextInput } from 'neumify'
import { Shelf } from '@/components/Shelf'
import { Cat, ArrowBigUpDash } from 'lucide-react'

const TextInputs: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Shelf title="basic">
        <TextInput variant="basic" placeholder="basic example" />
      </Shelf>
      <Shelf title="with icon">
        <TextInput variant="icon" label={<Cat />} placeholder="icon example" />
      </Shelf>
      <Shelf title="with button">
        <TextInput
          variant="button"
          label={<ArrowBigUpDash />}
          onClick={() => {
            alert('Well done!')
          }}
          placeholder="button example"
        />
      </Shelf>
      <Shelf title="stateful input">
        <TextInput
          variant="stateful"
          state="passed"
          placeholder="passed example"
        />
        <TextInput
          variant="stateful"
          state="failed"
          placeholder="failed example"
        />
      </Shelf>
    </div>
  )
}

export { TextInputs }
