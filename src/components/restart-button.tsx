import { useGameContext } from '../hooks/game-context'

export const RestartButton = () => {
  const { gameOver, resetGame } = useGameContext()

  return (
    <button
      className="rounded-lg border px-6 py-3"
      onClick={resetGame}
      disabled={!gameOver}
    >
      Reiniciar
    </button>
  )
}
