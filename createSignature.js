const ethers = require("ethers");
require("dotenv").config();

async function main() {
    try {
        const signer = new ethers.Wallet("947005511673d1fd60c6cc941bd552ead7d871318f7e994bfe8a836d34e8d99c");//change
        // const domain = {
        //     name: "Gratie",
        //     version: "V1",
        //     chainId: 4002, //change
        //     verifyingContract: "0xCB3C34647f6788c702bddd0c1dBC37cbFa034Aac"//change mumbai gratie address
        // };

        // const types = {
        //     Payment: [
        //       {name: 'method', type: 'address'},
        //       {name: 'amount', type: 'uint256'},
        //       {name: 'tierID', type: 'uint256'},
        //       {name: 'buyer', type: 'address'},
        //     ],
        //   };
      

        // const data = {
        //     method: "0x8b220889D008939da6aeBc3FA23a82a6e5E2b230", //payment address eg usdc
        //     amount: ethers.utils.parseUnits("19", 6),
        //     tierID: 2,
        //     buyer: "0x79730Ada93242A2e6e76B828Da3cC05C20FBDA1B",
        // };
         const domain = {
            name: "Gratie",
            version: "V1",
            chainId: 4002, //change
            verifyingContract: "0xCB3C34647f6788c702bddd0c1dBC37cbFa034Aac"//change mumbai gratie address
        };

        const types = {
            RewardTokenMint: [
              {name: 'businessId', type: 'uint256'},
              {name: 'amount', type: 'uint256'},
              {name: 'lockInPercentage', type: 'uint256'},
              {name: 'mintNonce', type: 'uint256'},
          ],
      } ;
      
      
       const message = {
          businessId: 15,
          amount: BigInt(Number(ethers.utils.parseUnits("20000", 18))),
          lockInPercentage: 1100,
          mintNonce: 1,
      } ;

        const  sig = await signer._signTypedData(domain, types, message);
        console.log("Sig: ", sig);

    } catch (error) {
        console.log(error);
    }
}

main();

