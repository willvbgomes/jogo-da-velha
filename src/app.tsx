import { Board } from './components/board'
import { RestartButton } from './components/restart-button'
import { Status } from './components/status'
import { ThemeToggle } from './components/theme-toggle'
import { GameProvider } from './contexts/game-provider'
import { ThemeProvider } from './contexts/theme-provider'

export const App = () => (
  <main className="flex h-screen flex-col items-center justify-center gap-10">
    <ThemeProvider defaultTheme="dark" storageKey="tic-tac-toe-theme">
      <ThemeToggle />
      <GameProvider>
        <Status />
        <Board />
        <RestartButton />
      </GameProvider>
    </ThemeProvider>
  </main>
)
