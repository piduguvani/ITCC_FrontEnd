import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';

const gradientStyle = {
  background: '#a1c4fd',
  background: '-webkit-linear-gradient(to right, rgba(161,196,253,0.5), rgba(194,233,251,0.5))', // Chrome 10-25, Safari 5.1-6
  background: 'linear-gradient(to right, rgba(161,196,253,0.5), rgba(194,233,251,0.5))', // W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+
borderRadius:5
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const cardData = [
  {
    communityName: "Angular",
    description: 'Angular is an open-source web application framework maintained by Google and a community of developers.',
    Questions: "/static/images/cards/contemplative-reptile.jpg",
    User: 45,
    Tech: "Another description about lizards.",
  },
  {
    communityName: "React JS",
    description: 'ReactJS, also known as React, is a popular JavaScript library for building user interfaces.',
    Questions: "/static/Questionss/cards/contemplative-reptile.jpg",
    User: 78,
    Tech: "Another description about lizards.",
  },
  {
    communityName: "JavaScript",
    description: 'JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images.',
    Questions: "/static/Questionss/cards/contemplative-reptile.jpg",
    User: 90,
    Tech: "Another description about lizards.",
  },
  {
    communityName: "Node JS",
    description: '',
    Questions: "/static/Questionss/cards/contemplative-reptile.jpg",
    User: 80,
    Tech: "Another description about lizards.",
  },
  {
    communityName: "Mongo DB",
    description: '',
    Questions: "/static/Questionss/cards/contemplative-reptile.jpg",
    User: 79,
    Tech: "Another description about lizards.",
  },
];

export default function Communities() {
  const [value, setValue] = React.useState(2);

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card style={gradientStyle}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.communityName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
                <br />
                <Typography variant="body2" color="text.secondary">
                  <b>Tech:</b> {card.Tech}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <b>User:</b> {card.User}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <b>Questions:</b> {card.User}
                </Typography>
              </CardContent>
              <CardActions>
              <Box sx={{ '& > legend': { mt: 2 } }}>
                
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => setValue(newValue)}
                />
              </Box>
              </CardActions>
          
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
