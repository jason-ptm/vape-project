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

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={routesTypes.HOME} />} />
          <Route path={routesTypes.HOME} element={<Store />} />
          <Route element={<ManagerGuard />}>
            <Route
              path={`${routesTypes.BACKOFFICE}/*`}
              element={<Backoffice />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
