import { createContext, ReactNode } from 'react'
import { SquareValues, useGameRules } from '../hooks/game-rules'

type ContextProps = {
  squares: SquareValues
  setSquareValue: (index: number) => void
}

type GameContextProps = {
  children: ReactNode
}

export const GameContext = createContext<ContextProps | null>(null)

export const GameProvider = ({ children }: GameContextProps) => {
  const { squares, setSquareValue } = useGameRules()

  return (
    <GameContext.Provider
      value={{
        squares,
        setSquareValue,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}
