import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Button  from '@mui/material/Button';
import Arrow from '@mui/icons-material/ArrowRightAlt';
import Link from 'next/link';


export default function Reward(){
    return(
        <Grid container spacing={2} sx={{ mt: 10}}>
          <Grid item xs={12} md={6} className="reward-heading" style={{padding: '0px'}}>     
            <Typography
              variant="body2"
              style={{maxWidth: '520px'}}
              sx={{
                fontSize:'38px',
                fontFamily: 'ClashDisplay-Semibold',
                color: '#fff',
                lineHeight: '45.55px',
              }}>
                A next generation SaaS platform for your enterprise reward management.
              </Typography>
              <br/>
              <br/>
                <Link href="/home" passHref>
                  <Button variant='contained' className='sm-green-btn' style={{width: '136px', height: '36px' }}>Try for Free</Button>
                </Link>
                </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <div className='image-container'>
                  <img alt="rewardBox" src='/images/reward-picture.png' className='image'/>
                </div>
            </Grid>
            
            </Grid>
    );
}