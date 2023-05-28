import React from 'react'
import heroStyle from "../styles/hero.module.css"
import Button from '@mui/material/Button';
const Hero = () => {
  return (
   <section className={heroStyle.hero} >
    <article className={heroStyle.hero_texts}>
        <h1>A new World is coming</h1>
        <p>Donec vel ante rhoncus, posuere nulla quis, interdum nisi. Vestibulum laoreet lacinia diam, eget blandit sem gravida at.</p>
        <Button variant="contained" color='warning'>Contained</Button>
    </article>
   </section>
  )
}

export default Hero