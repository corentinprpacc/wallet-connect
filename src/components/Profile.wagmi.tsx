import { useAccount, useDisconnect } from 'wagmi'
import { useWeb3Modal } from '@web3modal/wagmi/react'

export default function Profile() {
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  const { open } = useWeb3Modal()
  if (isConnected) {
    console.log("User is connected with account: ", address)
  }
  if (!isConnected) return <div><button className="text-red-500" onClick={() => open({view: 'AllWallets'})}>Connect with different wallet</button></div>
  return <div><button className="mt-4 text-red-500" onClick={() => disconnect()}>Disconnect</button></div>
}