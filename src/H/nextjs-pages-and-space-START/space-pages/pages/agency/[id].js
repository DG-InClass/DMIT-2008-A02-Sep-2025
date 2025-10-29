// pages/agency/[id].js
import Head from 'next/head';

import { Container, Grid, Typography } from '@mui/material';

import NavBar from '@components/NavBar';
import SimpleDetailsCard from '@components/SimpleDetailsCard';
import LoadingCircle from '@components/LoadingCircle';

import { useRouter } from 'next/router';

export default function Agency() {
    const router = useRouter();
    const { id } = router.query; // Note: this uses destructuring

    return <>
        <NavBar />
        <Container sx={{paddingTop: 2}}>
            <Grid container>
                <Grid item xs="2">
                    (TBD)
                </Grid>
                <Grid item xs="10">
                    <Typography variant="h3" gutterBottom>
                        Agency Page for {id}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    </>
}