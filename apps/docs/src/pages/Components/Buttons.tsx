import React from 'react'
import { Button } from 'neumify'
import { Shelf } from '@/components/Shelf'

const Buttons: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Shelf title="variants">
        <Button variant="primary">primary</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="success">success</Button>
        <Button variant="info">info</Button>
        <Button variant="danger">danger</Button>
      </Shelf>
      <Shelf title="size">
        <Button size="small">small</Button>
        <Button size="regular">regular</Button>
        <Button size="large">large</Button>
      </Shelf>
      <Shelf title="shape">
        <Button shape="round">round</Button>
        <Button shape="circle">circle</Button>
        <Button shape="squire">squire</Button>
        <Button shape="capsule">capsule</Button>
      </Shelf>
      <Shelf title="animate">
        <Button animate={false}>no animation</Button>
        <Button animate="top">top</Button>
        <Button animate="right">right</Button>
        <Button animate="bottom">bottom</Button>
        <Button animate="left">left</Button>
      </Shelf>
      <Shelf title="link">
        <Button link={false}>regular button</Button>
        <Button link>link button</Button>
      </Shelf>
      <Shelf title="underline">
        <Button underline>button with underline</Button>
        <Button link underline>
          link with underline
        </Button>
      </Shelf>
    </div>
  )
}

export { Buttons }
