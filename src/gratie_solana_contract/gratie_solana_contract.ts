import * as anchor from "@project-serum/anchor";
import { Connection, PublicKey } from "@solana/web3.js";
import { GratieSolana } from "./types/gratie_solana";
import idl from "./idl/gratie_solana.json";
import { PRODUCTION } from "../config";
import NodeWallet from "@project-serum/anchor/dist/cjs/nodewallet";

console.log(process.env.NODE_ENV);

const NETWORK = PRODUCTION ? "https://api.devnet.solana.com" : "http://localhost:8899";

const MUCKS_DEV_PROGRAM_ID = new PublicKey("FmG2zTeSd4rStaj6FD9W8WipbXGjDyF3e3btXTqBFbky");
// add your id here and then we have to change when we pull and use local
const SELVA_DEV_PROGRAM_ID = new PublicKey("876aszEfTpFmid7jbhoZuTZW3wKewB6YXCkVnAxwcsEY");

const PROGRAM_ID = PRODUCTION ? new PublicKey("FmG2zTeSd4rStaj6FD9W8WipbXGjDyF3e3btXTqBFbky") : SELVA_DEV_PROGRAM_ID;

export const connectToGratieSolanaContract = async (): Promise<anchor.Program<GratieSolana>> => {
  const connection = new Connection(NETWORK, "processed");
  const provider = new anchor.AnchorProvider(connection, (window as any).solana, { preflightCommitment: 'processed' });

  const program: anchor.Program<GratieSolana> | any = new anchor.Program(idl as any, PROGRAM_ID, provider);

  return program;
}

// this is for the users who don't have their own wallet
export const connectToGratieSolanaContractWithKeypair = async (keypair: anchor.web3.Keypair): Promise<anchor.Program<GratieSolana>> => {
  const connection = new Connection(NETWORK, "processed");

  const wallet = new NodeWallet(keypair);

  const provider = new anchor.AnchorProvider(connection, wallet, { preflightCommitment: 'processed' });

  const program: anchor.Program<GratieSolana> | any = new anchor.Program(idl as any, PROGRAM_ID, provider);

  return program;
};
  

export const checkAdmin = async (program: anchor.Program<GratieSolana>, admin: anchor.web3.PublicKey): Promise<boolean> => {
  try {
    await program.methods.isAdmin(admin).rpc();
    return true;
  } catch (e) {
    return false;

  }
}