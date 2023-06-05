import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import Arrow from '@mui/icons-material/ArrowRight';

export default function Pricing(){
    return(
        <div>
            <Typography
        noWrap
        variant="h2"
        className="core-values head-text"
      >Pricing</Typography>
      <br/>
        <Grid container spacing={1} sx={{margin:'auto'}}>
            <Grid item xs={12} md={6} lg={3}>
                <Box className="price-box-landing price-box1">
                  <img width={150} height={150} alt="price1" src='/images/NFT4 .png' className='nft-price' /> 
                  <br/>
                  <Typography variant="h5"
                 sx={{
                   fontSize:'30px',
                   fontFamily: 'Book antique',
                   color: '#d9d9d9',
                   textAlign:"center",
                   mt:3
                }} >Fractal
                </Typography>
                <Typography variant="h6"
                 sx={{
                   fontSize:'20px',
                   fontFamily: 'Book antique',
                   color: '#d9d9d9',
                   textAlign:"center"
                }} >3 SOL
                <img width={30} height={21} alt="price1" src="/images/Solona icon.png" />
                </Typography>
                <br />
                <Button variant='contained' className="social-button"> Buy Now <Arrow sx={{color:'#fff'}} /> </Button>
                </Box>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
                <Box className="price-box-landing price-box2">
                <img width={150} height={150} alt="price1" src='/images/NFT3 .png' className='nft-price' /> 
                <Typography variant="h5"
                 sx={{
                   fontSize:'30px',
                   fontFamily: 'Book antique',
                   color: '#d9d9d9',
                   textAlign:"center",
                   mt:3
                }} >Optical</Typography>
                <Typography variant="h6"
                 sx={{
                   fontSize:'20px',
                   fontFamily: 'Book antique',
                   color: '#d9d9d9',
                   textAlign:"center"
                }} >8 SOL
                <img width={30} height={21} alt="price1" src="/images/Solona icon.png" />
                </Typography>
                <br />
                <Button variant='contained' className="social-button"> Buy Now <Arrow sx={{color:'#fff'}} /> </Button>
                </Box>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
            <Box className="price-box-landing price-box3" >
            <img width={150} height={150} alt="price1" src='/images/NFT2.png' className='nft-price' /> 
            <Typography variant="h5"
                 sx={{
                   fontSize:'30px',
                   fontFamily: 'Book antique',
                   color: '#d9d9d9',
                   textAlign:"center",
                   mt:3
                }} >Paradise</Typography>
                <Typography variant="h6"
                 sx={{
                   fontSize:'20px',
                   fontFamily: 'Book antique',
                   color: '#d9d9d9',
                   textAlign:"center"
                }} >20 SOL
                <img width={30} height={21} alt="price1" src="/images/Solona icon.png" />
                </Typography>
                <br />
                <Button variant='contained' className="social-button"> Buy Now <Arrow sx={{color:'#fff'}} /> </Button>
            </Box>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
            <Box className="price-box-landing price-box4">
                  <img width={150} height={150} alt="price1" src='/images/NFT1.png' className='nft-price' /> 
                  <br/>
                  <Typography variant="h5"
                 sx={{
                   fontSize:'30px',
                   fontFamily: 'Book antique',
                   color: '#d9d9d9',
                   textAlign:"center",
                   mt:3
                }} >Cosmos</Typography>
                <Typography variant="h6"
                 sx={{
                   fontSize:'20px',
                   fontFamily: 'Book antique',
                   color: '#d9d9d9',
                   textAlign:"center"
                }} >50 SOL
                <img width={30} height={21} alt="price1" src="/images/Solona icon.png" />
                </Typography>
                <br />
                <Button variant='contained' className="social-button"> Buy Now <Arrow sx={{color:'#fff'}} /> </Button>
                </Box>
              </Grid>
        </Grid>
        </div>
    );
}