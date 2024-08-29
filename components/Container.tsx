import { PropsWithChildren } from 'react'

export default function Container({ children }: PropsWithChildren) {
  return <div className="container m-auto">{children}</div>
}
