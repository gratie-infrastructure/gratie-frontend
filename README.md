This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```


# Gratie Solana Frontend

## ROADMAP

* [x] Create reward tokens with erc-20 tokens based on the evaluation of the company
* [x] Create a rewards bucket (account) for every user of the company
* [x] Send company rewards to user bucket
* [ ] Add metadata to these reward tokens
* [ ] Unsafe: Create a link that allows the user to withdraw from the bucket to his account, this link will be sent to the user via email, maybe do some verification using merkle trees?


## Diagram

```mermaid
sequenceDiagram
  participant Admin
  participant Wallet
  participant Company
  participant User
  Admin-->>Wallet: Connect to the wallet
  Admin-->>Company: Approve the company
  Admin-->>Company: Add the new tier
  Company-->>Wallet: Connect to the wallet
  Company-->>Company: Register their company valuation
  Company-->>Company:Create the reward bucket
  Company-->>Company: Add the company User
  User-->>Wallet: Connect to the wallet
  User-->>User: mint rewards

  Note right of User: happens automatically <br/> on first login
  User-->>Contract: claim encrypted keypair and ATA
  loop on frontend
    User-->>User: create new keypair
    User-->>User: encrypt with user password
  end

  User-->>Contract: create new ATA for new pubkey
  User-->>Contract: update user and userbucket to new key(all tokens are transferred to new key)
  Note right of User: happens automatically <br/> until here

  User-->>Contract: (optional) user can move accounts and tokens to his own wallet

  User-->>Contract: withdraw tokens from reward bucket

```


## Notes

Company: enterprise that wants to use gratie
User: employee of the company


* changing structure of accounts in the src/state folder might break the tests because existing accounts on the network will have a different structure
* it would be great to have metaplex on the localnet

* having an ERC-1155 for every user is probably very costly because of the storage, maybe we can use an ATA for every user.


### Ideas

* User could potentially have multiple buckets, one for each company
* User could see all these buckets in the same wallet
* User could trade reward tokens from one company for reward tokens from another company


### How user buckets will be created and authenticated by user
* the users keys will be encrypted by their email and password
* the users keys will be derived from an account that will be created by the program, the company can have no access to the private key of this account because if they do they can withdraw the tokens from the user's bucket
