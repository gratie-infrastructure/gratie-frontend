import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Working(){
    return(
      <Grid container spacing={10} sx={{ mt: 8 }} item xs={12}>
        <Box>
        <Typography variant="h1" gutterBottom style={{ textAlign: 'center', width: '100%', fontFamily: 'ClashDisplay-Variable', fontWeight: '600', fontSize: '42px', marginBottom: '40px', marginTop: '40px' }}>
      Our Roadmap
      </Typography>
      <div className='image-container'>
        <img alt="rewardBox" src='/images/roadmap.png' style={{maxWidth: '100%'}} className='image'/>
      </div>
        </Box>
      
  </Grid>
    );
}