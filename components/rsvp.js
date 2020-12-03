import { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';

import * as Firebase from './firebase';
import * as Facebook from './facebook';

const createUser = ({
    id = null,
    name = null,
    presence = null,
} = {}) => ({
    id,
    name,
    presence,
});

function setErrorMessage(setError) {
    setError('Wystapił błąd. Skontaktuj się z nami.');
}

async function initialize({ setUser, setLoading, setError }) {
    try {
        await Firebase.initialize();
        await Facebook.initialize();
    
        const state = await getInitialState();
        if (state) {
            setUser(state);
        }
    } catch (error) {
        setErrorMessage(setError);
    }
    setLoading(false);
}

async function getInitialState() {
    const status = await Facebook.getLoginStatus();
    if (status === 'connected') {
        const { id, name } = await Facebook.getApiMe();
        const { presence } = await Firebase.getUserData(id);
        return createUser({ id, name, presence });
    }
}

function createUserPreferenceSetter({ setUser, setLoading, setError }) {
    return function createSetUserPreferenceHandler({ presence }) {
        return async () => {
            setLoading(true);
            try {
                await Facebook.checkConnected();
                const { id, name } = await Facebook.getApiMe();
                const user = createUser({ id, name, presence });
                await Firebase.setUserData(id, user);
                setUser(user);
            } catch (error) {
                setErrorMessage(setError);
            }
            setLoading(false);
        }
    }
}

const ACCEPT_INVITATION_MESSAGE = 'Tak, będę!';
const REJECT_INVITATION_MESSAGE = 'Nie będzie mnie.';

const getInvitationMessage = (presence) => {
    if (presence === true) return ACCEPT_INVITATION_MESSAGE;
    if (presence === false) return REJECT_INVITATION_MESSAGE;
    return '';
}

const Form = ({ setUserPreference }) => (
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
            <Button fullWidth variant="contained" color="secondary" onClick={setUserPreference({ presence: false })}>
                {REJECT_INVITATION_MESSAGE}
            </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Button fullWidth variant="contained" color="primary" onClick={setUserPreference({ presence: true })}>
                {ACCEPT_INVITATION_MESSAGE}
            </Button>
        </Grid>
    </Grid>
);

const Response = ({ user, setUserPreference }) => {
    return (
        <Grid container spacing={1}>
            {user.presence === true && (
                <Grid item xs={12}><h4>Cieszymy się, że będziesz z nami!</h4></Grid>
            )}
            {user.presence === false && (
                <Grid item xs={12}><h4>Szkoda, że Cię nie będzie!</h4></Grid>
            )}
            <Grid item xs={12}>
                <Typography align="center">Dostaliśmy Twoją odpowiedź: <strong>{getInvitationMessage(user.presence)}</strong></Typography>
            </Grid>
            <Grid item xs={12}>
                <Box textAlign="center">
                    <Button color="primary" onClick={setUserPreference({ presence: null })}>Zmień swój wybór.</Button>
                </Box>
            </Grid>
        </Grid>
    );
}

export default function Rsvp() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(createUser());
    const setUserPreference = createUserPreferenceSetter({ setUser, setLoading, setError });

    useEffect(() => {
        initialize({ setUser, setLoading, setError });
    }, [])
    
    if (error !== null) {
        return <Alert severity="error">{error}</Alert>
    }
    if (loading === true) {
        return (
            <Box textAlign="center">
                <CircularProgress />
            </Box>
        )
    }
    if (user.presence === true || user.presence === false) {
        return <Response user={user} setUserPreference={setUserPreference} />
    }
    return <Form setUserPreference={setUserPreference} />
};