import { BoardRow } from './board-row'

export const Board = () => (
  <div className="flex flex-col">
    {Array(3)
      .fill(null)
      .map((_, i) => (
        <BoardRow rowIndex={i} key={i} />
      ))}
  </div>
)
