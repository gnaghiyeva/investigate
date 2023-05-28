import React, { useEffect, useState } from 'react'
import { getInvestigatorById } from '../api/requests'
import { useParams } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
const Detail = () => {
    const [investigator,setInvestigator]=useState([])
    const {id} = useParams() 
    useEffect(()=>{
        getInvestigatorById(id).then((res)=>{
            setInvestigator(res.data)
        })
    })
  return (
    
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={investigator.imageURL}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {investigator.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                       {investigator.desc}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant='outline'>Price: {investigator.price}</Button>
                                </CardActions>
                            </Card>
  )
}

export default Detail