import React, { useState } from "react";
// import './register.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { registerAPI } from "../../services/registerservice";
import { makeStyles } from '@mui/styles';





const useStyles = makeStyles({
    maindiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        /* padding-top: 30px; */
        width: '100vw',
        height: '90vh'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '52%',
        height: '90%',
        border: '1px solid #dadce0',
        borderRadius: '8px',
        /* margin-left: 20VW;
        margin-top: 5vh; */
        position: 'relative'
        /* left : 275px;
        top : 30px; */
    },

    column1: {

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '60%',
        height: '100%',
        paddingLeft: '20px'
    },


    h1: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100px'

    },


    h2: {
        display: 'flex',
        flexDirection: 'column',
        /* justify-items: stretch; */
        alignItems: 'flex-start',
        color: '#202124',
        fontFamily: ' "Google Sans" "Noto Sans Myanmar UI"',
        fontsize: '24px',
        fontweight: '400'
    },

    box1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '5vh',
        width: '100%',
        // gap:'10px'
    },

    box2: {
        display: 'flex',
        flexDirection: 'row',
        height: '5vh',
        width: '100%',
    },

    letter: {
        display: 'flex',
        justifyitems: 'center',
        fontSize: '12px',
        color: ' #5f6368',
        fontFamily: 'roboto, "Noto Sans Myanmar UI", arial, sans - serif',
        /* padding-bottom: 10px; */

    },

    button: {
        display: 'flex',
        justifyItems: 'center',
        // textTransform: 'lowercase',
    },

    checkbox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontSize: 'small',
        width: '20vw',
        textIndent: '3mm',
        color: '#5f6368',


    },

    button1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: '20px',
    },


    column2: {
        display: 'flex',
        flexDirection: 'column',
        width: '40%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',


    },

    img: {
        width: '30vw',
        height: '35vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    imgtext: {
        fontSize: '16px',
        fontWeight: '300',
        textAlign: 'center',
        color: '#202124',
        fontFamily: 'roboto, "Noto Sans Myanmar UI", arial, sans - serif',
    },

    ['@media screen and (min-width:320px) and (max-width:480px)']: {
        maindiv: {
            paddingTop: '50px'
        },
        container: {
            height: '120%',

        },
        column1: {
            justifyContent: 'space-around',
            width: '100%',
            padding: '10px'


        },
        h2: {
            fontSize: '20px',
            textAlign: 'left'

        },

        box1: {
            flexDirection: 'column',
            justifyContent: 'space-around',
            height: '4vh',
            gap: '15px'
        },
        box2: {
            paddingTop: '20px',
            height: '4vh',
        },

        button: {
            display: 'none'
        },

        button1: {

        },

        letter: {
            paddingBottom: '10px'

        },
        checkbox: {
            width: '30vw',
        },
        img: {
            display: 'none'
        },

        imgtext: {
            display: 'none'
        },
        column2: {
            display: 'none'

        },

    },
    ['@media screen and (min-width:481px) and (max-width:768px)']: {
        maindiv: {
            paddingTop: '50px'
        },
        container: {
            height: '110%',

        },
        column1: {
            justifyContent: 'space-around',
            width: '100%',
            padding: '10px'


        },
        h2: {
            fontSize: '20px',
            textAlign: 'left'

        },

        box1: {
            flexDirection: 'column',
            justifyContent: 'space-around',
            height: '4vh',
            gap: '10px'
        },
        box2: {
            paddingTop: '20px',
            height: '4vh',
        },

        button: {

            paddingBottom: '20px',
            alignItems: 'left'
        },

        button1: {

        },

        letter: {
            paddingTop: '15px'

        },
        checkbox: {
            width: '30vw',
        },
        img: {
            display: 'none'
        },

        imgtext: {
            display: 'none'
        },
        column2: {
            display: 'none'

        },
    },





    ['@media screen and (min-width:769px) and (max-width:1024px)']: {
        maindiv: {
            paddingTop: '50px'
        },
        container: {
            height: '100%',

        },
        column1: {
            justifyContent: 'space-around',
            width: '100%',
            padding: '10px'


        },
        h2: {
            fontSize: '20px',
            textAlign: 'left'
        },

        box1: {

            gap: '10px'


        },
        box2: {

        },

        button: {

        },

        button1: {

        },

        letter: {


        },
        checkbox: {

        },
        img: {
            width: '25vw',
            height: '30vh',
        },

        imgtext: {
            fontSize: '14px'
        },
        column2: {


        },

    }

});







const nameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
// const passwordRegex = /^(?=.[A-Z])(?=.[0-9])(?=.[@#$%^&-+=()])([a-zA-Z0-9]).{8,}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
// const passwordRegex = /^[a-zA-Z0-9]{8,16}$"/;

