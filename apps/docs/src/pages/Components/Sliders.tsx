import React from 'react'
import { Slider } from 'neumify'
import { Shelf } from '@/components/Shelf'

const Sliders: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Shelf
        title="basic"
        className="flex flex-col items-center justify-center gap-10"
      >
        <Slider
          className="w-96"
          color="var(--green)"
          defaultValue={[20]}
          max={100}
        />
        <Slider
          className="w-96"
          color="var(--cyan)"
          defaultValue={[30]}
          max={100}
        />
        <Slider
          className="w-96"
          color="var(--blue)"
          defaultValue={[40]}
          max={100}
        />
        <Slider
          className="w-96"
          color="var(--red)"
          defaultValue={[50]}
          max={100}
        />
      </Shelf>
      <Shelf
        title="vertical"
        className="flex items-center justify-center gap-10"
      >
        <Slider
          orientation="vertical"
          color="var(--green)"
          defaultValue={[20]}
          max={100}
        />
        <Slider
          orientation="vertical"
          color="var(--cyan)"
          defaultValue={[30]}
          max={100}
        />
        <Slider
          orientation="vertical"
          color="var(--blue)"
          defaultValue={[40]}
          max={100}
        />
        <Slider
          orientation="vertical"
          color="var(--red)"
          defaultValue={[50]}
          max={100}
        />
      </Shelf>
      <Shelf
        title="steps"
        className="flex flex-col items-center justify-center gap-10"
      >
        <Slider className="w-96" step={10} defaultValue={[50]} max={100} />
        <Slider className="w-96" step={25} defaultValue={[25]} max={100} />
      </Shelf>
      <Shelf
        title="range selector"
        className="flex flex-col items-center justify-center gap-10"
      >
        <Slider className="w-96" defaultValue={[20, 70]} max={100} />
      </Shelf>
    </div>
  )
}

export { Sliders }
