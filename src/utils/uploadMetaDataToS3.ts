import axios from 'axios';

export const uploadMetaDataToS3 = async(jsonData:any) => {
    const jsonStrData = JSON.stringify(jsonData);
    const dataBase64 = Buffer.from(jsonStrData).toString('base64');
    const resp = await axios.post('/api/upload-file', { data: dataBase64, contentType: 'application/json' });

    return resp.data.url;
}

export const parseDataFromJsonUrl = async(url:string) => {
    try {
        console.log("---------------parseDataFromJsonUrl-");
        const resp = await axios.get('https://gratie.s3.eu-central-003.backblazeb2.com/713c6f9a-3b4e-4aee-9296-97711a4b923c');
        // console.log("resp", resp);

        const data:any = {
            "name": "Example Company License",
            "symbol": "GRATIE",
            "description": "A test for our company license",
            "seller_fee_basis_points": 5,
            "external_url": "",
            "edition": "",
            "background_color": "000000",
            "image": "https://hhddwu4g3o6n3kjsuvbgpvl7dncx3aptgylgunipgeorw3p3hnqa.arweave.net/OcY7U4bbvN2pMqVCZ9V_G0V9gfM2Fmo1DzEdG237O2A"
          }
        return JSON.parse(data);
    }
    catch(err) {
        console.log(err);
        return null;
    }
}
