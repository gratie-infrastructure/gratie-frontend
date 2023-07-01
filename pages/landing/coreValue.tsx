import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { completeprofile, process, processCircle } from './assets';
import { useState } from 'react';

export default function CoreValue(){
  
    return(
        <Grid container spacing={10} sx={{ mt: 8 }} item xs={12} className='w-100%'>
       
          <Typography variant="h1" gutterBottom style={{ textAlign: 'center', width: '100%', fontFamily: 'ClashDisplay-Variable', fontWeight: '600', fontSize: '42px', marginBottom: '40px', marginTop: '40px' }}>
            Process
            </Typography>
            <div className='w-100% relative'>
              
              <img width={'125%'} style={{marginLeft:"-110px"}} src='/images/process.png' alt='' />
            </div>
          
        </Grid>
    );
}