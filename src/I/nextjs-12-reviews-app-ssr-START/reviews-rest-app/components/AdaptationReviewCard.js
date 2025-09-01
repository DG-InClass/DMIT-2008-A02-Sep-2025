import Avatar from '@mui/material/Avatar';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

import Typography from '@mui/material/Typography';

import {deleteReviewItem} from '../utils/api/reviews.js'

export default function AdaptationReviewCard(props) {
  const deleteReviewHandler = (reviewId) => {
    console.log(`deleting ${reviewId}...`)
    deleteReviewItem(reviewId).then((data)=> {
      props.deleteCallback(reviewId)
    })
  }

  return <>
    <Card sx={{mt: 2 }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
          {props.rating}
        </Avatar>
      }

      action={
        <IconButton onClick={()=> {deleteReviewHandler(props.id)}}>
          <DeleteIcon />
        </IconButton>
      }

      title={
        <Typography variant="body2" color="text.secondary">
          {props.title}
        </Typography>
      }
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {props.comment}
      </Typography>
    </CardContent>
  </Card>
  
  </> 
}
