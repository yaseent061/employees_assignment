import "./App.css"
import React from "react"
import EmployeeTable from "./EmployeeTable/EmployeeTable"

const Employees = (props) => {
  return (
    <div className="App">
      <h1>Employee Details</h1>
      <EmployeeTable employees={props.employees} />
    </div>
  )
}

export default Employees
