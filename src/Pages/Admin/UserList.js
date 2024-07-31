import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const UserCard = styled(Card)(({ theme }) => ({
  borderRadius: 5,
  cursor: 'pointer',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.03)',
  },
  backgroundColor: theme.palette.background.paper,
}));

const cardData = [
  {
    img: 'https://talk.miraclesoft.com/avatar/snistala',
    userName: "Karthik Nistala",
    communityName: 'Angular Community.',
    questions: "3",
    solution: 4,
  },
  {
    img: 'https://talk.miraclesoft.com/avatar/snistala',
    userName: "Karthik Nistala",
    communityName: 'Angular Community.',
    questions: "3",
    solution: 4,
  }, {
    img: 'https://talk.miraclesoft.com/avatar/snistala',
    userName: "Karthik Nistala",
    communityName: 'Angular Community.',
    questions: "3",
    solution: 4,
  }, {
    img: 'https://talk.miraclesoft.com/avatar/snistala',
    userName: "Karthik Nistala",
    communityName: 'Angular Community.',
    questions: "3",
    solution: 4,
  }, {
    img: 'https://talk.miraclesoft.com/avatar/snistala',
    userName: "Karthik Nistala",
    communityName: 'Angular Community.',
    questions: "3",
    solution: 4,
  }, {
    img: 'https://talk.miraclesoft.com/avatar/snistala',
    userName: "Karthik Nistala",
    communityName: 'Angular Community.',
    questions: "3",
    solution: 4,
  },
];


export default function UserList() {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/users-details');
  };

  return (
    <Grid container spacing={2}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <UserCard onClick={handleCardClick}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Avatar
                    alt={card.userName}
                    src={card.img}
                    sx={{ width: 56, height: 56 }}
                  />
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="h6">{card.userName}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.communityName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Questions count:</strong> {card.questions}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Solution count:</strong> {card.solution}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </UserCard>
        </Grid>
      ))}
    </Grid>
  );
}
