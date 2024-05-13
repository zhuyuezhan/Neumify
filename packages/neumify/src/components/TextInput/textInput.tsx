import React from 'react'
import { BasicInput } from './basic'
import { IconInput } from './icon'
import { ButtonInput } from './button'
import { StatefulInput } from './stateful'

const textInputTypes = ['basic', 'icon', 'button', 'stateful'] as const
type TextInputType = (typeof textInputTypes)[number]
const stateTypes = ['initial', 'passed', 'failed'] as const
type StateType = (typeof stateTypes)[number]

interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  variants?: TextInputType
  // label for icon and button, depends on variant
  label?: React.ReactNode
  // onClick for button
  onClick?: () => void
  // state for stateful
  state?: StateType
  stateInfo?: string
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      onClick,
      state,
      stateInfo = 'initial',
      variants = 'basic',
      className,
      ...props
    },
    ref
  ) => {
    return (
      <>
        {variants === 'basic' && (
          <BasicInput ref={ref} className={className} {...props} />
        )}
        {variants === 'icon' && (
          <IconInput label={label} ref={ref} className={className} {...props} />
        )}
        {variants === 'button' && (
          <ButtonInput
            label={label}
            onClick={onClick}
            ref={ref}
            className={className}
            {...props}
          />
        )}
        {variants === 'stateful' && (
          <StatefulInput
            state={state}
            stateInfo={stateInfo}
            ref={ref}
            className={className}
            {...props}
          />
        )}
      </>
    )
  }
)
TextInput.displayName = 'TextInput'

export { TextInput, type StateType, type TextInputProps }
