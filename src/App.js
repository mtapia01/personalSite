
import './css/App.css';
import React from 'react';
import Navbar from './navbar';
import Footer from './footer'
import snowImage from './images/snowboarding.jpg';
import concert from './images/concert.jpg'
import travel from './images/travelAlaska.jpg'
import fashion from './images/fashionImg.jpeg'
import ProjectCard from './components/Card.js'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'; 
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from '@mui/material/Typography';

const itemData = [
  {
    img: fashion,
    title: "Fashion",
    // width: 200,
    // height: 100,
  },
  {
    img: snowImage,
    title: 'Snowboarding',
    // featured: true,
    width: 200,
    height: 100,
  },
  {
    img: concert,
    title: "Music",
    width: 200,
    height: 100,
  },
  {
    img: travel,
    title: "Traveling",
    width: 200,
    height: 100,
  },
  
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      </header>
      <body className='App-body'>

        <h1 className='center'>Hi! I'm Michael <br /> </h1> 
        <p className='center'>
          I am currently a Computer Science major at University of California: Merced
        </p>
        <br /><br />
        <h2>Recent Projects
          <a href="/Projects">
            <Button variant="outline">See More Here!</Button>
          </a>
        </h2> 
        <Grid container rowSpacing={3} rowGap={5} columnSpacing={-4}>
        <ProjectCard title="Fitsagram" body="Fitsagram provides users with a dynamic platform for sharing and connecting" link="fitsagram" />
        <ProjectCard title="Animal Fight Club" body="Pokemon inspired game, implementing core game logic to designing classes for drawing elements and defining behaviors of in-game entities." link="/Projects#game" />
        <ProjectCard title="Student Enrollment Web App" body="The Student Enrollment Web App streamlines student and teacher interactions. " link="/Projects#stu-enrollment" />
        </Grid>

        <h2 className=''>Hobbies</h2>
        <p>Here are some of the things I enjoy doing:</p>
          <Box sx={{ width: "100", height: "100", overflowY: 'hidden', alignItems: 'left'}}>
            <ImageList variant="standard" cols={2} gap={1}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}  sx={{ display: 'left', alignItems: 'left' }}>
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?h=100`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar position="top" title={item.title} sx={{ textAlign: 'center' }}/>
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
          <Footer />
      </body>
    </div>
    
  );
}

export default App;
