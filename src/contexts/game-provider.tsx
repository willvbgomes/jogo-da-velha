import { createContext, ReactNode } from 'react'
import { SquareValues, useGameRules } from '../hooks/game-rules'

type ContextProps = {
  gameOver: boolean
  squares: SquareValues
  resetGame: () => void
  setSquareValue: (index: number) => void
}

type GameContextProps = {
  children: ReactNode
}

export const GameContext = createContext<ContextProps | null>(null)

export const GameProvider = ({ children }: GameContextProps) => {
  const { gameOver, squares, resetGame, setSquareValue } = useGameRules()

  return (
    <GameContext.Provider
      value={{
        gameOver,
        squares,
        resetGame,
        setSquareValue,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}
