import { useAccount, useDisconnect } from 'wagmi'
import NFTs from './NFTs'

export default function Profile() {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()

  return <div className="flex flex-col items-center w-full">
    <div className="flex flex-col gap-1 items-center">
      <h1 className="text-2xl font-semibold">Your Account</h1>
      <p className="text-sm">{address}</p>
    </div>
    <div className="mt-4 w-full">
      <NFTs address={address || ""} />
    </div>
    <button className="mt-2 p-2 bg-red-500 text-white rounded-md transition-all duration-200 hover:bg-red-600" onClick={() => disconnect()}>Disconnect</button>
  </div>
}