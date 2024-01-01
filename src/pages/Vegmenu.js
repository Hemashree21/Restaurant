import React from 'react';
import Layout from './../components/Layout';
import { MenuList } from '../data/vegmenudata';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const VegMenu = () => {
  return (
    <Layout>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {MenuList.map(menuItem => (
          <Card key={menuItem.id} sx={{ maxWidth: '460px', display: 'flex', m: 2.5 }}>
            <CardActionArea>
              <CardMedia sx={{ minHeight: '200px' }} component="img" src={menuItem.image} alt={menuItem.name} />
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  {menuItem.name}
                </Typography>
                <Typography variant="h6">{menuItem.price}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default VegMenu;
