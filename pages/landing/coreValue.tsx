import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function CoreValue(){
    return(
        <Grid container spacing={10} sx={{ mt: 8 }} item xs={12}>
          <Box>
          <Typography variant="h1" gutterBottom style={{ textAlign: 'center', width: '100%', fontFamily: 'ClashDisplay-Variable', fontWeight: '600', fontSize: '42px', marginBottom: '40px', marginTop: '40px' }}>
            Process
            </Typography>
            <div className='image-container'>
              <img alt="rewardBox" src='/images/process.png' className='image'/>
            </div>
          </Box>
        </Grid>
    );
}