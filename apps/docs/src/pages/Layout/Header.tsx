import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, Github } from 'lucide-react'
import { Button, TextInput, Navbar } from 'neumify'
import { Text } from '@/components'

const Link = ({ route, label }: { route: string; label: string }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `flex h-full w-32 items-center justify-center ${isActive ? 'text-info' : ''}`
      }
      to={route}
    >
      {label}
    </NavLink>
  )
}

const Header: React.FC = () => {
  const [navKey, setNavkey] = useState(useLocation().pathname.split('/')[1])
  const location = useLocation()

  useEffect(() => {
    setNavkey(location.pathname.split('/')[1])
  }, [location])

  return (
    <motion.header className="fixed top-0 flex h-20 w-screen items-center justify-between px-6 backdrop-blur">
      <NavLink to="/" className="flex h-full w-32 items-center justify-center ml-4">
        <Text content="Neumify" shadow="3px" fontSize="42px"></Text>
      </NavLink>
      <Navbar
        items={[
          {
            label: 'Intro',
            key: 'intro',
            children: <Link label="Introduction" route="/intro" />
          },
          {
            label: 'Components',
            key: 'components',
            children: <Link label="Components" route="/components" />
          },
          {
            label: 'Design',
            key: 'design',
            children: <Link label="Design" route="/design" />
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
