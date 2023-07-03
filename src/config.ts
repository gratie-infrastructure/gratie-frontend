// the first line has to be used when pushing

import { join } from "path";

// if production is set to true devnet is used!
require('dotenv').config({path: join(process.cwd(), '.env')});

// this line automatically detects if yarn build && yarn start is used!
export const PRODUCTION = process.env.NODE_ENV === 'production';

export const API_URL = process.env.API_URL;

// for development purposes to use production in yarn dev
// export const PRODUCTION = true;