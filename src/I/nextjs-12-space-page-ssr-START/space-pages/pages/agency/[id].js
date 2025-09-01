import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'

import Head from 'next/head'

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import NavBar from '@components/NavBar';
import SimpleDetailsCard from '@components/SimpleDetailsCard'
import LoadingCircle from '@components/LoadingCircle'


import {getAgency} from '@utils/api/agencies'

export default function Agency() {
  const [agencyDetails, setAgencyDetails] = useState()

  const router = useRouter()
  const { id } = router.query

  useEffect(()=> {
      getAgency(id).then((data)=> {
          setAgencyDetails(data)
      })
  }, [id])

  return <>
    <NavBar />
    { !agencyDetails?
      <LoadingCircle />
      :
      <Container sx={{paddingTop:2}}>
        <Grid container>
          <Grid item xs="2">
            <img
                alt={agencyDetails.name}
                src={agencyDetails.logo_url}
                style={{
                    width: `120px`
                }}
            />
          </Grid>
          <Grid item xs="10">
            <Typography variant="h3" gutterBottom>
              {`${agencyDetails.name} (${agencyDetails.abbrev})`}
            </Typography>
          </Grid>
          <Grid item xs="4">
            <Typography variant="h5">
                {`Launch Details`}
            </Typography>
            <SimpleDetailsCard 
                title={'Total Launches'}
                description={agencyDetails.total_launch_count}
            />
            <SimpleDetailsCard 
                title={'Successful Launches'}
                description={agencyDetails.successful_launches}
            />
            <SimpleDetailsCard 
                title={'Successful Landings'}
                description={`${agencyDetails.successful_landings}`}
            />
          </Grid>
          <Grid item xs="4">
              <Typography variant="h5">
                  {`Agency Information`}
              </Typography>
              <SimpleDetailsCard 
                  title={'administrator'}
                  description={`${agencyDetails.administrator}`}
              />
              <SimpleDetailsCard 
                  title={'Space Agency Details'}
                  description={`Founded ${agencyDetails.founding_year}`}
                  subDescription={agencyDetails.description}
              />
          </Grid>
          <Grid item xs="4">
            <Typography variant="h5">
                {`SpaceCraft`}
            </Typography>
            { agencyDetails.spacecraft_list && agencyDetails.spacecraft_list.map((spaceCraft)=> {
                return <SimpleDetailsCard 
                    key={spaceCraft.id}
                    description={`${spaceCraft.name}`}
                    buttonCallback={()=> {
                      router.push(`/spacecraft/${spaceCraft.id}`)  
                    }}
                    buttonName="Go to SpaceCraft"
                />
            })}
          </Grid>
        </Grid>
      </Container>
    }
  </>
}