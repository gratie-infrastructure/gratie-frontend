import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import Arrow from '@mui/icons-material/ArrowRight';

export default function Pricing() {
  return (
    <Grid container spacing={1} sx={{ mt: 18, mb: 18 }}>
      <Box display={'flex'} alignItems={'start'} justifyContent={'space-between'} width={'100%'}>
        <Typography variant="h5" className='small-tittel' gutterBottom>
          Join the thriving community
        </Typography>
      </Box>
      <Grid item xs={12} md={6}>
        <div className='community-text'>
          <div className='lt-side'>
            <Typography variant="h6" gutterBottom>
              To get more updates
            </Typography>
            <div className='card-btn' style={{width: '100%', display: 'flex', alignItems: 'center', height: '40px'}}>
                  <Button variant="contained" className='sm-green-btn' style={{height: '40px', maxWidth: '140px', float: 'right'}}>Join us</Button>
                </div>
          </div>
          <div className='rtside' style={{marginLeft: '20px'}}>
            <svg width="60" height="60" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M37.0388 63.9473C33.4676 66.7537 29.3912 68.7851 25.0522 69.9205C24.5734 70.091 24.1565 70.4105 23.8581 70.8358C23.5596 71.261 23.3942 71.7714 23.3842 72.2974C23.3742 72.8234 23.5202 73.3397 23.8023 73.7759C24.0844 74.2122 24.4889 74.5474 24.9608 74.7359C58.765 89.9311 80.8613 67.8536 78.0351 42.8434L83.7765 31.0634L77.3741 30.9419C69.5892 20.5963 48.4025 20.7067 51.487 42.4933C51.487 42.4933 40.1199 44.3787 25.9216 29.2993C25.5932 28.949 25.175 28.704 24.7166 28.5935C24.2581 28.483 23.7786 28.5115 23.3349 28.6756C22.8911 28.8397 22.5017 29.1326 22.2127 29.5196C21.9237 29.9066 21.7473 30.3714 21.7043 30.8591C20.0491 37.3761 20.6844 44.2902 23.4957 50.3563C26.307 56.4225 31.1097 61.2421 37.0388 63.9473Z" fill="#00FF01" stroke="#00FF01" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round" />
              <circle cx="51.5989" cy="52.0251" r="49.9368" stroke="#00FF01" stroke-width="3" />
            </svg>
          </div>
        </div>

      </Grid>
      <Grid item xs={12} md={6}>
        <div className='community-text community-down' style={{marginTop: '150px'}}>
          <div className='lt-side' style={{marginLeft: '10px'}}>
            <Typography variant="h6" gutterBottom>
              To join our community
            </Typography>
            <div className='card-btn' style={{width: '100%', display: 'flex', alignItems: 'center', height: '40px'}}>
                  <Button variant="contained" className='sm-green-btn' style={{height: '40px', maxWidth: '140px', float: 'right'}}>Join us</Button>
                </div>
          </div>
          <div className='rtside'>
            <img width={'auto'} height={'60px'} src='/images/Discord icon.png' alt='' />
          </div>
        </div>

      </Grid>
    </Grid>

  );
}