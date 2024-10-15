import { useGameContext } from '../hooks/game-context'

export const Status = () => {
  const { squares, xIsNext, getWinner } = useGameContext()
  const winner = getWinner(squares)
  const drawGame = squares.every(value => value !== null)

  return (
    <span className="text-2xl">
      {drawGame
        ? 'Empate'
        : winner
          ? `Vencedor: ${winner}`
          : `Próximo Jogador: ${xIsNext ? 'X' : 'O'}`}
    </span>
  )
}
