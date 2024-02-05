import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { WagmiProvider } from 'wagmi'
import { config } from '../config'
import MainApplication from './components/MainApplication'

const queryClient = new QueryClient() 

createWeb3Modal({
    wagmiConfig: config,
    projectId: "1373ebbfab65316d0afc91c0c1ad0df7",
    enableAnalytics: true // Optional - defaults to your Cloud configuration
  })

export default function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}> 
        <MainApplication />
      </QueryClientProvider> 
    </WagmiProvider>
  )
}