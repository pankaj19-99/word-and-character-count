import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box mt={4} mb={2} textAlign="center">
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} Pankaj Kumar. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
