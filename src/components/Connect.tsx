import { useAccount, useConnect, useDisconnect } from 'wagmi'

export default function Connect() {
  const { connect, connectors } = useConnect()
  const account = useAccount()
  const { disconnect } = useDisconnect()

  if(account.isConnected){
    return <div>
      Connected as: {account.address}
      <br />
      <button onClick={()=>disconnect()}>
        Disconnect
      </button>
    </div>
  }

  return (
    <div>
      {connectors.map((connector) => (
        <button key={connector.id} onClick={() => connect({ connector })}>
          {connector.name}
        </button>
      ))}
    </div>
  )
}