import React from 'react';
import Layout from "./../components/Layout";
import { Box } from '@mui/material';
import '../styles/MenuStyles.css';

const Menu = () => {
  return (
    <Layout>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div className='bs'>
          <button><a href='/vegmenu' className='menu-link'>Vegetarian</a></button><br/><br/>
          <button><a href='/nonvegmenu' className='menu-link'>Non-Vegetarian</a></button><br/><br/>
        </div>
      </Box>
    </Layout>
  );
}

export default Menu;
