import { BoardRow } from './board-row'

export const Board = () => (
  <div className="flex h-screen flex-col items-center justify-center">
    {Array(3)
      .fill(null)
      .map((_, i) => (
        <BoardRow rowIndex={i} key={i} />
      ))}
  </div>
)
