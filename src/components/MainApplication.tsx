import Profile from "./Profile.wagmi";
import { useAccount } from "wagmi"

export default function MainApplication() {
    const { isConnected } = useAccount()
    return <div className="h-screen bg-gray-50 flex items-center flex-col justify-center">
        {!isConnected ? <w3m-button/> : <Profile />}
    </div>
}