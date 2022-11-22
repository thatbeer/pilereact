import './loginform.styles.css'


import { useState, useEffect } from 'react';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';




const InitialForm = {
    username:'',
    password:'',
};

const LoginForm = () => {

    const navigate = useNavigate();

    

    const [formfields , setFormfields] = useState(InitialForm);
    const {username, password} = formfields;

    const resetFormFields = () => {
        setFormfields(InitialForm);
    };

    const onChangeHandler = (event) => {
        const {name , value} = event.target;

        setFormfields((formfields) => ({...formfields,[name]:value}));
        console.log(formfields);
    };
    

    const loginUser = async (credential) => {
        return fetch('https://www.mecallapi.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credential)
        }).then(data => data.json())
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const response = await loginUser({
          username,
          password
        });
        if ('accessToken' in response) {
          swal("Success", response.message, "success", {
            buttons: false,
            timer: 2000,
          })
          .then((value) => {
            localStorage.setItem('accessToken', response['accessToken']);
            localStorage.setItem('user', JSON.stringify(response['user']));
            resetFormFields();
            window.location.href = "/main";
          });
        } else {
          swal("Failed", response.message, "error");
          resetFormFields();
        }
      }

      const checkifuserIn = () => {
        return  localStorage.getItem("accessToken");
      }
    
      useEffect(() => {
        const response = checkifuserIn();
        if (response) {
          navigate('/main')
        }
      }, []);


    return (
        <>
            <div className="col-6 mt-5 mx-auto card">
                <div className="card-body">
                    <div className="login-label ml-3" >
                        <h2>Login</h2>
                    </div>
                    <form className='container' onSubmit={handleSubmit}>
                        <div className='form-container mr-'>
                            <div className="form-group">
                                <label>User name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="username" 
                                    name="username"
                                    value={username}
                                    onChange={onChangeHandler} />
                            </div>
                            <div className="form-group">
                                <label>password</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="password" 
                                    name="password"
                                    value={password}
                                    onChange={onChangeHandler} />
                            </div>
                        </div>
                        <div className="button-container text-center d-flex-col mt-3 col-4">
                            <button 
                                type="submit" 
                                className="btn btn-primary my-1">Login</button>
                            <p>forget password?</p>
                        </div>
                        
                    </form>
                </div>
            </div>
        </>
    )
};

export default LoginForm;