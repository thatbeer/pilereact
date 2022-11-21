import './navbar.css'

const Navigate = () => {

    return (
        <div className="nav-bar-container">
            <header className="py-1 mb-2 mt-2 border-b">
                <div className="container d-grid gap-3 items-center">
                <div className="dropdown">
                    <div className='d-flex align-items-center col-lg-4 mb-2 mb-lg-0 '>
                        <p>asas</p>
                        <ul className='dropdown-menu text-small shadow'>
                            <li>Overview</li>
                            <li>Customer</li>
                            <li>Product</li>
                            <li>Report</li>
                        </ul>
                    </div>

                    <div className='d-flex align-items-center'>
                        <form className='w-100 me-3' role="search">
                            <input type="search" className="form-control" placeholder='Search...' aria-label="Search"/>
                        </form>

                        <div className='flex--shrink-0 dropdown'>
                            <a>sas</a>
                        </div>


                    </div>


                </div>
                </div>
            </header>

        </div>
    )
};

export default Navigate;