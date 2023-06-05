import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Link from '@mui/material/Link';
import Fox from '../../public/images/MetaMask_Fox.jpg'
import WalletConnect from '../../public/images/WalletConnect-Logo.jpg'

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
          <Typography id="modal-modal-title" style={{ color: '#fff', marginBottom: '20px', fontSize: '28px',textAlign: 'center' }} variant="h6" component="h6">
            Connect Wallet
          </Typography>
          <Link href="#" className='Metamask-link'>
            <div className='Metamask-list'>
              <div className='Metamask-left'>
                <div className='Metamask-icon'>
                  <img src={Fox} alt='' />
                </div>
                <div className='Metamask-content'>
                <Typography id="modal-modal-title" style={{color: '#fff'}} variant="h6" component="h6">
                Metamask
              </Typography>
              <Typography id="modal-modal-title" style={{ color: 'rgba(255, 255, 255, 0.6)'}} variant="body1">
              Connect using  metamask 
              </Typography>
                </div>
              </div>
              <div className='Metamask-right'>
                <svg width="18" height="35" viewBox="0 0 18 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.2207 33.0178L16.2211 17.8087C16.3378 17.6976 16.4305 17.5638 16.4935 17.4155C16.5565 17.2672 16.5884 17.1076 16.5873 16.9465C16.5862 16.7854 16.5521 16.6262 16.4871 16.4788C16.422 16.3314 16.3275 16.1989 16.2092 16.0895L1.00012 1.08903" stroke="#00FF01" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
          </Link>
          <Link href="#" className='Metamask-link'>
            <div className='Metamask-list'>
              <div className='Metamask-left'>
                <div className='Metamask-icon'>
                  <img src={WalletConnect} alt='' />
                </div>
                <div className='Metamask-content'>
                <Typography id="modal-modal-title" style={{color: '#fff'}} variant="h6" component="h6">
                Wallet Connect
              </Typography>
              <Typography id="modal-modal-title" style={{ color: 'rgba(255, 255, 255, 0.6)'}} variant="body1">
              Connect using  wallet connect 
              </Typography>
                </div>
              </div>
              <div className='Metamask-right'>
                <svg width="18" height="35" viewBox="0 0 18 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.2207 33.0178L16.2211 17.8087C16.3378 17.6976 16.4305 17.5638 16.4935 17.4155C16.5565 17.2672 16.5884 17.1076 16.5873 16.9465C16.5862 16.7854 16.5521 16.6262 16.4871 16.4788C16.422 16.3314 16.3275 16.1989 16.2092 16.0895L1.00012 1.08903" stroke="#00FF01" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
          </Link>
        </Box>
      </Modal>
    </div>
  );
}