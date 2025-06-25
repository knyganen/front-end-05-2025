import { Link } from 'react-router-dom'

function AdminHome() {
  return (
    <div>
      <Link to="/admin/add-product"><button className="button">Add product</button></Link>
      <Link to="/admin/edit-product"><button className="button">Edit product</button> </Link>
      <Link to="/admin/maintain-categories"><button className="button">Maintain categories</button></Link>
      <Link to="/admin/maintain-products"><button className="button">Maintain products</button></Link>
      <Link to="/admin/maintain-shops"><button className="button">Maintain shops</button></Link>
    </div>
  )
}

export default AdminHome