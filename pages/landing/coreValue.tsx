import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { process, processCircle } from './assets';

export default function CoreValue(){
    return(
        <Grid container spacing={10} sx={{ mt: 8 }} item xs={12} className='w-100%'>
       
          <Typography variant="h1" gutterBottom style={{ textAlign: 'center', width: '100%', fontFamily: 'ClashDisplay-Variable', fontWeight: '600', fontSize: '42px', marginBottom: '40px', marginTop: '40px' }}>
            Process
            </Typography>
            <div className='w-100% relative'>
              {process}
              <div className='circle-animation' style={{position:'absolute',top:"1605px",left:"140px",display:"inline-block",width:"fit-content",borderRadius:"100px" }}>{processCircle}</div>
              <div className='circle-animation' style={{position:'absolute',top:"1605px",left:"395px",display:"inline-block",width:"fit-content",borderRadius:"100px"}}>{processCircle}</div>
              <div className='circle-animation' style={{position:'absolute',top:"1605px",left:"645px",display:"inline-block",width:"fit-content",borderRadius:"100px"}}>{processCircle}</div>
              <div className='circle-animation' style={{position:'absolute',top:"1605px",left:"900px",display:"inline-block",width:"fit-content",borderRadius:"100px"}}>{processCircle}</div>
              <div className='circle-animation' style={{position:'absolute',top:"1605px",left:"1150px",display:"inline-block",width:"fit-content",borderRadius:"100px"}}>{processCircle}</div>
            </div>
          
        </Grid>
    );
}