import { useState } from 'react'

export type ValidValue = 'X' | 'O'

export type SquareValues = ValidValue[] | null[]

export const useGameRules = () => {
  const [xIsNext, setXIsNext] = useState(true)
  const [squares, setSquares] = useState<SquareValues>(Array(9).fill(null))

  const setSquareValue = (index: number) => {
    if (squares[index] || getWinner(squares)) {
      return
    }

    const newSquares = squares.slice()

    newSquares[index] = xIsNext ? 'X' : 'O'

    setXIsNext(!xIsNext)
    setSquares(newSquares)
  }

  const getWinner = (squares: SquareValues) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (const condition of winConditions) {
      const [a, b, c] = condition

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        return squares[a]
      }
    }

    return null
  }

  return {
    squares,
    setSquareValue,
    getWinner,
  }
}
