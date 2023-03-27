import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './route'
import Home from 'pages/authentication/home'
import CityList from 'pages/common/city/list'
import CityForm from 'pages/common/city/form'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />

    <Route exact path="/cities" component={CityList} />
    <Route exact path="/cities/new" component={CityForm} />
    <Route path="/cities/edit/:id" component={CityForm} />
  </Switch>
)

export default Routes
