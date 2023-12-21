
import './css/App.css';
import * as React from 'react';
import Navbar from './navbar';
import snowImage from './images/snowboarding.jpg';
import concert from './images/concert.jpg'
import travel from './images/travelAlaska.jpg'
import fashion from './images/fashionImg.jpeg'

// import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Grid from '@mui/material/Grid'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
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
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      </header>
      <body className='App-body'>

        <h1>Hi! I am Michael <br /> </h1> 
        I am currently a Computer Science major at University of California: Merced

        <h2>Hobbies</h2>
        <p>Here are some of the things I enjoy doing:</p>
        {/* <div className='container'> */}
          <Box sx={{ width: "100", height: "100", overflowY: 'hidden' }}>
            <ImageList variant="standard" cols={2} gap={1}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}  sx={{ display: 'left', }}>
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
        {/* </div> */}
        <h2>Recent Projects</h2> 
        <Grid container rowSpacing={2} >
          <Grid item xs={6}>
            <Card color="" sx={{ width: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
              />
              <CardContent sx={{height:150}}>
                <Typography gutterBottom variant="h5" component="div" >
                  Fitsagram
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Fitsagram provides users with a dynamic platform for sharing and connecting. 
                Users can post pictures, follow others to curate a personalized feed from their updates, and engage with content by liking posts or commenting. 
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
                <CardContent sx={{height:150}}>
                  <Typography gutterBottom variant="h5" component="div" >
                    Animal Fight Club
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Inspired by Pokemon, Animal Fight Club allows the player to battle 
                    against different enemy types while getting stronger through level progression.
                    My group and I created everything from visuals to core gameplay mechanics.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
          </Grid>
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
        </Grid>
        <div className='padCenter'>
          <a href="/Projects">
            <Button variant="contained">See More Here!</Button>
          </a>
        </div>
      </body>
    </div>
    
  );
}

export default App;
