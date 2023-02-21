import React, { useState } from "react";
import './TakenoteTwo.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import Button from '@mui/material/Button';
import { CreateNoteAPI } from "../services/noteservice";
import TakenoteOne from "./TakenoteOne";
import ColorPopper from "./ColorPopper";
import InputBase from '@mui/material/InputBase';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    take2main: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    take2container: {
        width: '45vw',
        height: '22vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

    },

    take2card: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'stretch',
        flexDirection: 'column',

    },

    take2content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'stretch',

    },

    take2line1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    T2tittle: {
        borderStyle: 'hidden',
        display: 'flex',
        justifyContent: 'stretch',
        height: '100%',
        width: '100%',
    },

    T2descriptions: {
        borderStyle: 'hidden',
        display: 'flex',
        justifyContent: 'stretch',
        height: '100%',
    },

    take2line2: {
        display: 'flex',
        flexDirection: 'row',

    },

    take2icons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    take2icons1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: ' space-around',
        gap: '20px',

    },
    ['@media screen and (min-width:320px) and (max-width:480px)']: {
        take2container: {
            width: '65vw',
            // height: '30vh',
        },
        take2icons1: {
            gap: '2px',
    
        },
    }
})

function TakenoteTwo(props) {
    const classes = useStyles();
    const [noteObj, setnoteObj] = useState({ title: "", description: "", archive: false, colour: "" })

    const entertittle = (event) => {
        setnoteObj((prevState) => ({ ...prevState, title: event.target.value }))
        console.log(event.target.value)
    }
    const enterdescriptions = (event) => {
        setnoteObj((prevState) => ({ ...prevState, description: event.target.value }))

    }

    const archivenote = () => {
        setnoteObj((prevState) => ({ ...prevState, archive: true }))
    }
    const addnote = () => {
        CreateNoteAPI(noteObj)
            .then((respose) => {
                console.log(respose); props.autoRefresh()
            })
            .catch((error) => {
                console.log(error);
            })

        props.EnterTakenote2()


    }
    const getColor = (data) => {
        setnoteObj((prevState) => ({ ...prevState, colour: data }))

    }



    return (
        <div className={classes.take2main}>
            <div className={classes.take2container} >
                <Card className={classes.take2card} style={{ backgroundColor: noteObj.colour }} >
                    <CardContent className={classes.take2content}>
                        <div className={classes.take2line1}>
                            <InputBase onChange={entertittle} style={{ backgroundColor: noteObj.colour }} className="T2tittle" type="text" color="none" placeholder="Tittle" />
                            <PushPinOutlinedIcon color="action"></PushPinOutlinedIcon>
                        </div>
                        <InputBase onChange={enterdescriptions} style={{ backgroundColor: noteObj.colour }} className="T2descriptions" type="text" color="none" placeholder="Take a note..." />

                        <div className={classes.take2icons}>
                            <div className={classes.take2icons1}>
                                <AddAlertOutlinedIcon fontSize="small" color="action"></AddAlertOutlinedIcon>
                                <PersonAddAltOutlinedIcon fontSize="small" color="action"></PersonAddAltOutlinedIcon>
                                <ColorPopper getColor={getColor} action="create" ></ColorPopper>
                                <ImageOutlinedIcon fontSize="small" color="action"></ImageOutlinedIcon>
                                <ArchiveOutlinedIcon onClick={archivenote} fontSize="small" color="action"></ArchiveOutlinedIcon>
                                <MoreVertOutlinedIcon fontSize="small" color="action"></MoreVertOutlinedIcon>
                                <UndoOutlinedIcon fontSize="small" color="action"></UndoOutlinedIcon>
                                <RedoOutlinedIcon fontSize="small" color="action"></RedoOutlinedIcon>
                            </div>
                            <div>
                                <Button onClick={addnote} size="small">close</Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
export default TakenoteTwo