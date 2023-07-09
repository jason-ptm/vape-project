import { CssBaseline, ThemeProvider } from '@mui/material'
import { ColorModeContext, useMode } from 'context/theme.context'
import { ManagerGuard } from 'guards'
import { routesTypes } from 'models'

import { Suspense, lazy } from 'react'
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom'
import './App.css'

const Public = lazy(() => import('modules/Public/Public'))
const Backoffice = lazy(() => import('modules/Backoffice/Backoffice'))

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
                <Route path="/*" element={<Public />} />
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
