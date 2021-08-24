import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    btn: {
        color: 'white',
        background: "#22A2FF",
        border: 0,
        height: 48,
        padding: '0 20px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        borderTopRightRadius: 15,
        borderEndStartRadius: 15,
        '&:focus': {
            outline: "none",
        },
        fontSize: 14,
        marginLeft: 12,
    }
}));

const ButtonCustom = ({ text, onClick, href }) => {
    const classes = useStyles()
    return (
        <Button variant="contained" className={classes.btn} onClick={onClick} href={href}>
            {text}
        </Button>
    )
}

export default ButtonCustom