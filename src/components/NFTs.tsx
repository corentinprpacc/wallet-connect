import { CrossmintNFTCollectionView } from "@crossmint/client-sdk-react-ui";

export default function NFTs({ address }: { address: string }) {
    const wallets = [
        {
          chain: "solana",
          publicKey: address,
        },
        {
          chain: "ethereum",
          publicKey: address,
        },
        {
          chain: "polygon",
          publicKey: address,
        },
      ];
    return <div className="flex flex-col items-center w-full">
        <h1 className="text-2xl font-semibold">My NFT's</h1>
        <div className="w-full h-80 mt-2 px-2">
            <CrossmintNFTCollectionView wallets={wallets} environment="staging" />
        </div>
    </div>
}