import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { nft1, nft2 } from './assets';

export default function UseCase() {
  return (
    <Grid container spacing={1} sx={{ mt: 18, mb: 18 }}>
      <Box display={'flex'} alignItems={'start'} justifyContent={'space-between'} width={'100%'}>
        <Typography variant="h5" className='small-tittel' gutterBottom>
          Find out more about buying NFT
        </Typography>
        {/* <Link href="#" className='section-link'>See all</Link> */}
      </Box>
      <Grid container spacing={2} sx={{ mt: 5 }}>
        <Grid item xs={12} md={4}>
          <Card style={{backgroundColor: 'transparent'}}>
            <CardContent className='grid-card'>
            <img width={'100%'} src='/images/Mini-NFT.png'/>
              <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} width={'100%'} padding={'0px 15px'}>
                <div className='card-titel' style={{width: '100%', display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
                  <Typography variant="h6" className='card-tittel' gutterBottom style={{color: '#fff',display: 'block', width: '100%'}}>
                  MINI
                  </Typography>
                  <Typography  variant="button" display="block" gutterBottom className='sub-tittel' style={{color: '#fff',display: 'block', width: '100%'}}>
                  Free
                  </Typography>
                </div>
                <div className='card-btn' style={{width: '100%', display: 'flex', alignItems: 'center'}}>
                  <Button variant="contained" className='sm-green-btn' style={{height: '40px', maxWidth: '140px', float: 'right'}}>Buy</Button>
                </div>
                
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card style={{backgroundColor: 'transparent'}}>
            <CardContent className='grid-card'>
            <img width={'94%'} src='/images/nft2.jpg' alt='' />
              <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} width={'100%'} padding={'0px 15px'}>
                <div className='card-titel' style={{width: '100%', display: 'flex', alignItems: 'center', flexWrap: 'wrap',marginTop:"50px"}}>
                  <Typography variant="h6" className='card-tittel' gutterBottom style={{color: '#fff',display: 'block', width: '100%'}}>
                  BANTAM
                  </Typography>
                  <Typography  variant="button" display="block" gutterBottom className='sub-tittel' style={{color: '#fff',display: 'block', width: '100%'}}>
                  19
                  </Typography>
                </div>
                <div className='card-btn' style={{width: '100%', display: 'flex', alignItems: 'center'}}>
                  <Button variant="contained" className='sm-green-btn' style={{height: '40px', maxWidth: '140px', float: 'right'}}>Buy</Button>
                </div>
                
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card style={{backgroundColor: 'transparent'}}>
            <CardContent className='grid-card'>
              <img width={'100%'} src='/images/Fractal-NFT.png' alt='' />
              <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} width={'100%'} padding={'0px 15px'}>
                <div className='card-titel' style={{width: '100%', display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
                  <Typography variant="h6" className='card-tittel' gutterBottom style={{color: '#fff',display: 'block', width: '100%'}}>
                  FRACTAL
                  </Typography>
                  <Typography  variant="button" display="block" gutterBottom className='sub-tittel' style={{color: '#fff',display: 'block', width: '100%'}}>
                  49
                  </Typography>
                </div>
                <div className='card-btn' style={{width: '100%', display: 'flex', alignItems: 'center'}}>
                  <Button variant="contained" className='sm-green-btn' style={{height: '40px', maxWidth: '140px', float: 'right'}}>Buy</Button>
                </div>
                
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card style={{backgroundColor: 'transparent'}}>
            <CardContent className='grid-card'>
              <img width={'100%'} src='/images/Optical-NFT.png' alt='' />
              <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} width={'100%'} padding={'0px 15px'}>
                <div className='card-titel' style={{width: '100%', display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
                  <Typography variant="h6" className='card-tittel' gutterBottom style={{color: '#fff',display: 'block', width: '100%'}}>
                  OPTICAL
                  </Typography>
                  <Typography  variant="button" display="block" gutterBottom className='sub-tittel' style={{color: '#fff',display: 'block', width: '100%'}}>
                  199
                  </Typography>
                </div>
                <div className='card-btn' style={{width: '100%', display: 'flex', alignItems: 'center'}}>
                  <Button variant="contained" className='sm-green-btn' style={{height: '40px', maxWidth: '140px', float: 'right'}}>Buy</Button>
                </div>
                
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card style={{backgroundColor: 'transparent'}}>
            <CardContent className='grid-card'>
              <img width={'100%'} src='/images/Paradise-NFT.png' alt='' />
              <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} width={'100%'} padding={'0px 15px'}>
                <div className='card-titel' style={{width: '100%', display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
                  <Typography variant="h6" className='card-tittel' gutterBottom style={{color: '#fff',display: 'block', width: '100%'}}>
                  PARADISE
                  </Typography>
                  <Typography  variant="button" display="block" gutterBottom className='sub-tittel' style={{color: '#fff',display: 'block', width: '100%'}}>
                  999
                  </Typography>
                </div>
                <div className='card-btn' style={{width: '100%', display: 'flex', alignItems: 'center'}}>
                  <Button variant="contained" className='sm-green-btn' style={{height: '40px', maxWidth: '140px', float: 'right'}}>Buy</Button>
                </div>
                
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card style={{backgroundColor: 'transparent'}}>
            <CardContent className='grid-card'>
              <img width={'100%'} src='/images/Cosmos-NFT.png' alt='' />
              <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} width={'100%'} padding={'0px 15px'}>
                <div className='card-titel' style={{width: '100%', display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
                  <Typography variant="h6" className='card-tittel' gutterBottom style={{color: '#fff',display: 'block', width: '100%'}}>
                  COSMOS
                  </Typography>
                  <Typography  variant="button" display="block" gutterBottom className='sub-tittel' style={{color: '#fff',display: 'block', width: '100%'}}>
                  2999
                  </Typography>
                </div>
                <div className='card-btn' style={{width: '100%', display: 'flex', alignItems: 'center'}}>
                  <Button variant="contained" className='sm-green-btn' style={{height: '40px', maxWidth: '140px', float: 'right'}}>Buy</Button>
                </div>
                
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}