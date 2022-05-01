import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout/Layout"
import Profile from "../components/Profile"
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"
import Status from "../components/Status"

const App = () =>  {
  return (
      <Layout>
        <Status />
        <Router>
          <PrivateRoute path="/app/profile" component={Profile} />
          <Login path="/app/login" />
        </Router>
      </Layout>
  )
}

export default App
