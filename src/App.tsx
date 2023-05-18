import { ManagerGuard } from 'guards'
import { routesTypes } from 'models'
import { Backoffice } from 'modules/Backoffice'
import { Store } from 'modules/Store'
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom'
import './App.css'
import { ColorModeContext, useMode } from 'context/theme.context'
import { CssBaseline, ThemeProvider } from '@mui/material'

function App() {
  const { theme, colorMode } = useMode()

  return (
    <>
      <Router>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              <Route path="/*" element={<Store />} />
              <Route element={<ManagerGuard />}>
                <Route
                  path={`${routesTypes.BACKOFFICE}/*`}
                  element={<Backoffice />}
                />
              </Route>
            </Routes>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </Router>
    </>
  )
}

export default App
