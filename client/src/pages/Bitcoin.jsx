import React from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
const Bitcoin = () => {
    return (
        <>
            <section style={{width:'80%', margin:'60px auto'}}>
                <Grid container spacing={1}>
                    <Grid item md={6} xs={12}>
                        <div>
                            <img src='https://preview.colorlib.com/theme/invest/images/intro.png.webp' alt='logo'/>
                        </div>
                    </Grid>
                    <Grid item  md={6} xs={12}>
                       <article>
                        <h1>Buy and Sell Bitcoin</h1>
                        <p>Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobortis egestas sem. Morbi ut dapibus dui. Sed ut iaculis elit.Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobo rtis egestas sem. Morbi ut dapibus dui. Sed ut iaculis elit. Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobortis egestas sem. Morbi ut dapibus dui. Sed ut iaculis elit.</p>
                        <Button variant="contained" color='warning'>Contained</Button>
                       </article>
                    </Grid>
                    
                </Grid>
            </section>
        </>
    )
}

export default Bitcoin