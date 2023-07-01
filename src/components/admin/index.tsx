import * as React from 'react';

import Container from '@mui/material/Container';
import ListOfRequests from './List';


// todo:
// Add tier ID button

export default function Admin() {

  return (
    <div className=''>
      <React.Fragment>
        <Container className='' component="main" maxWidth="md">
           <ListOfRequests/>
        </Container>
      </React.Fragment>
    </div>
  );
}