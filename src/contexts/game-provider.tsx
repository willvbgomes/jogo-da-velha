import { createContext, ReactNode } from 'react'
import { SquareValues, useGameRules, ValidValue } from '../hooks/game-rules'

type ContextProps = {
  gameOver: boolean
  squares: SquareValues
  xIsNext: boolean
  getWinner: (squares: SquareValues) => ValidValue | null
  resetGame: () => void
  setSquareValue: (index: number) => void
}

type GameContextProps = {
  children: ReactNode
}

export const GameContext = createContext<ContextProps | null>(null)

export const GameProvider = ({ children }: GameContextProps) => {
  const { gameOver, squares, xIsNext, getWinner, resetGame, setSquareValue } =
    useGameRules()

  return (
    <GameContext.Provider
      value={{
        gameOver,
        squares,
        xIsNext,
        getWinner,
        resetGame,
        setSquareValue,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}
