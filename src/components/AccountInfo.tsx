import { Chip, CircularProgress, Link, Typography } from '@mui/material';
import { Suspense, useMemo } from 'react';

import AccountBalance from './AccountBalance';

type Props = Readonly<{
    publicKey: null;
}>;

export default function AccountInfo({ publicKey }: Props) {
    const publicKeyBase58String = useMemo(() => publicKey, [publicKey]);
    return (
        <>
            <Chip
                color="info"
                sx={{ marginRight: 1 }}
                label={
                    <Suspense
                        fallback={<CircularProgress color="inherit" size={18} sx={{ verticalAlign: 'middle' }} />}
                    >
                        <AccountBalance />
                    </Suspense>
                }
            />
            <Typography>
                <Link
                    color="inherit"
                    href={`https://explorer.solana.com/address/${publicKeyBase58String}?cluster=devnet`}
                    rel="noreferrer"
                    target="_blank"
                    underline="none"
                >
                    <code>{}</code>
                </Link>
            </Typography>
        </>
    );
}
