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
      setEmployees([
        { "id": 3,
          "email": "emma.wong@reqres.in",
          "first_name": "Emma", 
          "last_name": "Wong",
          "avatar": "https://picsum.photos/200/300?random=1"

     },

     {      "id": 4,
          "email": "eve.holt@regres.in",
          "first_name": "Eve",
          "last_name": "Holt",
          "avatar": "https://picsum.photos/200/300?random=2"
     }

     
   ])


  }, []);

  

  // TODO: Load data from backend service

  const addEmployee = () => {

    const newEmp = {
      id: newEmployee.id,
      first_name: newEmployee.first_name,
      last_name: newEmployee.last_name,
      email: newEmployee.email,
      avatar: newEmployee.avatar
    };

    const updated = [...employees, newEmp];
    setEmployees(updated);

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

          
<tr className="input-row">
  <td>
    <input
      type="text"
      placeholder="ID"
      className="form-control"
      value={newEmployee.id}
      onChange={(e) => setNewEmployee({ ...newEmployee, id: e.target.value })}
    />
  </td>
  <td>
    <input
      type="text"
      placeholder="First Name"
      className="form-control"
      value={newEmployee.first_name}
      onChange={(e) => setNewEmployee({ ...newEmployee, first_name: e.target.value })}
    />
  </td>
  <td>
    <input
      type="text"
      placeholder="Last Name"
      className="form-control"
      value={newEmployee.last_name_name}
      onChange={(e) => setNewEmployee({ ...newEmployee, last_name: e.target.value })}
    />
  </td>
  <td>
    <input
      type="text"
      placeholder="Email"
      className="form-control"
      value={newEmployee.email}
      onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
    />
  </td>
  <td>
    <input
      type="text"
      placeholder="Avatar URL"
      className="form-control"
      value={newEmployee.avatar}
      onChange={(e) => setNewEmployee({ ...newEmployee, avatar: e.target.value })}
    />
  </td>
  <td>
    <Button type="submit" variant="success" onClick={addEmployee}>
      Add
    </Button>
  </td>
</tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Employees;