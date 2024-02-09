import { Outlet, Link } from "react-router-dom"

const Layout = () => {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <h5 className="navbar-brand" >Task</h5>
                    <div className="navbar-nav d-flex flex-row ">
                        <Link className="nav-link active me-3" to="/user/add">
                            Add User
                        </Link>
                        <Link className="nav-link" to="/user/list">User List</Link>
                    </div>
                </div>

            </nav>

            <div >
                <Outlet />
            </div>
        </>
    )
}

export default Layout