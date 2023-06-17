import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Container } from '@mui/system';

export default function TimeLine() {
  return (
    <Grid container spacing={1} sx={{ margin: 'auto' }}className='timer-bg'>
      <Typography variant="h1" gutterBottom style={{ textAlign: 'center', width: '100%', fontFamily: 'ClashDisplay-Variable', fontWeight: '600', fontSize: '42px', marginBottom: '40px', marginTop: '40px' }}>
        AIRDROP
      </Typography>
      <div className='timer-section'>
        <div className='silgle-timer'>
          <div className='timer-wrap'>
            <div className='timer'>
              <Typography variant="h4" gutterBottom style={{ fontSize: '74px', fontWeight: '600', marginBottom: '0px' }}>
                0
              </Typography>
            </div>
            <div className='timer'>
              <Typography variant="h4" gutterBottom style={{ fontSize: '74px', fontWeight: '600', marginBottom: '0px' }}>
                4
              </Typography>
            </div>
          </div>
          <Typography variant="h6" gutterBottom style={{ display: 'block', width: '100%', textAlign: 'center' }}>
            Days
          </Typography>
        </div>
        <Typography variant="h4" gutterBottom style={{ fontSize: '74px', fontWeight: '600', marginRight: '20px', marginBottom: '75px' }}>
          :
        </Typography>
        <div className='silgle-timer'>
          <div className='timer-wrap'>
            <div className='timer'>
              <Typography variant="h4" gutterBottom style={{ fontSize: '74px', fontWeight: '600', marginBottom: '0px' }}>
                1
              </Typography>
            </div>
            <div className='timer'>
              <Typography variant="h4" gutterBottom style={{ fontSize: '74px', fontWeight: '600', marginBottom: '0px' }}>
                2
              </Typography>
            </div>
          </div>
          <Typography variant="h6" gutterBottom style={{ display: 'block', width: '100%', textAlign: 'center' }}>
            Hours
          </Typography>
        </div>
        <Typography variant="h4" gutterBottom style={{ fontSize: '74px', fontWeight: '600', marginRight: '20px', marginBottom: '75px' }}>
          :
        </Typography>
        <div className='silgle-timer'>
          <div className='timer-wrap'>
            <div className='timer'>
              <Typography variant="h4" gutterBottom style={{ fontSize: '74px', fontWeight: '600', marginBottom: '0px' }}>
                1
              </Typography>
            </div>
            <div className='timer'>
              <Typography variant="h4" gutterBottom style={{ fontSize: '74px', fontWeight: '600', marginBottom: '0px' }}>
                7
              </Typography>
            </div>

          </div>
          <Typography variant="h6" gutterBottom style={{ display: 'block', width: '100%', textAlign: 'center' }}>
            Minutes
          </Typography>
        </div>
        <Typography variant="h4" gutterBottom style={{ fontSize: '74px', fontWeight: '600', marginRight: '20px', marginBottom: '75px' }}>
          :
        </Typography>
        <div className='silgle-timer'>
          <div className='timer-wrap'>
            <div className='timer'>
              <Typography variant="h4" gutterBottom style={{ fontSize: '74px', fontWeight: '600', marginBottom: '0px' }}>
                3
              </Typography>
            </div>
            <div className='timer'>
              <Typography variant="h4" gutterBottom style={{ fontSize: '74px', fontWeight: '600', marginBottom: '0px' }}>
                0
              </Typography>
            </div>
          </div>
          <Typography variant="h6" gutterBottom style={{ display: 'block', width: '100%', textAlign: 'center' }}>
            Seconds
          </Typography>
        </div>
      </div>
    </Grid>
  );
}