import React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { ColorUpdateAPI } from '../services/noteservice';


export default function ColorPopper(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const colors = ["#2ECC71", "#AF7AC5", "#F1948A", "#A3E4D7", "#F5B7B1", "#F5B041", "#DC7633", "#F1C40F", "#AAB7B8", "#F1948A", "#2ECC71", "#F5B041"]
    //const colors = ["blue", "green", "red", ]
    

    const submitColor = (data) => { 
        if(props.action === 'create')
        {
            props.getColor(data)
        }
        else if(props.action === 'update')
        {
            let colorObj = {
                notesId:[props.id],
                color:data
            }
            ColorUpdateAPI(colorObj)
            .then((response) => {
                console.log(response)
                props.colorupdate()
                                
            })
            .catch((error) => {
                console.log(error)
            })

        }
        
    }


    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <div>
            <ColorLensOutlinedIcon onClick={handleClick} fontSize="small" color="action"></ColorLensOutlinedIcon>

            <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', display: 'flex' }}>
                    {
                        colors.map((color) => (<div onClick={() => submitColor(color)} style={{ width: 30, height: 30, borderRadius: 100, marginLeft: 5, backgroundColor:color }}></div>))
                    }
                </Box>
            </Popper>
        </div>
    );
}
