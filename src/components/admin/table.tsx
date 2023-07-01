import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import { checkAdmin, connectToGratieSolanaContract } from '@/src/gratie_solana_contract/gratie_solana_contract';
// import { verifyCompanyLicense } from '@/src/gratie_solana_contract/gratie_solana_company';
// import { useWallet } from '@solana/wallet-adapter-react';
import Link from "next/link";
import { Button } from "@mui/material";
import {  useAccount, useConnect, useContractRead, useNetwork, useSignTypedData } from "wagmi";
import {readContract} from "wagmi/actions";
import { GRATIE_ABI, GRATIE_CONTRACT_ADDRESS } from "@/constants/Gratie";
import { ethers } from "ethers";

export default function ListUserTable(props:any) {
  const { chain, chains } = useNetwork()
  const chainId=chain?.id;
  console.log(chainId);

  const CompanyDetails: any[] =props.data;
  console.log("Company data from Table", CompanyDetails)
  const { data: rewardTokenMintsData } = useContractRead({
    address: GRATIE_CONTRACT_ADDRESS,
    abi: GRATIE_ABI,
    functionName: "rewardTokenMints",
    args: [props.data.tokenId],
    onError(error) {
      console.log('Error', error)
    },
  });
console.log("RewardTokenMints data:",Number(rewardTokenMintsData) );
  console.log(props.data.tokenId,Number(props.data.distribution.$numberDecimal)*100,chainId);
    const domain = {
    name: "Gratie",
    version: "V1",
    chainId: chainId,
    verifyingContract: GRATIE_CONTRACT_ADDRESS,
} as const;

const types = {
    Payment: [
        {name: 'businessId', type: 'uint256'},
        {name: 'amount', type: 'uint256'},
        {name: 'lockInPercentage', type: 'uint256'},
        {name: 'mintNonce', type: 'uint256'},
    ],
} as const;

// const data = {
//     businessId: props.data.tokenId,
//     amount: ethers.utils.parseUnits("REWARD TOKEN SUPPLY", 18),
//     lockInPercentage: Number(props.data.distribution.$numberDecimal)*100,
//     mintNonce: Number(rewardTokenMintsData)+1,
// };
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
        // onClick={() =>
        //   handleApprove(i.tokenId, Number(i.distribution.$numberDecimal)*100)
        // }
      >
        Approve
      </Button>
    </TableRow>

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
