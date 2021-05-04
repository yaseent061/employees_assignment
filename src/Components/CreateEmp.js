import React, { useState, useEffect } from "react"
import "./createEmp.css"

const CreateEmp = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    setFirstName(localStorage.getItem("fname"))
    setLastName(localStorage.getItem("lname"))
    setEmail(localStorage.getItem("email"))
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
    alert(
      "Firstname :" +
        firstName +
        "\nLastname :" +
        lastName +
        "\nEmail :" +
        email +
        "\nSuccess!!"
    )
  }
  return (
    <div>
      <h1>Create Employee</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">FirstName : </label>
        <input type="text" id="fname" value={firstName} disabled></input>
        <br></br>
        <label htmlFor="lname">LastName : </label>
        <input type="text" id="lname" value={lastName} disabled></input>
        <br></br>
        <label htmlFor="email">Email : </label>
        <input type="text" id="email" value={email} disabled></input>
        <br></br>
        <label htmlFor="img">Image : </label>
        <input type="file" id="img" accept="image/*" required></input>
        <br></br>
        <input type="submit"></input>
      </form>
    </div>
  )
}

export default CreateEmp
