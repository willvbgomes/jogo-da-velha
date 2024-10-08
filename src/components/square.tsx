import { ComponentProps } from 'react'
import { ValidValue } from '../hooks/game-rules'

type SquareProps = ComponentProps<'button'> & {
  squareValue: ValidValue | null
}

export const Square = ({ squareValue, ...props }: SquareProps) => (
  <button
    {...props}
    className="h-20 w-20 border-l border-transparent text-3xl [&+button]:border-l-zinc-50"
  >
    {squareValue}
  </button>
)
