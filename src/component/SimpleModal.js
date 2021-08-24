import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Typography, Box } from '@material-ui/core';

import ButtonCustom from './ButtonCustom';


const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 500,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'flex-end',
        flexDirection: 'column',
        borderRadius: '25px 0px',
        [theme.breakpoints.down('xs')]: {
            width: 300
        },
        height: 350,
        margin: '0 auto'
    },
    cardsBox: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 15,
        fontSize: 20,
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
        marginBottom: 110
    },
    cards: {
        marginLeft: 10,
        marginRight: 10,
        [theme.breakpoints.down('xs')]: {
            marginTop: 10

        },
    },
    modalContent: {

    }
}));

function rand() {
    return Math.round(Math.random() * 1) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

export default function SimpleModal({ showModal, setShowModal }) {
    const [modalStyle] = React.useState(getModalStyle);
    const classes = useStyles();

    const handleClose = () => {
        setShowModal(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <SimpleModal />
            <Box className={classes.cardsBox}>
                В данной версии базы данных взаимодействий не найдено, но это не означает, что их достоверно нет. Согласуйте с инструкциями к препаратам!
            </Box>
            <Box>
                <ButtonCustom text="Закрыть" onClick={() => { setShowModal(false) }} />
            </Box>
        </div>
    );

    return (
        <div className={classes.modalContent}>
            <Modal
                open={showModal}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}