import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import { Button } from "@mui/material";
import {  useAccount, useConnect, useContractRead, useNetwork, useSignTypedData } from "wagmi";
import {readContract} from "wagmi/actions";
import { GRATIE_ABI, GRATIE_CONTRACT_ADDRESS } from "@/constants/Gratie";
import { ethers } from "ethers";
import axios from "axios";
import Loading from "../Loading";
import ModalBox from "../Modal";
import { toast } from "react-toastify";


export default function ListUserTable(props:any) {
  const [openMsg, setOpenMsg] = React.useState(false);
  const [openLoading, setOpenLoading] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState("");
  const [modalDesc, setModalDesc] = React.useState("");
  const [rewardTokenMintsData,setRewardTokenMintsData]=React.useState<Number>(0)
  const { chain, chains } = useNetwork()
  const chainId=chain?.id;
  const {address} = useAccount();
  console.log("Address from table",address);
  console.log(chainId);
  const CompanyDetails: any[] =props.data;
  console.log("Company data from Table", CompanyDetails);

  const handleLoaderToggle = (status: boolean) => {
    setOpenLoading(status);
  };
  const handleRewardMintTokenData=async()=>{

    const data = await readContract({
      address: GRATIE_CONTRACT_ADDRESS,
      abi:  GRATIE_ABI,
      functionName: 'rewardTokenMints',
      args: [props.data.tokenId],
    });
   setRewardTokenMintsData(Number(data)+1);
      console.log("Reward token data",rewardTokenMintsData);
    
  }

  React.useEffect(()=>{
  handleRewardMintTokenData();
  },[])
 

  console.log(props.data.tokenId,Number(props.data.distribution.$numberDecimal)*100,chainId);
    const domain = {
    name: "Gratie",
    version: "V1",
    chainId: chainId,
    verifyingContract: GRATIE_CONTRACT_ADDRESS,
} as const;

const types = {
      RewardTokenMint: [
        {name: 'businessId', type: 'uint256'},
        {name: 'amount', type: 'uint256'},
        {name: 'lockInPercentage', type: 'uint256'},
        {name: 'mintNonce', type: 'uint256'},
    ],
} as const;


 const message = {
    businessId: BigInt(Number(props.data.tokenId)),
    amount: BigInt(Number(ethers.utils.parseUnits(props.data.valuation.$numberDecimal, 18))),
    lockInPercentage: BigInt(Number(props.data.distribution.$numberDecimal)*100),
    mintNonce: BigInt(Number(rewardTokenMintsData)),
} as const;

const { data:Signature, isError, isLoading:signatureLoading, isSuccess, signTypedData } =
useSignTypedData({
  domain,
  message,
  primaryType: 'RewardTokenMint',
  types,
})
if(isSuccess){console.log("Signature",Signature);
toast.success("🦄 Signature Succesfull", {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
})
}
if(isError){
toast.error("Error in Signature", {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
})
}

const AprrovalObject:any={
  transactionType: "APPROVED",
  walletAddr: address,
  companyId: props.data._id,
  rewardSignatureHash:Signature
}
console.log("Approval Object",JSON.stringify(AprrovalObject))

const requestOptions = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(AprrovalObject),
};

const handleAdminApproval = async () => {
  handleLoaderToggle(true);
  try {
    const response = await axios.post(
      "http://dev.api.gratie.xyz/api/v1/admin/approve",
      requestOptions.body,
      { headers: requestOptions.headers }
    );
    console.log("Response from DB after Approval:", response.data);
    handleLoaderToggle(false);
    toast.success("🦄Approved!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } catch (error) {
    handleLoaderToggle(false);
    console.error("Error occurred:", error);
    toast.error("Error Occurred while Approving the Company!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};

// fetchData();

  // const handleApprove = (businessId: string, lockInPercentage: Number) => {
  //   // console.log("Approving:", businessId, lockInPercentage);
  //   useSignAndSetData(businessId, lockInPercentage,chainId);
  // };
  return (
    <>
      
    <TableRow >
      <TableCell>{props.data.name}</TableCell>
      <TableCell>{props.data.valuation.$numberDecimal}</TableCell>
      <TableCell>{props.data.distribution.$numberDecimal}</TableCell>
      <TableCell>{props.data.email}</TableCell>
      <TableCell>{props.data.walletAddr}</TableCell>
      <Button
        variant="contained"
        style={{ padding: "5px 10px", border: "none" }}
        onClick={() => {signTypedData();} }
      >
        Sign
      </Button>
      <Button
        variant="contained"
        style={{ padding: "5px 10px", border: "none" }}
        onClick={() => {
     handleAdminApproval()} }
      >
        Approve
      </Button>
    </TableRow>
    <Loading open={openLoading} handleClose={handleLoaderToggle} />
      {openMsg&&<ModalBox
        open={openMsg}
        modalTitle={modalTitle}
        description={modalDesc}
      />}
    </>
  );
}

// function useSignAndSetData(businessId: string, lockInPercentage: Number,chainId:any) {
//   const [rewardTokenMintsData,setRewardTokenMintsData]=React.useState<any>();
//   // // Call the useSignTypedData hook to sign the typed data
//   // // and obtain the signed data as 'signature'
//   // const { signature } = useSignTypedData(types, data);

//   // // Update the 'data' constant with the new values
//   // const newData = {
//   //   ...data,
//   //   businessId,
//   //   lockInPercentage,
//   // };

//   // // Return the updated data
//   // return newData;
//   React.useEffect(() => {
//     const fetchData = async () => {
//       const data = await readContract({
//         address: GRATIE_CONTRACT_ADDRESS,
//         abi: GRATIE_ABI,
//         functionName: "rewardTokenMints",
//         args: [businessId],
//       });

//       if (data) {
//         setRewardTokenMintsData(data);
//       }
//     };

//     fetchData();
//   }, [businessId]);

//   // const { data: rewardTokenMintsData } = useContractRead({
//   //   address: GRATIE_CONTRACT_ADDRESS,
//   //   abi: GRATIE_ABI,
//   //   functionName: "rewardTokenMints",
//   //   args: [businessId],
//   //   onError(error) {
//   //     console.log('Error', error)
//   //   },
//   // });
// console.log("RewardTokenMints data:",rewardTokenMintsData );
//   console.log(businessId,lockInPercentage,chainId);
//     const domain = {
//     name: "Gratie",
//     version: "V1",
//     chainId: chainId,
//     verifyingContract: GRATIE_CONTRACT_ADDRESS,
// };

// const types = {
//     Payment: [
//         {name: 'businessId', type: 'uint256'},
//         {name: 'amount', type: 'uint256'},
//         {name: 'lockInPercentage', type: 'uint256'},
//         {name: 'mintNonce', type: 'uint256'},
//     ],
// };

// // const data = {
// //     businessId: businessId,
// //     amount: ethers.utils.parseUnits("REWARD TOKEN SUPPLY", 18),
// //     lockInPercentage: lockInPercentage,
// //     mintNonce: "call rewardTokenMints function on gratie contract with the business nft token id as arg, finally add 1 to the returned no"
// // };
// }
