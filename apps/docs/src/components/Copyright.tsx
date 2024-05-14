import React from 'react'
import { ExternalLink } from 'lucide-react'
import { cn } from '@/common/utils'

interface CopyrightProps {
  className?: string
}
const Copyright: React.FC<CopyrightProps> = ({ className }) => {
  return (
    <div className={cn('text-sm', className)}>
      <p className="text-center">
        {`Copyright © ${new Date().getFullYear()} Neumify`}
      </p>
      <p className="text-center">
        {`Released under the `}
        <a
          target="_blank"
          rel="noreferrer"
          className="inline-flex gap-1"
          href="https://opensource.org/licenses/MIT"
        >
          MIT License
          <ExternalLink size={20} />
        </a>
      </p>
    </div>
  )
}

export { Copyright }
