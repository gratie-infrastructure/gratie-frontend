import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Link from '@mui/material/Link';
import Fox from '../../public/images/MetaMask_Fox.jpg'
import WalletConnect from '../../public/images/WalletConnect-Logo.jpg'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: '#061006',
  boxShadow: '4px 4px 20px rgba(0, 255, 1, 0.7)',
  borderRadius: '35px',
  border: 'unset',
  p: 4,
};

export default function ModalBox(props: any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button  onClick={handleOpen}>Open modal</Button> */}
      <Modal

        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <HighlightOffIcon style={{color:"green",height:"25px",width:"25px"}} />
          <Typography id="modal-modal-title" style={{ color: '#fff', marginBottom: '20px', fontSize: '28px',textAlign: 'center' }} variant="h6" component="h6">
            {props.modalTitle}
          </Typography>
          
          <Typography style={{textAlign: 'center' }}>
            {props.description}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}