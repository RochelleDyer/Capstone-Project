import { HashRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import routes from './config/routes'
import { Provider } from 'react-redux'
import {rnbstore} from './redux/Rnbstore'
import AuthChecker from './auth/authChecker'

function RnbApp() {
  
  return (
      <HashRouter>
        <Navbar />
          <Provider store = {rnbstore}>
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


export default RnbApp
