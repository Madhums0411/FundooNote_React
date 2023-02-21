import React, { useState } from "react";
// import './TakenoteThree.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { archieveapi, trashnoteapi, updatenoteapi } from "../services/noteservice";
import ColorPopper from "./ColorPopper";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    take3main: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    take3container: {
        width: '20vw',
        height: '25vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',

    },

    take3card: {
        width: ' 100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },

    take3content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-around',
        gap: '40px',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: '30px',
    },

    take3line1: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',

    },

    descriptions: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    },

    take3icons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
    },
    ['@media screen and (min-width:320px) and (max-width:480px)']: {
        take3container: {
            width: '60vw',
            // height: '30vh',
        },
        take3card: {
    
        },
        take3content: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex',
            // justifyContent: 'center',
            gap: '20px',
        },
        card: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            gap: '10px',
        },
    
    

    },
})


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 150,
    // alignitems:'left',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function TakenoteThree(props) {
    const classes = useStyles();
    const Archivenote = (id) => {
        let archievobj = {
            notesId: [id]
        }

        archieveapi(id).then((response) => {
            console.log(response)
            props.getNotes()
        })
            .catch((error) => {
                console.log(error)
            })
    }
    const Trashnote = (id) => {
        let trashobj = {
            notesId: [id]
        }

        trashnoteapi(id).then((response) => {
            console.log(response)
            props.getNotes()
        })
            .catch((error) => {
                console.log(error)
            })
    }

    const [open, setOpen] = React.useState(false);
    const [updateNote, setUpdateNote] = useState({ notesId: "", title: "", description: "" })
    const handleOpen = (noteObj) => {
        console.log(noteObj)
        setOpen(true);
        setUpdateNote({
            notesId: noteObj.notesId,
            title: noteObj.title,
            description: noteObj.description,
            // colour: noteObj.color

        })

    }
    // console.log(updateNote)

    const close = () => {
        setOpen(false)
        console.log(props.note)
        // let id = {
        //     notesId: props.note.notesId
        // }
        updatenoteapi(updateNote)
            .then((response) => {
                console.log(response)
                props.getNotes()

            })
            .catch((error) => {
                console.log(error)
            })
    }
    const handleClose = () => setOpen(false);

    const newtitle = (event) => {
        setUpdateNote((prevstate) => ({ ...prevstate, title: event.target.value }))
    }

    const newdesc = (event) => {
        setUpdateNote((prevstate) => ({ ...prevstate, description: event.target.value }))
    }
    const colorupdate = () => {
        props.getNotes()
    }

    return (
        <div className={classes.take3main}>
            <div className={classes.take3container} >
                <Card className={classes.take3card} style={{ backgroundColor: props.note.colour }} >
                    <CardContent className={classes.take3content}>
                        <div className={classes.take3line1} >
                            <div onClick={() => handleOpen(props.note)}>{props.note.title}</div>
                            <PushPinOutlinedIcon color="action"></PushPinOutlinedIcon>
                        </div>
                        <div className={classes.descriptions} onClick={handleOpen}>
                            <div onClick={() => handleOpen(props.note)}>{props.note.description}</div>
                        </div>
                        <div className={classes.take3icons}>
                            <AddAlertOutlinedIcon fontSize="small" color="action"></AddAlertOutlinedIcon>
                            <PersonAddAltOutlinedIcon fontSize="small" color="action"></PersonAddAltOutlinedIcon>
                            <ColorPopper action="update" id={props.note.notesId} colorupdate={colorupdate}></ColorPopper>
                            <DeleteOutlinedIcon fontSize="small" color="action" onClick={() => Trashnote(props.note.notesId)}></DeleteOutlinedIcon>
                            <ArchiveOutlinedIcon fontSize="small" color="action" onClick={() => Archivenote(props.note.notesId)} ></ArchiveOutlinedIcon>
                            <MoreVertOutlinedIcon fontSize="small" color="action"></MoreVertOutlinedIcon>
                        </div>

                    </CardContent>

                </Card>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box style={{ backgroundColor: props.note.colour }}>
                        {/* <div className="take2container" > */}
                        <Card sx={style} style={{ backgroundColor: props.note.colour }} >
                            <CardContent className="card">
                                <div className="take2line1" >
                                    <InputBase type={'text'} defaultValue={props.note.title} onChange={newtitle}></InputBase>
                                    <PushPinOutlinedIcon color="action"></PushPinOutlinedIcon>
                                </div>
                                <InputBase type={'text'} defaultValue={props.note.description} onChange={newdesc} />

                                <div className="take2icons">
                                    <div className="take2icons1">
                                        <AddAlertOutlinedIcon fontSize="small" color="action"></AddAlertOutlinedIcon>
                                        <PersonAddAltOutlinedIcon fontSize="small" color="action"></PersonAddAltOutlinedIcon>
                                        <ColorPopper action="update" id={props.note.notesId} colorupdate={colorupdate} ></ColorPopper>
                                        <DeleteOutlinedIcon fontSize="small" color="action"></DeleteOutlinedIcon>
                                        <ArchiveOutlinedIcon fontSize="small" color="action"></ArchiveOutlinedIcon>
                                        <MoreVertOutlinedIcon fontSize="small" color="action"></MoreVertOutlinedIcon>
                                        <UndoOutlinedIcon fontSize="small" color="action"></UndoOutlinedIcon>
                                        <RedoOutlinedIcon fontSize="small" color="action"></RedoOutlinedIcon>
                                    </div>
                                    <div>
                                        <Button onClick={close} size="small">close</Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        {/* </div> */}

                    </Box>
                </Modal>
            </div>

        </div>

    )
}
export default TakenoteThree