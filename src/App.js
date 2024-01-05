import {BrowserRouter, Route, Switch} from 'react-router-dom'

import HomePage from './components/HomePage'
import AddProjectPage from './components/AddProjectPage'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/addProjects" component={AddProjectPage} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/addProjects" component={Contacts} />
    </Switch>
  </BrowserRouter>
)

export default App
