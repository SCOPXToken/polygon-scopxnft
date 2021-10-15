import "../styles/globals.css";
import Link from "next/link";

function Marketplace({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-4">
        <img src="logo.png" alt="logo" width="80pxl"></img><p className="text-4xl font-bold">SCOPXNFT Marketplace</p>
              <div className="flex mt-4">
          <Link href="/">
            <a className="mr-20 font-bold text-red-500">Home</a>
          </Link>
          <Link href="/create-item">
            <a className="mr-20 font-bold text-red-500">Create NFTs</a>
          </Link>
          <Link href="/my-nfts">
            <a className="mr-20 font-bold text-red-500">My NFTs</a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-20 font-bold text-red-500">Creator Dashboard</a>
          </Link>
          <Link href="/connect-wallet">
            <a className="mr-20 font-bold text-red-500">Connect Wallet</a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default Marketplace;
