import axios from "axios";
import Web3 from "web3";
import HelloUser from "./HelloUser";
import SignInButton from "./SignInButton";

let web3: Web3 | undefined = undefined;
interface HomeProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (flag: boolean) => void;
}

const storePublicAddress = (publicAddress: string) => {
  axios.post("https://dev-gcn.samudai.xyz/api/member/login", {
    walletAddress: publicAddress,
    chainId: 10,
    member: {
      did: "did:key:z6MkiiywuxtrErPeNHpn4Ty1CquAyh7qc6Tohe8J5SdbZVwf",
    },
  });
};

const Home = ({ isLoggedIn, setIsLoggedIn }: HomeProps) => {
  const handleLogin = async () => {
    if (!window.ethereum) {
      window.alert("Please install MetaMask first.");
      return;
    }

    if (!web3) {
      try {
        await window.ethereum.enable();
        web3 = new Web3(window.ethereum);
      } catch (error) {
        window.alert("You need to allow MetaMask.");
        return;
      }
    }

    const coinbase = await web3?.eth.getCoinbase();
    if (!coinbase) {
      window.alert("Please activate MetaMask first.");
      return;
    }

    const publicAddress = coinbase.toLowerCase();
    if (publicAddress) setIsLoggedIn(true);
    sessionStorage.setItem("publicAddress", publicAddress);
    storePublicAddress(publicAddress);
  };

  return (
    <>
      {!isLoggedIn ? (
        <SignInButton text="Sign in with Ethereum" handleLogin={handleLogin} />
      ) : (
        <HelloUser />
      )}
    </>
  );
};

export default Home;
