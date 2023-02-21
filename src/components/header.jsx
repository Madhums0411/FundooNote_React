import React from "react";
// import './header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { connect } from 'react-redux';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    hmaincontainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position:'fixed'
    },

    header: {
        width: '100vw',
        height: '10vh',
        border: 'solid',
        display: 'flex',
        border: '1px solid #dadce0',

    },
    header1: {
        width: '15%',
        height: ' 100%',
        /* border: solid 1px red; */
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },

    keep: {
        fontFamily: '"Product Sans", Arial, sans - serif',
        fontSize: '22px',
    },

    header2: {
        width: '65%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    searchbar: {
        width: '90%',
        height: '75%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: '10px',
        background: '#f1f3f4',
        backgroundClip: 'padding-box',
        border: 'solid transparent',
    },

    search: {
        width: '100%',
        height: '100%',
        background: 'transparent',
        border: 'transparent',
        textDecoration: 'black',
        fontSize: 'large',

    },
    searchIcon:{

    },
    header3: {
        width: '13%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingLeft: '20px',
        paddingRight: '20px',
    },
    header4: {
        width: '7%',
        height: '100 %',
        /* border: solid 1px red; */
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    ['@media screen and (min-width:320px) and (max-width:480px)']: {

        searchbar: {
            display: 'none'
        },
        search: {
            display: 'none'
        },
        searchIcon:{
            display: 'none'
        },
        header2: {
            display: 'none'
        },
        header1: {
            width: '35%',
        },
        header3: {
            width: '35%',
        },
        header4: {
            width: '20%',
        },

    }
})


function Header(props) {
    const classes = useStyles();

    const menubutton = () => {
        props.listentoheader()
    }
    return (
        <div className={classes.hmaincontainer}>
            <div className={classes.header}>
                <div className={classes.header1}>
                    <MenuIcon fontSize="medium" onClick={menubutton} />
                    <img src="./keep_2020q4_48dp.png" alt="" />
                    <p className={classes.keep}>{props.lable}</p>
                </div>
                <div className={classes.header2}>
                    <form action="search" className={classes.searchbar}>
                        {/* <SearchIcon /> */}
                        {/* <TextField id="outlined-basic" label="First Name" size="small" variant="outlined" /> */}
                        <IconButton type="button" sx={{ p: '20px' }} aria-label="search">
                            <SearchIcon className={classes.searchIcon}/>
                        </IconButton>
                        <input className={classes.search} type="Search" placeholder="Search" />
                    </form>

                </div>
                <div className={classes.header3}>
                    <RefreshIcon fontSize="medium" color="action"></RefreshIcon>
                    <ViewAgendaOutlinedIcon fontSize="medium" color="action"></ViewAgendaOutlinedIcon>
                    <SettingsIcon fontSize="medium" color="action"></SettingsIcon>

                </div>
                <div className={classes.header4}>
                    <AppsIcon fontSize="medium" color="action"></AppsIcon>
                    <AccountCircleIcon fontSize="medium" color="action"></AccountCircleIcon>
                </div>


            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        lable: state.drawerReducer.lable
    }

}

export default connect(mapStateToProps)(Header)
