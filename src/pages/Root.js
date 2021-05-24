import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import PageSearch from './Promotion/Search/Search'
import PageForm from './Promotion/Form/Form'

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/create" component={PageForm} />
        <Route path="/edit/:id" component={PageForm} />
        <Route path="/" component={PageSearch} />
      </Switch>
    </Router>
  )
}

export default Root
