import React from 'react'
import Layout from "./../components/Layout";
import {MenuList} from '../data/nonvegmenudata';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
const NonVegMenu = () => {
  return (
    <Layout>
    <Box sx={{display:'flex', flexWrap:'wrap', justifyContent: 'center'}}>
      {MenuList.map(menuDish => (
        <Card sx={{maxWidth:'460px',display: 'flex', m:2.5}}>
          <CardActionArea>
            <CardMedia sx={{minHeight: '460px'}} component='img' src={menuDish.image} alt={menuDish.name}/>
            <CardContent>
              <Typography variant="h4" gutterBottom={'div'}>
                {menuDish.name}
              </Typography>
              <Typography variant="h6">
                {menuDish.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
    </Layout>
  )
}

export default NonVegMenu;