// ~/components/state/AppNotification.js
import { useState, createContext } from 'react';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export const AppNotificationContext = createContext({});

export default function AppNotification(props) {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState('');
    const [severity, setSeverity] = useState('success');

    const handleClose = (event, reason) => {
        console.log('handling close of notification:', {event, reason});
        if(reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }

    const showNotification = ({message, severity}) => {
        setText(message);
        setSeverity(severity);
        // Make the notification visible
        setOpen(true);
    }

    return <AppNotificationContext.Provider 
            value={ {showNotification} }
        >
        {props.children}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <MuiAlert elevation={6} variant='filled'
                sx={ { width: '100%' } }
                onClose={handleClose} severity='success'
            >
                This is a success message (hardcoded)!
            </MuiAlert>
        </Snackbar>
    </AppNotificationContext.Provider>
}