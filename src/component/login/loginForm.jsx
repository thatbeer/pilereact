import './loginform.styles.css'



const LoginForm = () => {
    
    return (
        <>
            <div className="col-6 mt-5 mx-auto card">
                <div className="card-body">
                    <div className="login-label ml-3" >
                        <h2>Login</h2>
                    </div>
                    <form className='container'>
                        <div className='form-container mr-'>
                            <div className="form-group">
                                <label>User name</label>
                                <input type="text" className="form-control" id="username" name="username" />
                            </div>
                            <div className="form-group">
                                <label>password</label>
                                <input type="password" className="form-control" id="password" name="password" />
                            </div>
                        </div>
                        <div className="button-container text-center d-flex-col mt-3 col-4">
                            <button type="submit" className="btn btn-primary my-1">Login</button>
                            <p>forget password?</p>
                        </div>
                        
                    </form>
                </div>
            </div>
        </>
    )
};

export default LoginForm;