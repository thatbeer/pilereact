
import background from '../../assets/bg_1.jpg';
// `url(${background})`

const LgInTempalte = () => {
    return (
        <div className="d-flex half">
            <div className="bg-cover bg-center order-1 order-md-2" style={{backgroundImage: "url(../../assets/bg_1.jpg )"}}>
            {/* <img className="bg-cover bg-center object-fit transform md:flex hover:opacity-100 duration-1000" src={background} alt="Mountain"/> */}
            </div>
            <div className="contents order-2 order-md-1">
                <div className="container my-auto">
                    <div className="row align-items-center justify-content-center">
                        <div className='col-md-7'>
                            <h3>Login To
                            <string>Colorlib</string>
                            </h3>
                            <p className='mb-4'>Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
                            <form>
                                <div className='form-group first'>
                                    <label for='username'>Username</label>
                                    <input type="text" className='form-control' placeholder="email" id="username"/>
                                </div>
                                <div class="form-group last mb-3">
                                    <label for="password">Password</label>
                                    <input type="password" class="form-control" placeholder="Your Password" id="password"/>
                                </div>
                                <div class="d-flex mb-2 align-items-center">
                                    <label class="control control--checkbox mb-0"><span class="caption">Remember me</span>
                                    <input type="checkbox" checked="checked"/>
                                    <div class="control__indicator"></div>
                                    </label>
                                    <span class="ml-auto">Forgot Password?</span> 
                                </div>
                                <input type="submit" value="Log In" class="btn btn-block btn-primary"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LgInTempalte;