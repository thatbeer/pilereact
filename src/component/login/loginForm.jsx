import './loginform.styles.css'
import { Modal , Button } from 'bootstrap';

import { useState, useEffect } from 'react';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import {  useTokenStore } from '../../store/mecallApiStore';
import shallow from 'zustand/shallow'

import Example from '../MoldalExample/modal';

const InitialForm = {
    username:'',
    password:'',
};
const deviceid = 'sss';
const appname = 'browser';

const LoginForm = () => {
    const navigate = useNavigate();


    const {A_token , setAToken,R_token , setRToken} = useTokenStore((state) => ({
        A_token:state.A_token,
        setAToken: state.setAToken,
        R_token:state.R_token,
        setRToken: state.setRToken
    }),shallow)

    const [formfields , setFormfields] = useState(InitialForm);
    const {username, password} = formfields;

    const resetFormFields = () => {
        setFormfields(InitialForm);
    };

    const onChangeHandler = (event) => {
        const {name , value} = event.target;

        setFormfields((formfields) => ({...formfields,[name]:value}));
    };
    

    // const loginUser = async (credential) => {
    //     return fetch('https://www.mecallapi.com/api/login', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(credential)
    //     }).then(data => data.json())
    // }

    const loginUserP = async ({userno,userpw, devideid,appname}) => {
        return fetch('http://147.50.12.230:84/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userno,userpw, devideid,appname})
        }).then(data => data.json())
    }


    // const handleSubmit = async event => {
    //     event.preventDefault();
    //     const response = await loginUser({
    //       username,
    //       password
    //     });
    //     console.log(response)
    //     if ('accessToken' in response) {
    //       swal("Success", response.message, "success", {
    //         buttons: false,
    //         timer: 2000,
    //       })
    //       .then((value) => {
    //         localStorage.setItem('accessToken', response['accessToken']);
    //         localStorage.setItem('user', JSON.stringify(response['user']));
    //         resetFormFields();
    //         window.location.href = "/main";
    //       });
    //     } else {
    //       swal("Failed", response.message, "error");
    //       resetFormFields();
    //     }
    //   }

      const handleSubmitP = async event => {
        event.preventDefault();
        const response = await loginUserP({
          userno:username,
          userpw:password,
          deviceid,
          appname
        });
        console.log(response)
        if ('access_token' in response) {
          swal("Success", response.object, "success", {
            buttons: false,
            timer: 2000,
          })
          .then((value) => {
            localStorage.setItem('access_token', response['access_token']);
            // localStorage.setItem('data',JSON.stringify(response))
            setAToken(response['access_token']);
            resetFormFields();
            window.location.href = "/main";
          });
        } else {
          swal("Failed", response.message, "error");
          resetFormFields();
        }
      }


      

      // const checkifuserIn = () => {
      //   return  localStorage.getItem("accessToken");
      // }

      const checkifuserIn = () => {
        return  A_token
      }
      // if (A_token != null) {
      //   navigate('/main')
      // }


      const [onShow, setOnShow] = useState(false);

      const onClickModal = () => setOnShow(!onShow);



    
      useEffect(() => {
    
        if (A_token != null) {
          navigate('/main')
        }
      });

    return (
        <>
            <div className="container col-6 mt-5 mx-auto card">
                <div className="card-body">
                    <div className="login-label ml-3" >
                        <h2>Login</h2>
                    </div>
                    <form className='container' onSubmit={handleSubmitP}>
                        <div className='form-container '>
                            <div className="form-group">
                                <label className='my-2'>User name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="username" 
                                    name="username"
                                    value={username}
                                    onChange={onChangeHandler} />
                            </div>
                            <div className="form-group">
                                <label className='my-2'>password</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="password" 
                                    name="password"
                                    value={password}
                                    onChange={onChangeHandler} />
                            </div>
                        </div>
                        <div className="button-container row text-center d-flex-col my-3 mx-2 ">
                            <button 
                                type="submit" 
                                className="col btn btn-primary my-1">Login</button>
                            <div className='col-7 mt-3 form-check d-flex-inline'>
                              {/* <input className='form-check-input mt-3 mx-2' type='checkbox' id=''/> */}
                              <p 
                                className=' mt-2 underline text-sky-700 
                                  hover:text-sky-400 hover:cursor-pointer'
                                onClick={onClickModal}
                                
                                >forget password?</p>
                            </div>
                          
                        </div>
                        
                    </form>
                {/* <Modal
                  show={onShow}
                  onHide={onClickModal}
                  backdrop='static'
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Modal Title</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    I wil not ba braba
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant='secondary' onClick={onClickModal}>
                      Click me
                    </Button>
                  </Modal.Footer>
                </Modal> */}
                  

                </div>
            </div>
        </>
    )
};

export default LoginForm;