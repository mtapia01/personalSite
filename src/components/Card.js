import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const ProjectCard = (props) => {
    const { title, body, link } = props;
    return (
        <Box sx={{padding: "10px", rowSpacing: "20px"}}>
            <Card sx={{width: "350px", height:"150px", backgroundColor: "#D1CCDC", padding: "10px"}}>
                <Typography gutterBottom variant='h5' component="span" sx={{color: "black", height: 'calc(100% / 3)'}}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{color: "#262B30", height: 'calc(100% / 3)'}}>
                    {body} 
                </Typography>
                <br></br>
                <Typography sx={{color: "#262B30", height: 'calc(100% / 3)'}}>
                    {/* <Link to={link}></Link> */}
                    <a href={link}> <Button  size="small"> Learn More </Button></a>
                    
                </Typography>
            </Card>
        </Box>
    );
}

export default ProjectCard;