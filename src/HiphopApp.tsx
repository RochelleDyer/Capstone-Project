import { HashRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import routes from './config/routes'
import { Provider } from 'react-redux'
import {hiphopstore} from './redux/Hiphopstore'
import AuthChecker from './auth/authChecker'

function App() {
  
  return (
      <HashRouter>
        <Navbar />
          <Provider store = {hiphopstore}>
            <Routes>
              { routes.map ((route, index) => (
                <Route
                  key = {index}
                  path = {route.path}
                  element={
                    route.protected? (
                      <AuthChecker>
                        <route.component />
                      </AuthChecker>) : (
                    <route.component/>
                    )
                  } />
            
              ))}
            </Routes>
          </Provider>
      </HashRouter>   
  )
}


export default App
