import React from "react";

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

function Copyright() {
  return(
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright '} &copy; {' '}  
      <Link color="inherit" href="https://material-ui.com/">
        Blablabla.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer(){
  return(
    <div class='container align-bottom'>        
      <Box mt={8} mb={2}>
        <Copyright />
      </Box>        
    </div>
  );
}