import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { useAuthRequestChallengeEvm } from '@moralisweb3/next';
import { useAccount, useConnect, useDisconnect, useSignMessage } from 'wagmi';

export default function Login() {
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { requestChallengeAsync } = useAuthRequestChallengeEvm()

  const { push } = useRouter();

  const handleAuth = async () => {

    const connector = new MetaMaskConnector();

    if (isConnected) {
      await disconnectAsync();
    }

    const { account, chain } = await connectAsync({ connector });

    try {
      const challenge = await requestChallengeAsync({ address: account, chainId: chain.id });

      if (!challenge) {
        throw new Error('No challenge received');
      }

      const signature = await signMessageAsync({ message: challenge.message });
      const payload = `Authentication time: ${new Date().toLocaleString()}`;
      await signIn('moralis-auth', { message: challenge.message, signature, payload, redirect: false, callbackUrl: '/mint' });

      // redirects to mint page
      push('mint');
    } catch (e) {
      // Do nothing
    }
  };
  
  return (
    <>
      <h2>Login page | web3 auth</h2>+
      <button onClick={handleAuth}>Authenticate via Metamask</button>
    </>
  )
}