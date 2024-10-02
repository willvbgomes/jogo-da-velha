import { useContext } from 'react'
import { GameContext } from '../contexts/game-provider'

export const useGameContext = () => {
  const context = useContext(GameContext)

  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider')
  }

  return context
}
