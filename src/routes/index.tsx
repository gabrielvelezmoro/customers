import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './route'
import Home from 'pages/authentication/home'
import CustomerList from 'pages/common/city/list'
import CustomerForm from 'pages/common/city/form'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />

    <Route exact path="/customers" component={CustomerList} />
    <Route exact path="/customers/new" component={CustomerForm} />
    <Route path="/customers/edit/:id" component={CustomerForm} />
  </Switch>
)

export default Routes
