import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

function Employees() {
  const [employees, setEmployees] = useState([]);
  
  const [newEmployee, setNewEmployee] = useState({
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    avatar: ""
  });

  useEffect(() => {
    fetch("https://reqres.in/api/users?per_page=12")
    .then(res => res.json())
    .then(data => setEmployees(data.data))

  }, []);

  // TODO: Load data from backend service

  const addEmployee = () => {

    // TODO: Add validations
    // TODO: Add an employee to the table
  }

  const deleteEmployee = (index) => {
    const updated = [...employees];
    updated.splice(index, 1);
    setEmployees(updated);
    // TODO: Delete an employee from the table
  }

  return (
  <div className="container">
      <h2 className="mb-4">Employees</h2>
      <Table className="table table-hover table-bordered table-sortable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Avatar</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={emp.id}>
              <td><strong>{emp.id}</strong></td>
              <td>{emp.first_name} {emp.last_name}</td>
              <td>{emp.email}</td>
              <td><img src={emp.avatar} alt="avatar" width="50" /></td>
              <td><Button variant="danger" onClick={() => deleteEmployee(index)}>Delete</Button></td>
            </tr>
          ))}

          {/* Input Row — we’ll activate this in next step */}
          <tr className="input-row">
            <td><input type="text" placeholder="ID" className="form-control" /></td>
            <td><input type="text" placeholder="Name" className="form-control" /></td>
            <td><input type="text" placeholder="Email" className="form-control" /></td>
            <td><input type="text" placeholder="Avatar URL" className="form-control" /></td>
            <td><Button type="submit" variant="success" onClick={addEmployee}>Add</Button></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Employees;