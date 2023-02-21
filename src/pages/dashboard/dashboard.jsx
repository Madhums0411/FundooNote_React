import React, { useEffect } from "react";
// import './dashboard.css';
import Header from "../../components/header";
import TakenoteOne from "../../components/TakenoteOne";
import { useState } from "react";
import TakenoteTwo from "../../components/TakenoteTwo";
import TakenoteThree from "../../components/TakenoteThree";
import { GetNoteAPI } from "../../services/noteservice";
import MiniDrawer from "../../components/drawer";
import Grid from '@mui/material/Grid';
import { getInitColorSchemeScript } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    Dmaindiv: {
        display: 'flex',
        width: '100vw',
        height: '100vh'
    },
    Dmaincontainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    Dtakenote1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: '30px',
    },
    NoteContainer: {
        width: '75%',
        height: '100%',
        paddingTop: '30px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '15px',
        alignItems: 'center',
        justifyContent: 'center',

    },
    // position: {
    //     position: sticky,
    //         display: flex,
    //     },

    ['@media screen and (min-width:320px) and (max-width:480px)']: {

        NoteContainer: {
            flexDirection:'column'
        },
    }
})

export default function Dashboard() {
    const classes = useStyles();
    const [noteSwitchObj, setnoteSwitchObj] = useState(false)
    const [note3List, setNote3List] = useState([])
    const [drawerToggle, setdrawerToggle] = useState(false)
    const [noteChoice, setNoteChoice] = useState("Notes")

    const listentoheader = () => {
        setdrawerToggle(!drawerToggle)
    }

    const listenToDrawer = (options) => {
        setNoteChoice(options)
    }


    // console.log(note3List);


    const EnterTakenote1 = () => {
        setnoteSwitchObj(true)
    }
    const EnterTakenote2 = () => {
        getNotes()
        setnoteSwitchObj(false)
    }

    const getNotes = () => {
        GetNoteAPI()
            .then((response) => {
                console.log(response)
                let filterNote = []
                if (noteChoice === 'Notes') {
                    filterNote = response.data.data.filter((notes) => {
                        if (notes.archive === false && notes.trash === false)
                            return notes
                    })
                }
                else if (noteChoice === 'Archive') {
                    filterNote = response.data.data.filter((notes) => {
                        if (notes.archive === true && notes.trash === false)
                            return notes
                    })
                }
                else if (noteChoice === 'Trash') {
                    filterNote = response.data.data.filter((notes) => {
                        if (notes.archive === false && notes.trash === true)
                            return notes
                    })
                }

                // setNote3List(response.data.data)
                setNote3List(filterNote)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    useEffect(() => {
        getNotes()

    }, [noteChoice])

    const autoRefresh = () => {
        getNotes()

    }




    return (
        <div className={classes.Dmaindiv}>
            <Grid >
                <Grid >
                    <Header className={classes.position} listentoheader={listentoheader} />
                </Grid>
                <Grid>
                    <MiniDrawer drawerToggle={drawerToggle} listenToDrawer={listenToDrawer} />
                </Grid>
                <div className={classes.Dmaincontainer}>
                    <div className={classes.Dtakenote1}>
                        {noteSwitchObj ? <TakenoteTwo EnterTakenote2={EnterTakenote2} autoRefresh={autoRefresh} ></TakenoteTwo> : <TakenoteOne EnterTakenote1={EnterTakenote1} ></TakenoteOne>
                        }

                    </div>

                    <div className={classes.NoteContainer}>

                        {
                            // <TakenoteThree></TakenoteThree>
                            note3List.map((note) => (<TakenoteThree note={note} getNotes={getNotes} />))

                        }
                    </div>

                </div>


            </Grid>

        </div>
    )
}
