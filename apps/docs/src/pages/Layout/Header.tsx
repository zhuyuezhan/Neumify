import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, Github } from 'lucide-react'
import { Button, TextInput, Navbar } from 'neumify'
import { Text } from '@/components'

const Header: React.FC = () => {
  const [navKey, setNavkey] = useState(useLocation().pathname)
  const location = useLocation()

  useEffect(() => {
    setNavkey(location.pathname)
    console.log(location.pathname)
  }, [location])

  return (
    <motion.header className="fixed top-0 flex h-20 w-screen items-center justify-between px-6">
      <Link to="/" className="flex h-full w-32 items-center justify-center">
        <Text content="N" shadow="3px" fontSize="42px"></Text>
      </Link>
      <Navbar
        className=""
        items={[
          {
            label: 'Intro',
            key: '/intro',
            children: (
              <Link
                to="/intro"
                className="flex h-full w-32 items-center justify-center"
              >
                Introduction
              </Link>
            )
          },
          {
            label: 'Document',
            key: '/docs',
            children: (
              <Link
                to="/docs"
                className="flex h-full w-32 items-center justify-center"
              >
                Document
              </Link>
            )
          },
          {
            label: 'Design',
            key: '/design',
            children: (
              <Link
                to="/design"
                className="flex h-full w-32 items-center justify-center"
              >
                Design
              </Link>
            )
          }
        ]}
        activeKey={navKey}
        onChange={() => {}}
      />
      <div className="flex w-fit items-center justify-center gap-4">
        <TextInput
          variant="icon"
          label={<Search />}
          disabled
          placeholder="unavalable for now"
        />
        <Button shape="circle">
          <a href="https://github.com/zhuyuezhan/neumify" target="_blank">
            <Github className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </motion.header>
  )
}

export { Header }
