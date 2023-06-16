import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import cotationImg from "../../assets/cotation.png"
import Button from '@mui/material/Button';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function CardApercu({content ,image, number}) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', marginLeft: 5}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="body1" color="text.secondary">
            {content}
          </Typography>
          <Typography variant="h6" color="text.primary" component="div" align='center'>
            {(number)? `${number}` :"10"}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
          <IconButton size='small' >
            <MoreVertIcon /> <Typography variant='body2'>Détail</Typography>
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={(image) ? image:cotationImg }
        alt="Live from space album cover"
      />
    </Card>
  );
}