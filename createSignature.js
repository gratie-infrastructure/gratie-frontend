const ethers = require("ethers");
require("dotenv").config();

async function main() {
    try {
        const signer = new ethers.Wallet("c848768aaf97c4c80203441396cd4aee3503baaf744a3cd1e10316e50f42d016");//change
        const domain = {
            name: "Gratie",
            version: "V1",
            chainId: 80001, //change
            verifyingContract: "0xBb30A4009115EAD9D2262b56272467E92ABE750c"//change mumbai gratie address
        };

        const types = {
            Payment: [
                { name: 'method', type: 'address' },
                { name: 'amount', type: 'uint256' }
            ]
        };

        const data = {
            method: "0xB3D73A5b58DdCa4338e3dEB418d384D5d3dEeBa8", //payment address eg usdc
            amount: ethers.utils.parseUnits("1", 6)
        };

        const  sig = await signer._signTypedData(domain, types, data);
        console.log("Sig: ", sig);

    } catch (error) {
        console.log(error);
    }
}

main();

