import { ComponentProps } from 'react'
import { cn } from '@/lib/utils'
import { ValidValue } from '../hooks/game-rules'

type SquareProps = ComponentProps<'button'> & {
  squareValue: ValidValue | null
}

export const Square = ({ squareValue, ...props }: SquareProps) => (
  <button
    {...props}
    className={cn(
      'h-20 w-20 border-l border-transparent text-3xl [&+button]:border-l-primary',
      squareValue ? 'cursor-not-allowed' : 'cursor-pointer',
      squareValue === 'X' ? 'text-color1' : 'text-color2',
    )}
  >
    {squareValue}
  </button>
)
