import { ConnectButton } from '@rainbow-me/rainbowkit';
import {Button} from "../components/Button"
import { useEnsAvatar } from 'wagmi'

  
//   if (isLoading) return <div>Fetching avatar…</div>
//   if (isError) return <div>Error fetching avatar</div>
//   return <div>Avatar: {data}</div>


export const WalletButton = () => {
    const { data:avatar, isError, isLoading } = useEnsAvatar({
        name: 'jxom.eth',
      })
    
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');
        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                // opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button onClick={openConnectModal} type="button" text={"Connect Wallet"} className="text-white"/>
                );
              }
              if (chain.unsupported) {
                return (
                  <Button onClick={openChainModal} type="button" text={"Wrong network"} className="text-white"/>
                );
              }
              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  <button
                  className="w-[fit-content] py-[0.8rem] px-3  whitespace-nowrap text-base bg-[#fff] font-bold border rounded-lg md:py-[0.6875rem] md:px-6 hover:bg-[#fbf8ff] shadow transition-all ease-in"
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 20,
                          height: 20,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 6,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            // style={{ width: 16, height: 16 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>
                  <button onClick={openAccountModal} type="button" className="w-[fit-content] py-[0.8rem] px-3  whitespace-nowrap text-base bg-[#fff] font-bold border rounded-lg md:py-[0.6875rem] md:px-6 hover:bg-[#f8f5fc] shadow transition-all ease-in">
                    {avatar}
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};