function Register() {
    const classes = useStyles();
    const [signinObj, setSigninObj] = useState({ firstName: "", lastName: "", email: "", password: "", confirmpassword: "" })
    const [regexerrorObj, setRegexerrorObj] = useState({ firstNameBorder: false, firstNamehelper: "", lastNameBorder: false, lastNameHelper: "", emailBorder: false, emailHelper: "", passwordBorder: false, passwordHelper: "", confirmpasswordBorder: false, confirmpasswordHelper: "" })
    const enterFirstname = (event) => {
        setSigninObj((prevState) => ({ ...prevState, firstName: event.target.value }))
        console.log(event.target.value)
    }
    const enterLastname = (event) => {
        setSigninObj((prevState) => ({ ...prevState, lastName: event.target.value }))

    }
    const enterusername = (event) => {
        setSigninObj((prevState) => ({ ...prevState, email: event.target.value }))

    }
    const enterpassword = (event) => {
        setSigninObj((prevState) => ({ ...prevState, password: event.target.value }))

    }
    const enterconfirmpassword = (event) => {
        setSigninObj((prevState) => ({ ...prevState, confirmpassword: event.target.value }))

    }
    const submit = () => {
        console.log(signinObj)
        let firstnameTest = nameRegex.test(signinObj.firstName)
        let lastNameTest = nameRegex.test(signinObj.lastName)
        let emailTest = emailRegex.test(signinObj.email)
        let passwordTest = passwordRegex.test(signinObj.password)
        let confirmpasswordTest = passwordRegex.test(signinObj.confirmpassword)
        if (firstnameTest === true) {
            setRegexerrorObj((prevState) => ({ ...prevState, firstNameBorder: false, firstNamehelper: "" }))
        }
        else if (firstnameTest === false) {
            setRegexerrorObj((prevState) => ({ ...prevState, firstNameBorder: true, firstNamehelper: "Enter valid name" }))
        }
        if (lastNameTest === true) {
            setRegexerrorObj((prevState) => ({ ...prevState, lastNameBorder: false, lastNameHelper: "" }))
        }
        else if (lastNameTest === false) {
            setRegexerrorObj((prevState) => ({ ...prevState, lastNameBorder: true, lastNameHelper: "Enter valid name" }))
        }
        if (emailTest === true) {
            setRegexerrorObj((prevState) => ({ ...prevState, emailBorder: false, emailHelper: "" }))
        }
        else if (emailTest === false) {
            setRegexerrorObj((prevState) => ({ ...prevState, emailBorder: true, emailHelper: "Enter valid Email" }))
        }
        if (passwordTest === true) {
            setRegexerrorObj((prevState) => ({ ...prevState, passwordBorder: false, passwordHelper: "" }))
        }
        else if (passwordTest === false) {
            setRegexerrorObj((prevState) => ({ ...prevState, passwordBorder: true, passwordHelper: "Enter valid password" }))
        }
        if (confirmpasswordTest === true) {
            setRegexerrorObj((prevState) => ({ ...prevState, confirmpasswordBorder: false, confirmpasswordHelper: "" }))
        }
        else if (confirmpasswordTest === false) {
            setRegexerrorObj((prevState) => ({ ...prevState, confirmpasswordBorder: true, confirmpasswordHelper: "Enter valid password" }))
        }
        if (firstnameTest === true && lastNameTest === true && emailTest === true && passwordTest === true && confirmpasswordTest === true) {
            registerAPI(signinObj)
                .then((respone) => {
                    console.log(respone);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }
    return (
        <div className={classes.maindiv} >
            <div className={classes.container}>
                <div className={classes.column1}>
                    <div>
                        <img className={classes.h1} src="./Fundoo.png" alt="" />
                        <h2 className={classes.h2}>Create Your Fundoo Account</h2>
                    </div>

                    <div className={classes.box1}>
                        <TextField onChange={enterFirstname} error={regexerrorObj.firstNameBorder} helperText={regexerrorObj.firstNamehelper} id="outlined-basic" label="First Name" size="small" variant="outlined" />
                        <TextField onChange={enterLastname} error={regexerrorObj.lastNameBorder} helperText={regexerrorObj.lastNameHelper} id="outlined-basic" label="Last Name" size="small" variant="outlined" />
                    </div>
                    <div className={classes.box2}>
                        <TextField onChange={enterusername} error={regexerrorObj.emailBorder} helperText={regexerrorObj.emailHelper} id="outlined-basic" label="Username" size="small" fullWidth="true" variant="outlined" />
                    </div>
                    <div className={classes.letter}>You can use letters, numbers & periods</div>
                    <div className={classes.button}>
                        <Button variant="text">Use my current email address instead</Button>
                    </div>
                    <div className={classes.box1}>
                        <TextField onChange={enterpassword} error={regexerrorObj.passwordBorder} helperText={regexerrorObj.passwordHelper} id="outlined-basic" label="Password" size="small" variant="outlined" />
                        <TextField onChange={enterconfirmpassword} error={regexerrorObj.confirmpasswordBorder} helperText={regexerrorObj.confirmpasswordHelper} id="outlined-basic" label="Confirm Password" size="small" variant="outlined" />
                    </div>
                    <div className={classes.letter}>Use 8 or more characters with a mix of letters, numbers & symbols</div>
                    <div className={classes.checkbox}>
                        <input type="checkbox"></input>
                        <label>Show Password</label>
                    </div>
                    <div className={classes.button1}>
                        <Button variant="text" size="small" >Sign In instead</Button>
                        <Button onClick={submit} variant="contained">Next</Button>

                    </div>
                </div>

                <div className={classes.column2}>
                    <img className={classes.img} src="./Googlelogo.svg" alt="" />
                    <p className={classes.imgtext}>One account. All of Fundoo
                        <p></p>working for you.</p>
                </div>

            </div>
        </div>
    )
}
export default Register