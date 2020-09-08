import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({

    root: {
        background: 'linear-gradient(35deg, #caf0f8 30%, #48cae4 90%)',
        width:'100%',
        textAlign:'center'
    },
    title: {
        flexGrow: 1,
        fontSize: '20px',
        fontFamily: 'Keep Calm',
        fontWeight: 'bold',
        color: '#000000',
        textShadow: '1px 1px 3px #ffffff',
    },
}));

function Header() {

    const classes = useStyles();
    return (
        <div>
            <AppBar position="static" className={classes.root}>
                <Toolbar color="secondary">
                    <Typography variant="h6" className={classes.title}>
                      Quiz App
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
