import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'neumify'
import { Text, Copyright } from '@/components'

const Home: React.FC = () => {
  return (
    <div className="relative flex h-full flex-col items-center justify-center gap-16">
      <Text content="Neumify.Js" shadow="4px" fontSize="100px"></Text>
      <p className="text-2xl">The sun rises every day, follows the shadow.</p>
      <Button className="text-gray" variant={'primary'}>
        <Link
          to="/intro"
          className="flex h-full w-32 items-center justify-center"
        >
          Getting Started
        </Link>
      </Button>
      <Copyright className='absolute bottom-0'/>
    </div>
  )
}

export { Home }
