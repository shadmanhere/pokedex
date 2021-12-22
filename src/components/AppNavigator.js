import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: 'black !important',
    },
    link: {
        textDecoration: 'none',
    },
    title: {
        cursor:'pointer',
        color: 'white',
    }
}))

function AppNavigator() {

    const classes = useStyles()

    return (
        <AppBar className={classes.appBar} position="fixed">
            <Toolbar>
                <Link to="/" className={classes.link}>
                    <Typography className={classes.title}>Pokedex</Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default AppNavigator
