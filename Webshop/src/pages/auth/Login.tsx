import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"


function Login() {
  const {setLoggedIn} = useContext(AuthContext);

  return (
    <div>
      <label>Email</label> <br />
      <input type="email"  /> <br />
      <label>Password</label> <br />
      <input type="password"  /> <br />
      <button onClick={() => setLoggedIn(true)}>Login</button> <br />
      <Link to="/signup">
      <button>Register</button>
      </Link>
    </div>
  )
}

export default Login