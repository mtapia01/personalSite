
import './css/App.css';
import React, { useEffect } from 'react';
import Navbar from './navbar';
import Footer from './footer'
import snowImage from './images/snowboarding.jpg';
import concert from './images/concert.jpg'
import travel from './images/travelAlaska.jpg'
import fashion from './images/fashionImg.jpeg'

import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Grid from '@mui/material/Grid'; 
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
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
  useEffect(() => {
    document.title = 'Michael Tapia';
  }, []);
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
        
        {/* </div> */}
        <h2>Recent Projects
          <a href="/Projects">
            <Button variant="outline">See More Here!</Button>
          </a>
        </h2> 
        <Grid container rowSpacing={3} rowGap={5} columnSpacing={-4}>
          <Box sx={{padding: "10px", rowSpacing: "20px"}}>
            {/* <div className='backgroundDiv'> */} <Card sx={{width: "350px", height:"120px", backgroundColor: "#D1CCDC", padding: "10px"}}>
              <Typography gutterBottom variant='h5' component="span" sx={{color: "black"}}>
                Fitsagram
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{color: "#262B30"}}>
                    Fitsagram provides users with a dynamic platform for sharing and connecting. 
                    {/* Users can post pictures, follow others to curate a personalized feed from their updates, and engage with content by liking posts or commenting.  */}
              </Typography>
                    <Button href="/Projects" size="small" sx={{paddingTop: "25px"}}>Learn More</Button>
            {/* </div> */} </Card>
          </Box>
          
          <Box sx={{padding: "10px", rowSpacing: "10px"}}>
            {/* <div className='backgroundDiv'> */} <Card sx={{width: "350px", height:"120px", backgroundColor: "#D1CCDC", padding: "10px"}}>
              <Typography gutterBottom variant='h5' component="span" sx={{color: "black"}}>
                Animal Fight Club
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{color: "#262B30"}}>
                    Pokemon inspired game, implementing core game logic to designing classes for drawing elements and defining behaviors of in-game entities.

              </Typography>
                    <Button href="/Projects" size="small">Learn More</Button>
            {/* </div> */} </Card>
          </Box>

          <Box sx={{padding: "10px", rowSpacing: "20px"}}>
            <Card sx={{width: "350px", height:"120px", backgroundColor: "#D1CCDC", padding: "10px"}}>
              <Typography gutterBottom variant='h5' component="span" sx={{color: "black"}}>
                Student Enrollment Web App
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{color: "#262B30"}}>
                The Student Enrollment Web App streamlines student and teacher interactions. 
                {/* Students can easily log in, view classes, explore available courses, and enroll in open classes. 
                Teachers manage classes, enrolled and grades, while the admin oversees all aspects ensuring data control. */}
              </Typography>
              <Button href="/Projects#fitsagram" gutterBottom size="small" sx={{paddingTop: "25px"}}>Learn More</Button>
            </Card>
          </Box>
        </Grid>

        <h2 className=''>Hobbies</h2>
        <p>Here are some of the things I enjoy doing:</p>
        {/* <div className='container'> */}
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
          {/* <Grid item xs={6}>
            <Card color="" sx={{ width: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                />
                <CardContent sx={{height:160}}>
                  <Typography gutterBottom variant="h5" component="div" >
                  Student Enrollment Web App
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  The Student Enrollment Web App streamlines student and teacher interactions. 
                  Students can easily log in, view classes, explore available courses, and enroll in open classes. 
                  Teachers manage classes, enrolled and grades, while the admin oversees all aspects ensuring data control.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
          </Grid>
          <Grid item xs={6}>
            <Card color="" sx={{ width: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                />
                <CardContent sx={{height:160}}>
                  <Typography gutterBottom variant="h5" component="div" >
                  Student Enrollment Web App
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  The Student Enrollment Web App streamlines student and teacher interactions. 
                  Students can easily log in, view classes, explore available courses, and enroll in open classes. 
                  Teachers manage classes, enrolled and grades, while the admin oversees all aspects ensuring data control.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
          </Grid> */}

      </body>
    </div>
    
  );
}

export default App;
