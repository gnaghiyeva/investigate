import React, { useEffect, useState } from 'react'
import { deleteInvestigator, getAllInvestigators } from '../api/requests'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Swal from 'sweetalert2'
import { TextField } from '@mui/material';
import {Link} from 'react-router-dom'
import systemStyle from "../styles/system.module.css"

const System = () => {
    const [investigators, setInvestigators] = useState([])
    useEffect(() => {
        getAllInvestigators().then((res) => {
            setInvestigators(res.data)
            console.log(res.data)
        })
    },[])

    function handleChange(e){
        getAllInvestigators(e.target.value).then((res)=>{
            setInvestigators(res.data)
            console.log(res.data)
        })
    }
    
    return (
        <>
            <section style={{width:'80%', margin:'60px auto'}}>

                
                <article className={systemStyle.system_texts}>
               <p>TAKE A LOOK AT OUR</p>
               <h1>A simple trading system</h1>
                </article>

                <div style={{display:'flex',justifyContent:'center', marginBottom:'40px'}}>
                <TextField onChange={(e)=>handleChange(e)} placeholder='search'/>
                <Button onClick={()=>{
                    let sortedPrices = [...investigators.sort((a,b)=>a.price-b.price)]
                    setInvestigators(sortedPrices)
                }} variant='contained' color='success'>Sort By Price</Button>
                </div>

                <Grid container spacing={2}>
                    {investigators && investigators.map((investigator) => {
                        return(
                            <Grid item md={3}  sm={6} xs={12}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={investigator.imageURL}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                       <Link to={`/${investigator._id}`}>{investigator.title}</Link> 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                       {investigator.desc}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Price:{investigator.price}</Button>
                                    <Button size="small"><Link to={`/edit/${investigator._id}`}>Edit</Link></Button>
                                    <Button size="small" onClick={()=>{
                                        Swal.fire({
                                            title: 'Are you sure?',
                                            text: "You won't be able to revert this!",
                                            icon: 'warning',
                                            showCancelButton: true,
                                            confirmButtonColor: '#3085d6',
                                            cancelButtonColor: '#d33',
                                            confirmButtonText: 'Yes, delete it!'
                                          }).then((result) => {
                                            if (result.isConfirmed) {
                                                deleteInvestigator(investigator._id).then((res)=>{
                                                    Swal.fire(
                                                      'Deleted!',
                                                      'Your file has been deleted.',
                                                      'success'
                                                    )

                                                })
                                                setInvestigators(investigators.filter((x)=>x._id!==investigator._id))
                                            }
                                          })
                                    }}>Delete</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        )
                    })}


                </Grid>
            </section>
        </>
    )
}

export default System