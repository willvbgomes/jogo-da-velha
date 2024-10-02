import { HTMLAttributes } from 'react'
import { ValidValue } from '../hooks/game-rules'

interface SquareProps extends HTMLAttributes<HTMLButtonElement> {
  value: ValidValue | null
}

export const Square = ({ value, ...props }: SquareProps) => (
  <button
    {...props}
    className="h-20 w-20 border-l border-transparent text-3xl [&+button]:border-l-zinc-50"
  >
    {value}
  </button>
)
