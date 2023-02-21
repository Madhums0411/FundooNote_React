import React from "react";
import './TakenoteOne.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import TextField from '@mui/material/TextField';
import InputBase from '@mui/material/InputBase';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    TMian: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Tcontainer: {
        width: '45vw',
        height: '20vh',
    },
    card: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',


    },
    T1inputext: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: '30px',
    },
    icons: {
        display: 'flex',
        gap: '20px',
        paddingRight: '20px',
    },
    ['@media screen and (min-width:320px) and (max-width:480px)']: {
        Tcontainer: {
            width: '55vw',

        },
        T1inputext: {
            justifyContent: 'flex-start',
            alignItems:'flex-start',
            fontSize: '20px',
        },
        icons: {
            gap: '10px',
            paddingRight: '0px',
        },
    }

})

function TakenoteOne(props) {
    const classes = useStyles();
    const take1 = () => {
        props.EnterTakenote1()
    }
    return (

        <div className={classes.Tmain}>
            <div onClick={take1} className={classes.Tcontainer}>
                <Card className={classes.card} >
                    <div className={classes.T1inputext}>
                        <InputBase type="button" value="Take a note..." />
                        <div className={classes.icons}>
                            <CheckBoxOutlinedIcon color="action"></CheckBoxOutlinedIcon>
                            <BrushOutlinedIcon color="action"></BrushOutlinedIcon>
                            <ImageOutlinedIcon color="action"></ImageOutlinedIcon>
                        </div>
                    </div>

                </Card>
            </div>
        </div>
    )
}
export default TakenoteOne