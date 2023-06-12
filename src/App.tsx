import { CssBaseline, ThemeProvider } from '@mui/material'
import { ColorModeContext, useMode } from 'context/theme.context'
import { ManagerGuard } from 'guards'
import { routesTypes } from 'models'
import { Backoffice } from 'modules/Backoffice'
import { Store } from 'modules/Store'
import { Suspense } from 'react'
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom'
import './App.css'

function App() {
  const { theme, colorMode } = useMode()

  return (
    <>
      <Router>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Suspense fallback={<>...</>}>
              <Routes>
                <Route path="/" element={<Navigate to={routesTypes.HOME} />} />
                <Route path="/*" element={<Store />} />
                <Route element={<ManagerGuard />}>
                  <Route
                    path={`${routesTypes.BACKOFFICE}/*`}
                    element={<Backoffice />}
                  />
                </Route>
              </Routes>
            </Suspense>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </Router>
    </>
  )
}

export default App
