import { mainnet, sepolia } from 'wagmi/chains'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

const projectId = '1373ebbfab65316d0afc91c0c1ad0df7'

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

export const config = defaultWagmiConfig({
  chains: [mainnet, sepolia],
//   transports: {
//     [mainnet.id]: http(),
//     [sepolia.id]: http(),
//   },
  projectId,
  metadata
})