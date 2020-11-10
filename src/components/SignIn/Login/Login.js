import React from 'react';
import '../SignIn.css';
import facebook from '../../../images/facebook_icon.svg';
import wechat from '../../../images/wechat_icon.svg';
import google from '../../../images/google_icon.svg';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import {FaRegCheckCircle} from 'react-icons/fa';
import {FaRegTimesCircle} from 'react-icons/fa';
import {FaEye} from 'react-icons/fa';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isClicked: false,
            isLogin: false,
            checkUsername: '',
            checkSurname: '',
            checkEmail: '',
            checkPassword: '',
            confirmPassword: '',
            checkIcon: null,
            isVisible: false,
            readTerm: false,
            oneLowerCase: false,
            oneUpperCase: false,
            oneNumber: false,
            eightDigits: false,
            UserName: '',
            SurName: '',
            Email: '',
            Password: ''
        };
        this.namePattern = /^[A-Za-z]+$/;
        this.passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
        this.emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

        this.username = React.createRef();
        this.surname = React.createRef();
        this.email = React.createRef();
        this.password = React.createRef();
        this.form = React.createRef();
        this.loginEmail = React.createRef();
        this.loginPassword = React.createRef();
        this.confirmPassword = React.createRef();
    }

    checkUsername = () =>{
        const userValue = this.username.current.value;
        if(userValue === '' ){
            this.setState({checkUsername: ''});
        }
        else{
            this.setState({checkUsername: 'Green'});
        }
    }

    checkSurname = () =>{
        const surnameValue = this.surname.current.value;
        if(surnameValue === '' ){
            this.setState({checkSurname: ''});
        }
        else if(surnameValue.match(this.namePattern)){
            this.setState({checkSurname: 'Green'});
        }
        else{
            this.setState({checkSurname: 'Red'});
        }
    }

    checkEmail = (email) =>{
        const emailValue = email;
        if(emailValue === '' ){
            this.setState({checkEmail: ''});
        }
        else if(emailValue.match(this.emailPattern)){
            this.setState({checkEmail: 'Green'});
        }
        else{
            this.setState({checkEmail: 'Red'});
        }
    }
    
    checkPassword = (password) => {
        const passwordValue = password;
        if(passwordValue === '' ){
            this.setState({checkPassword: ''});
        }
        else if(passwordValue.length > 8 && passwordValue.length < 25 && passwordValue.match(this.passwordPattern)){
            this.setState({checkPassword: 'Green'});
        }
        else{
            this.setState({checkPassword: 'Red'});
        }
    }

    verifyPassword = (password) => {
        const passwordValue = password;
        if(passwordValue === '' ){
            this.setState({confirmPassword: ''});
        }
        else if(passwordValue.length > 8 && passwordValue.length < 25 && passwordValue.match(this.passwordPattern)
        && passwordValue === this.loginPassword.current.value){
            this.setState({confirmPassword: 'Green'});
        }
        else{
            this.setState({confirmPassword: 'Red'});
        }
    }

    checkPattern = () => {
        const passwordValue = this.password.current.value;
        if(passwordValue.match(/(?=.*\d)/)){
            this.setState({oneNumber: true});
        }
        else{
            this.setState({oneNumber: false});
        }
        if(passwordValue.match(/(?=.*[a-z])/)){
            this.setState({oneLowerCase: true});
        }
        else{
            this.setState({oneLowerCase: false});
        }
        if(passwordValue.match(/(?=.*[A-Z])/)){
            this.setState({oneUpperCase: true});
        }
        else{
            this.setState({oneUpperCase: false});
        }
        if(passwordValue.match(/.{8,}/)){
            this.setState({eightDigits: true});
        }
        else{
            this.setState({eightDigits: false});
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });

        this.checkUsername();
        this.checkSurname();
        this.checkEmail(this.email.current.value);
        this.checkPassword(this.password.current.value);
        this.checkPattern();
    }

    loginChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });

        this.checkEmail(this.loginEmail.current.value);
        this.checkPassword(this.loginPassword.current.value);
        this.verifyPassword(this.confirmPassword.current.value);
    }

    clickRegister = async (e) => {
        e.preventDefault();

        const RegisterInfo = {
            UserName: this.state.Username,
            SurName: this.state.Surname,
            Email: this.state.Email,
            Password: this.state.Password
        }
        if(this.state.checkEmail === 'Green' && this.state.checkPassword === 'Green'){
            try{
                const response = await axios.post('/register', RegisterInfo);
                if(response.status === 201){
                    console.log(response.data);
                }
                else{
                }
            } catch (err) {
                console.log(err);
            }
        }
    }

    clickSignIn = async (e) => {
        e.preventDefault();

        const LoginInfo = {
            Email: this.state.Email,
            Password: this.state.Password,
        }

        // const config = {
        //     headers: {
        //         Authorization: `Bearer ${sessionStorage.getItem('login-token')}`
        //     }
        // }
        if(this.state.checkEmail === 'Green' && this.state.checkPassword === 'Green' && this.state.confirmPassword === 'Green'){
            try{
                const response = await axios.post(
                    '/login', 
                    LoginInfo,
                    // config
                    );
                if(response.status === 200){
                    this.setState({
                        isLogin: true
                    });
                    console.log(response);
                    sessionStorage.setItem('login-token', response.data.token);
                }
                else{
                    sessionStorage.setItem('login-token', null);
                }
            } catch (err) {
                console.log(err);
                sessionStorage.setItem('login-token', null);
            }
        }
    }

    responseGoogle = async (res) => {

        let { googleId, profileObj, tokenObj } = res;
        let { email, name } = profileObj;
        let { access_token } = tokenObj;
        let { givenName } = name;

        const googleInfo = {
            GoogleID: googleId,
            UserName: name,
            SurName: givenName,
            Email: email,
            Password: access_token
        };
        try{
            const response = await axios.post('/googleLogin', googleInfo);
            if(response.status === 200 || response.status === 201){
                console.log(response);
                sessionStorage.setItem('login-token', response.data.token);
            }
            else{
                sessionStorage.setItem('login-token', null);
            }
        } catch (err){
            console.log(err);
            sessionStorage.setItem('login-token', null);
        }
    }

    handleRegister = () => {
        this.props.switchLogin();
        this.setState({isClicked: true});
        this.setState({readTerm: false});
        this.setState({checkEmail: ''});
        this.setState({checkPassword: ''});
        this.setState({confirmPassword: ''});
        this.form.current.reset();
    }

    visibility = () => {
        this.setState({isVisible: !this.state.isVisible});
    }

    checkTerm = () => {
        this.setState({readTerm: !this.state.readTerm});
    }

    toggleLogin = (props) => {
        const {checkEmail, checkPassword, confirmPassword, checkUsername, checkSurname} = this.state;
        if(!this.props.SignupClicked){
            return(
                <div className="Login__login container-left">
                    <div className="Login__login--logincontainer move-left">
                        <h1>Login to Your Account</h1>
                        <h5>Login using social networks</h5>
                        <div className="Login__login--logincontainer--social">
                            <i><a><img src={facebook} alt="facebook_icon"/></a></i>
                            <GoogleLogin
                                clientId="124030455752-ctj88mk1vjbueamnf47fcjsp5p4ugpqn.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                                cookiePolicy={'single_host_origin'}
                                render={renderProps =>(
                                    <i><a onClick={renderProps.onClick}><img src={google} alt="google_icon"/></a></i>
                                )}
                            />
                            <i><a><img src={wechat} alt="wechat_icon"/></a></i>
                        </div>
                        <div className="Login__login--logincontainer--titlewrapper">
                            <span>OR</span>
                        </div>
                        <form ref={this.form}>
                            <div className="withIcon">
                                <input ref={this.loginEmail} className={checkEmail} type="text" name="Email" placeholder="Email" onChange={this.loginChange}/>
                                {checkEmail === 'Green' && <i className={checkEmail}><FaRegCheckCircle /></i>}
                                {checkEmail === 'Red' && <i className={checkEmail}><FaRegTimesCircle /></i>}
                                {checkEmail === '' && <i></i>}
                            </div>
                            <div className="withIcon">
                                <input ref={this.loginPassword} className={checkPassword} type="password" name="Password" placeholder="Password" onChange={this.loginChange}/>
                                {checkPassword === 'Green' && <i className={checkPassword}><FaRegCheckCircle /></i>}
                                {checkPassword === 'Red' && <i className={checkPassword}><FaRegTimesCircle /></i>}
                                {checkPassword === '' && <i></i>}
                            </div>
                            <div className="withIcon">
                                <input ref={this.confirmPassword} className={confirmPassword} type="password" name="confirmPassword" placeholder="Confirm Login" onChange={this.loginChange}/>
                                {confirmPassword === 'Green' && <i className={confirmPassword}><FaRegCheckCircle /></i>}
                                {confirmPassword === 'Red' && <i className={confirmPassword}><FaRegTimesCircle /></i>}
                                {confirmPassword === '' && <i></i>}
                            </div>
                            <button onClick={this.clickSignIn}>Sign In</button>
                        </form>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div className="Login__login container-right">
                    <div className="Login__login--registercontainer move-right">
                        <h1>Create Free Account</h1>
                        <h5>Sign up using social networks</h5>
                        <div className="Login__login--registercontainer--social">
                            <i><a><img src={facebook} alt="facebook_icon"/></a></i>
                            <i><a><img src={google} alt="google_icon"/></a></i>
                            <i><a><img src={wechat} alt="wechat_icon"/></a></i>
                        </div>
                        <div className="Login__login--registercontainer--titlewrapper">
                            <span>OR</span>
                        </div>
                        <form  ref={this.form}>
                            <div className="withIcon">
                                <input ref={this.username} className={checkUsername} type="text" id="username" name="Username" placeholder="Username" onChange={this.handleChange}/>
                                {checkUsername === 'Green' && <i className={checkUsername}><FaRegCheckCircle /></i>}
                                {checkUsername === 'Red' && <i className={checkUsername}><FaRegTimesCircle /></i>}
                                {checkUsername === '' && <i></i>}
                            </div>
                            <div className="withIcon">
                                <input ref={this.surname} className={checkSurname} type="text" id="surname" name="Surname" placeholder="Surname" onChange={this.handleChange}/>
                                {checkSurname === 'Green' && <i className={checkSurname}><FaRegCheckCircle /></i>}
                                {checkSurname === 'Red' && <i className={checkSurname}><FaRegTimesCircle /></i>}
                                {checkSurname === '' && <i></i>}
                            </div>
                            <div className="withIcon">
                                <input ref={this.email} className={checkEmail} type="text" id="email" name="Email" placeholder="Email" onChange={this.handleChange}/>
                                {checkEmail === 'Green' && <i className={checkEmail}><FaRegCheckCircle /></i>}
                                {checkEmail === 'Red' && <i className={checkEmail}><FaRegTimesCircle /></i>}
                                {checkEmail === '' && <i></i>}
                            </div>
                            <div className="withIcon">
                                <input ref={this.password} className={checkPassword} type={this.state.isVisible ? "text" : "password"} id="password" name="Password" placeholder="Password" onChange={this.handleChange}/>
                                {checkPassword === 'Green' && <i id="visibility3" className={checkPassword} onClick={this.visibility}><FaEye /></i>}
                                {checkPassword === 'Red' && <i id="visibility3" className={checkPassword} onClick={this.visibility}><FaEye /></i>}
                                {checkPassword === '' && <i id="visibility3" onClick={this.visibility}><FaEye /></i>}
                            </div>
                            <div className="passwordRules">
                                <h3>Password <span>must</span> contain at least:</h3>
                                <div className="passwordRules--ruleWrapper">
                                    {this.state.oneLowerCase ? <FaRegCheckCircle style={{color:"#1FC36A"}}/> : <FaRegTimesCircle />} 
                                    {this.state.oneLowerCase ? <h5 style={{color:"#1FC36A"}}>One lowercase character</h5> : <h5>One lowercase character</h5>} 
                                    {this.state.oneUpperCase ? <FaRegCheckCircle style={{color:"#1FC36A"}}/> : <FaRegTimesCircle />} 
                                    {this.state.oneUpperCase ? <h5 style={{color:"#1FC36A"}}>One uppercase character</h5> : <h5>One uppercase character</h5>} 
                                    {this.state.oneNumber ? <FaRegCheckCircle style={{color:"#1FC36A"}}/> : <FaRegTimesCircle />} 
                                    {this.state.oneNumber ? <h5 style={{color:"#1FC36A"}} className="number">One number</h5> : <h5 className="number">One number</h5>} 
                                    {this.state.eightDigits ? <FaRegCheckCircle style={{color:"#1FC36A"}}/> : <FaRegTimesCircle />} 
                                    {this.state.eightDigits ? <h5 style={{color:"#1FC36A"}}>8 characters minimum</h5> : <h5>8 characters minimum</h5>} 
                                </div>
                            </div>
                            <div className="readTerm">
                                <input type="checkbox" id="term" name="term" value="term" onChange={this.checkTerm}/>
                                <label>I have read the <a>Term & Conditions</a></label>
                            </div>
                            <button onClick={this.clickRegister} className={this.state.readTerm ? "" : "btnDisabled"} disabled={this.state.readTerm ? false : true}>Sign Up</button>
                        </form>
                    </div>
                </div>
            )
        }
    }

    render(){
        return <div className="Registration">
                    <div className="Login">
                        <div className={this.props.SignupClicked ? "Login__signincontainer signin-right": "Login__signincontainer signin-left"}>
                            <div className="Login__signincontainer--textwrapper">
                                <h1>One of Us?</h1>
                                <h4>If you already have an account, just sign in. Welcome Back!</h4>
                                <button onClick={this.handleRegister}>Sign In</button>
                            </div>
                        </div>

                        <div className="Login__login">
                            <this.toggleLogin />
                        </div>

                        <div className={!this.props.SignupClicked ? "Login__asksignup sidewrapper-right" : "Login__asksignup sidewrapper-left"}>
                        </div>

                        <div className={this.props.SignupClicked ? "Login__signupcontainer signup-right": "Login__signupcontainer signup-left"}>
                            <div className="Login__signupcontainer--textwrapper">
                                <h1>New Customer?</h1>
                                <h4>Sign up and enjoy a great amount of fresh pizzas!</h4>
                                <button onClick={this.handleRegister}>Sign Up</button>
                            </div>
                    </div>
                    </div>   
               </div>
    }
}

export default Login;

