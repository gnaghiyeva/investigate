import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Crypto = () => {
    return (
        <>
            <section style={{width:'80%', margin:'60px auto'}}>
                <article style={{textAlign:'center'}}>
                    <p>TAKE A LOOK AT OUR</p>
                    <h1>Latest News in Crypto</h1>
                </article>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 240 }}
                                image="https://preview.colorlib.com/theme/invest/images/news_1.jpg.webp"
                                title="green iguana"
                            />
                            <CardContent style={{backgroundColor:'rgb(245,249,250)'}}>
                                <Typography gutterBottom variant="h5" component="div">
                                New Regulations on the Crypto Market
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci.
                                </Typography>
                            </CardContent>
                            <CardActions style={{backgroundColor:'rgb(245,249,250)'}}>
                                <Button size="small" variant='contained' color='warning'>READ MORE</Button>
                              
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 240 }}
                                image="https://preview.colorlib.com/theme/invest/images/news_1.jpg.webp"
                                title="green iguana"
                            />
                            <CardContent style={{backgroundColor:'rgb(245,249,250)'}}>
                                <Typography gutterBottom variant="h5" component="div">
                                New Regulations on the Crypto Market
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci.
                                </Typography>
                            </CardContent>
                            <CardActions style={{backgroundColor:'rgb(245,249,250)'}}>
                                <Button size="small" variant='contained' color='warning'>READ MORE</Button>
                              
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 240 }}
                                image="https://preview.colorlib.com/theme/invest/images/news_1.jpg.webp"
                                title="green iguana"
                            />
                            <CardContent style={{backgroundColor:'rgb(245,249,250)'}}>
                                <Typography gutterBottom variant="h5" component="div">
                                New Regulations on the Crypto Market
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci.
                                </Typography>
                            </CardContent>
                            <CardActions style={{backgroundColor:'rgb(245,249,250)'}}>
                                <Button size="small" variant='contained' color='warning'>READ MORE</Button>
                              
                            </CardActions>
                        </Card>
                    </Grid>
                    

                </Grid>
            </section>
        </>
    )
}

export default Crypto