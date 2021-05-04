import React from "react"
import "./EmployeeTable.css"
import { Link } from "react-router-dom"

const Employees = (props) => {
  const clicked = (index) => {
    let employee = props.employees[index]
    localStorage.setItem("fname", employee.first_name)
    localStorage.setItem("lname", employee.last_name)
    localStorage.setItem("email", employee.email)
  }

  let employees = props.employees.map((emp, index) => {
    return (
      <tr key={emp.id} onClick={() => clicked(index)}>
        <td>{emp.first_name}</td>
        <td>{emp.last_name}</td>
        <td>{emp.email}</td>
        <td>
          <img src={emp.avatar} alt="img"></img>
        </td>
      </tr>
    )
  })
  return (
    <Link to="/create">
      <table>
        <thead>
          <tr>
            <th>First_Name</th>
            <th>Last_Name</th>
            <th>Email</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>{employees}</tbody>
      </table>
    </Link>
  )
}

export default Employees
