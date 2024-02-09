const Layout = () => {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <h5 className="navbar-brand" >Task</h5>
                    <div className="navbar-nav d-flex flex-row ">
                        <a className="nav-link active me-3">
                            Add User
                        </a>
                        <a className="nav-link">User List</a>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Layout