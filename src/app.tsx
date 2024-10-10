import { Board } from './components/board'
import { RestartButton } from './components/restart-button'
import { GameProvider } from './contexts/game-provider'

export const App = () => (
  <div className="flex h-screen flex-col items-center justify-center gap-10">
    <GameProvider>
      <Board />
      <RestartButton />
    </GameProvider>
  </div>
)
