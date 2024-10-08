import { useGameContext } from '../hooks/game-context'
import { Square } from './square'

type BoardRowProps = {
  rowIndex: number
}

export const BoardRow = ({ rowIndex }: BoardRowProps) => {
  const { squares, setSquareValue } = useGameContext()

  return (
    <div className="flex border-t border-transparent [&+div]:border-t-zinc-100">
      {Array(3)
        .fill(null)
        .map((_, i) => {
          const squareIndex = rowIndex * 3 + i

          return (
            <Square
              key={squareIndex}
              squareValue={squares[squareIndex]}
              onClick={() => setSquareValue(squareIndex)}
            />
          )
        })}
    </div>
  )
}
