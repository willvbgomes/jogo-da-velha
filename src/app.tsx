import { Board } from './components/board'
import { GameProvider } from './contexts/game-provider'

export const App = () => (
  <>
    <GameProvider>
      <Board />
    </GameProvider>
  </>
)
