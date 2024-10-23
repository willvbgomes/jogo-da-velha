import { cn } from '@/lib/utils'
import { useGameContext } from '../hooks/game-context'

export const Status = () => {
  const { squares, xIsNext, getWinner } = useGameContext()
  const winner = getWinner(squares)
  const drawGame = !winner && squares.every(value => value !== null)

  return (
    <span
      className={cn(
        'rounded border-2 border-transparent p-3 text-2xl',
        !winner
          ? null
          : winner === 'X'
            ? 'bg-color1/40 border-color1'
            : 'bg-color2/40 border-color2',
      )}
    >
      {drawGame
        ? 'Empate'
        : winner
          ? `Vencedor: ${winner}`
          : `Próximo Jogador: ${xIsNext ? 'X' : 'O'}`}
    </span>
  )
}
