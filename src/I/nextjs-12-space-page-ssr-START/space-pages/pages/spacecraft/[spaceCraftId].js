import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import NavBar from '@components/NavBar';
import SimpleDetailsCard from '@components/SimpleDetailsCard';
import LoadingCircle from '@components/LoadingCircle'
import { getSpaceCraft } from '@utils/api/spaceCraft';

export default function SpaceCraft() {
  const [spaceCraftDetails, setSpaceCraftDetails] = useState()

  const router = useRouter()
  const { spaceCraftId } = router.query
  
  useEffect(()=> {
    getSpaceCraft(spaceCraftId).then((data)=> {
      setSpaceCraftDetails(data)
    })
  }, [spaceCraftId])

  return  <>
    <NavBar />
    {!spaceCraftDetails ? 
      <LoadingCircle />
      :
      <Container sx={{paddingTop:2}}>
        <Grid container>
          <Grid xs="12" item>
            <Typography variant="h3" gutterBottom>
               {spaceCraftDetails.name}
            </Typography>
          </Grid>
          <Grid item xs="4">
            <SimpleDetailsCard 
              title={`${spaceCraftDetails.name} details`}
              subDescription={spaceCraftDetails.description}
            />
          </Grid>
          <Grid item xs="4">
            <SimpleDetailsCard 
              title={`${spaceCraftDetails.name} configuration`}
              subDescription={spaceCraftDetails.spacecraft_config.details}
            />
          </Grid>
        </Grid>
      </Container>
    }
  </>
}