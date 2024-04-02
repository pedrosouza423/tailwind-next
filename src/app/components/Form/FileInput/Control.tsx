import { ComponentProps } from 'react'

type ControlProps = ComponentProps<'input'>

export const Control = (props: ControlProps) => {
  return <input {...props} type="file" className="sr-only" id="photo" />
}
