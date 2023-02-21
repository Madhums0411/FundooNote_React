import React from "react";
// import './login.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import { loginAPI } from "../../services/userservice";
import { makeStyles } from '@mui/styles';
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles({
    maindiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '55px',
    },

    Lcontainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '30vw',
        height: '80vh',
        border: '1px solid #dadce0',
        borderRadius: '8px',
        justifyContent: 'space-around',
        paddingLeft: '40px',
        paddingRight: '40px',

    },

    Lh1: {
        width: '120px'
    },

    Lh2: {
        color: '#202124',
        fontFamily: '"Google Sans", "Noto Sans Myanmar UI", arial, sans - serif',
        fontSize: '30px',
        fontWeight: '400',

    },

    Lh3: {
        color: '#202124',
        fontFamily: '"Google Sans", "Noto Sans Myanmar UI", arial, sans - serif',
        fontSize: '20px',
        fontWeight: '400',
    },


    Lbox1: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '20px'

    },

    Lletter: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        fontSize: '15px',
        color: '#5f6368',
        fontFamily: 'roboto, "Noto Sans Myanmar UI", arial, sans - serif',

    },

    Lbutton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',


    },

    Lcheckbox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontSize: 'medium',
        width: '10vw',
        textIndent: '3mm',
        color: '#5f6368',

    },

    Lbutton1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',


    },


    ['@media screen and (min-width:320px) and (max-width:480px)']: {
        maindiv: {
            paddingTop: '5px',
        },

        Lcontainer: {
            width: '60vw',
            height: '80vh',
            paddingLeft: '10px',
            paddingRight: '10px',

        },

        Lh1: {
            width: '90px'
        },

        Lh2: {
            fontSize: '20px',
        },

        Lh3: {
            fontSize: '15px',
        },


        Lbox1: {
            gap: '10px',
            justifyContent: 'space-around'
        },

        Lletter: {
            fontSize: '10px',

        },

        Lbutton: {
            fontSize: '0.5rem'

        },

        Lcheckbox: {
            width: '40vw',
            fontSize: '10px',
        },

        Lbutton1: {
            fontSize: '10px',
            fontSize: '0.5rem'


        },

    },
    ['@media screen and (min-width:481px) and (max-width:768px)']: {
        maindiv: {
            paddingTop: '5px',
        },

        Lcontainer: {
            width: '50vw',
            height: '90vh',
            paddingLeft: '20px',
            paddingRight: '20px',

        },

        Lh1: {
            width: '100px'
        },

        Lh2: {
            fontSize: '30px',
        },

        Lh3: {
            fontSize: '20px',
        },


        Lbox1: {
            gap: '15px',
            justifyContent: 'space-around'
        },

        Lletter: {
            fontSize: '15px',

        },

        Lbutton: {
            fontSize: '0.5rem'

        },

        Lcheckbox: {
            width: '40vw',
            fontSize: '10px',
        },

        Lbutton1: {
            fontSize: '10px',
            fontSize: '0.5rem'


        },

    },

    ['@media screen and (min-width:769px) and (max-width:1024px)']: {
        maindiv: {
            paddingTop: '40px',
        },

        Lcontainer: {
            width: '40vw',
            height: '90vh',
            paddingLeft: '20px',
            paddingRight: '20px',
         

        },

        Lh1: {
           
        },

        Lh2: {
            
        },

        Lh3: {
          
        },


        Lbox1: {
            // gap: '15px',
            justifyContent: 'space-evenly'
        },

        Lletter: {
           

        },

        Lbutton: {
    

        },

        Lcheckbox: {
            width: '40vw',
            
        },

        Lbutton1: {
          


        },

    }

});

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
// const passwordRegex = /^(?=.[A-Z])(?=.[0-9])(?=.[@#$%^&-+=()])([a-zA-Z0-9]).{8,}$/;
// const passwordRegex = /^[A-Z]+[a-zA-Z]{6,16}[0-9]+[><.,*&^%$#@!?]{1}$"/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
// const passwordRegex = /^[a-zA-Z0-9]{8,16}$"/;

function Login() {
    const classes = useStyles();
    const [loginObj, setLoginObj] = useState({ email: "", password: "" })
    const [regexObj, setRegexObj] = useState({ emailBorder: false, emailHelper: "", passwordBorder: false, passwordHelper: "" })
    const enteremail = (event) => {
        setLoginObj((prevState) => ({ ...prevState, email: event.target.value }))
        console.log(event.target.value)
    }
    const enterpassword = (event) => {
        setLoginObj((prevState) => ({ ...prevState, password: event.target.value }))
    }
    const submit = () => {
        console.log(loginObj)
        let emailTest = emailRegex.test(loginObj.email)
        let passwordTest = passwordRegex.test(loginObj.password)
        if (emailTest === true) {
            setRegexObj((prevState) => ({ ...prevState, emailBorder: false, emailHelper: "" }))
        }
        else if (emailTest === false) {
            setRegexObj((prevState) => ({ ...prevState, emailBorder: true, emailHelper: "Enter valid Email or phone" }))
        }
        if (passwordTest === true) {
            setRegexObj((prevState) => ({ ...prevState, passwordBorder: false, passwordHelper: "" }))
        }
        else if (passwordTest === false) {
            setRegexObj((prevState) => ({ ...prevState, passwordBorder: true, passwordHelper: "Enter correct password" }))
        }
        if (emailTest === true && passwordTest === true) {
            loginAPI(loginObj)
                .then((respone) => {
                    console.log(respone);
                    localStorage.setItem("token", respone.data.data)
                    navigate('/dashboard')
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }

    let navigate = useNavigate()
    const registernavigation = () => {
        navigate('/register')
    }
    return (
        <div className={classes.maindiv}>
            <div className={classes.Lcontainer}>
                <div className={classes.Lheadings}>
                    <img className={classes.Lh1} src="./Fundoo.png" alt="" />
                    <h2 className={classes.Lh2}>Sign in</h2>
                    <h3 className={classes.Lh3}>Use your Fundoo Account</h3>
                </div>
                <div className={classes.Lbox1}>
                    <TextField onChange={enteremail} error={regexObj.emailBorder} helperText={regexObj.emailHelper} id="outlined-basic" label="Email or Phone" size="small" variant="outlined" />
                    <TextField onChange={enterpassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} id="outlined-basic" label="Password" size="small" variant="outlined" />

                </div>

                <div className={classes.Lbutton}>
                    <Button variant="text">Forgot Password?</Button>
                </div>
                <p className={classes.Lletter}>Not your computer? Use Guest mode to sign in privately.</p>
                <div className={classes.Lbutton}>
                    <Button variant="text">Learn more</Button>
                </div>
                <div className={classes.Lcheckbox}>
                    <input type="checkbox"></input>
                    <label>Show Password</label>
                </div>
                <div className={classes.Lbutton1}>
                    <Button variant="text" onClick={registernavigation} >Create Account</Button>
                    <Button onClick={submit} variant="contained" >Next</Button>
                </div>
            </div>
        </div>
    )
}
export default Login