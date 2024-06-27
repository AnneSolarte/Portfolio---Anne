import { useContext } from 'react'
import { Context } from '../context/context'

export const useContextHook = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error('Context is empty')
  }

  return {
    ...context
  }
}
