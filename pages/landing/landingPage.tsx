import Container from '@mui/material/Container';
import Reward from './reward';
import Chip from './chip';
import CoreValue from './coreValue';
import Working from './howWeWorks';
import UseCase from './useCase';
import Pricing from './pricing';
import TimeLine from './timeLine';
import Community from './community';
import Team from './team';
import LightPaper from './lightPaper';
import { url } from 'inspector';

export default function LandingPage(){
    return(
        <Container sx={{width:'90%', fontFamily: 'Book antique', pb:18}}>
          <Reward />
          <Chip />
          <CoreValue />
          <Working />
          <UseCase />
          <Pricing/>
        </Container>
    );
}