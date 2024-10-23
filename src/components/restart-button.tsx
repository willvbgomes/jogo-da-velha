import { cn } from '@/lib/utils'
import { useGameContext } from '../hooks/game-context'

export const RestartButton = () => {
  const { gameOver, resetGame } = useGameContext()

  return (
    <button
      className={cn(
        'rounded-lg border bg-primary-foreground px-6 py-3 text-primary transition-all',
        gameOver
          ? 'cursor-pointer hover:bg-foreground/80 hover:text-primary-foreground'
          : 'cursor-not-allowed text-primary/30',
      )}
      onClick={resetGame}
      disabled={!gameOver}
    >
      Reiniciar
    </button>
  )
}
