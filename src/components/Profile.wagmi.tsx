import { useAccount, useDisconnect } from 'wagmi'

export default function Profile() {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()

  return <div className="flex flex-col items-center">
    <div className="flex flex-col gap-1 items-center">
      <h1 className="text-2xl font-semibold">Your Account</h1>
      <p className="text-sm">{address}</p>
    </div>
    <button className="mt-2 p-2 bg-red-500 text-white rounded-md transition-all duration-200 hover:bg-red-600" onClick={() => disconnect()}>Disconnect</button>
  </div>
}