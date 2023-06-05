import * as React from 'react';
import { sha256 } from "@project-serum/anchor/dist/cjs/utils";


import Container from '@mui/material/Container';
import { Box, Button, CardContent, Grid, ListItem, TextField, Typography } from '@mui/material';

import { connectToGratieSolanaContract } from '@/src/gratie_solana_contract/gratie_solana_contract';
import { createUser, createUserRewardsBucket } from '@/src/gratie_solana_contract/gratie_solana_user';
import { useWallet } from '@solana/wallet-adapter-react';
import { encryptPassword } from '@/src/utils/encryption';
import { listCompanyLicenses } from '@/src/gratie_solana_contract/gratie_solana_company';
import { base64 } from '@project-serum/anchor/dist/cjs/utils/bytes';
import { Keypair } from '@solana/web3.js';
import { AES } from 'crypto-js';
import { delay } from '@/src/utils/util';
import Loading from '../Loading';
import ModalBox from '../Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Checkbox from '@mui/material/Checkbox';

import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';



export default function CreateUsers(props: any) {
  const wallet = useWallet();
  const [email, setEmail] = React.useState('');
  const [showSuccessMsg, setShowSuccessMsg] = React.useState(false);
  const [encryptedPassword, setEncryptedPassword] = React.useState('');
  const [salt, setSalt] = React.useState('salt');
  const [password, setPassword] = React.useState('');

  const [openMsg, setOpenMsg] = React.useState(false);
  const [openLoading, setOpenLoading] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState('');
  const [modalDesc, setModalDesc] = React.useState('');

  const handleModalClose = () => {
    setOpenMsg(false);
    setModalTitle('')
    setModalDesc('');
  }
  const handleLoaderToggle = (status: boolean) => {
    setOpenLoading(status)
  }


  const handleClick = async () => {
    console.log("wallet", wallet)
    if (!email) {
      alert('Enter user email to add')
      return false;
    }
    const userId = sha256.hash(email).substring(0, 16);

    if (!props.license) {
      alert('Please create company license before inviting user')
      return false;
    }
    handleLoaderToggle(true)


    console.log("props", props.license);

    const program = await connectToGratieSolanaContract();

    if (wallet && wallet.publicKey) {

      const companyName = props.license.account.name
      const user = await createUser(program, wallet.publicKey, companyName, {
        userId: userId,
        encryptedPassword: encryptedPassword,
        encryptedPasswordAlgorithm: 0,
        encryptedPasswordSalt: salt,
      });

      console.log(user)

      try {
        await delay(1000);
        const rewardBucket = await createUserRewardsBucket(program, wallet.publicKey, companyName, userId)
        console.log("rewardBucket", rewardBucket);
        setModalTitle('Reward created Successfully')
        setOpenMsg(true);
        setEmail('');
        setShowSuccessMsg(true);
      }
      catch (err) {
        alert(err);
      }

    } else {
      console.error("CAN'T RUN TESTS: No wallet connected");
    }
    handleLoaderToggle(false)


  }

  const generateEncryptedPassword = async () => {
    const pw = await encryptPassword(password, salt);
    setEncryptedPassword(pw);
  };

  const label = { inputProps: { 'aria-label': 'Select' } };

  return (
    <Container sx={{ mt: 3 }} className="create-user-container">
      <div className="btn-group">
        <Button variant="outlined">User Request</Button>
        <Button variant="outlined">Existing Users </Button>
      </div>
      <Box className="form-box">
        <CardContent>
          <div className='card-search-wrap'>
            <TextField className='search_bar'
              variant="outlined"
              value=""
              placeholder='Search the user'
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className='table-wrap'>
            <TableContainer>
              <Table aria-label="My Table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Wallet address</TableCell>
                    <TableCell>Select <Checkbox {...label} /></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>abc</TableCell>
                    <TableCell>abc@gmail.com</TableCell>
                    <TableCell>0X...4532</TableCell>
                    <TableCell><Checkbox {...label} /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>abc</TableCell>
                    <TableCell>abc@gmail.com</TableCell>
                    <TableCell>0X...4532</TableCell>
                    <TableCell><Checkbox {...label} defaultChecked /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>abc</TableCell>
                    <TableCell>abc@gmail.com</TableCell>
                    <TableCell>0X...4532</TableCell>
                    <TableCell><Checkbox {...label} defaultChecked /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>abc</TableCell>
                    <TableCell>abc@gmail.com</TableCell>
                    <TableCell>0X...4532</TableCell>
                    <TableCell><Checkbox {...label} defaultChecked /></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className='del-btn-wrap'>
                <Button variant="text"><svg width="65" height="65" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="42.5" cy="42.5" r="41.5" stroke="#FF0000" stroke-width="2" />
                  <path d="M58.6245 35.9883L55.0412 64.6549H29.9578L26.3745 35.9883" stroke="#FF0000" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M21 28.8218H64" stroke="#FF0000" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M33.3989 27.7825V21.5833C33.3989 20.633 33.7765 19.7215 34.4485 19.0495C35.1205 18.3775 36.0319 18 36.9823 18H47.7323C48.6826 18 49.5941 18.3775 50.2661 19.0495C50.9381 19.7215 51.3156 20.633 51.3156 21.5833V28.75" stroke="#FF0000" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M39 40L39.3636 56M47 40V56" stroke="#FF0000" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </Button>
              </div>
            </TableContainer>
          </div>
        </CardContent>
      </Box>
      <Loading open={openLoading} handleClose={handleLoaderToggle} />
      <ModalBox open={openMsg} handleClose={handleModalClose} heading={modalTitle} description={modalDesc} />
    </Container>
  )
}