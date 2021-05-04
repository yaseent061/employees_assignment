import "./App.css"
import React, { Component } from "react"
import Employees from "./Employees"
import CreateEmp from "./CreateEmp"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Details} />
          <Route path="/create" render={() => <CreateEmp />} />
        </Switch>
      </div>
    </Router>
  )
}

class Details extends Component {
  state = {
    employees: null,
    loading: true,
  }
  async componentDidMount() {
    try {
      const response = await fetch("https://reqres.in/api/users")
      const data = await response.json()
      this.setState({ employees: data.data, loading: false })
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    return (
      <div>
        {this.state.loading ? (
          <h1>Loading...</h1>
        ) : (
          <Employees employees={this.state.employees} />
        )}
      </div>
    )
  }
}

export default App
