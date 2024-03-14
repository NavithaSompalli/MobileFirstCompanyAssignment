// App.js

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  )
}

export default App
