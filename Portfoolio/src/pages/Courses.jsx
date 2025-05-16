import { Link } from "react-router-dom"

function Courses() {
  return (
    <div>
        <Link to="/">
        <button>Tagasi</button>
        </Link>
        <div>Kursuse sisu</div>
    </div>
  )
}

export default Courses