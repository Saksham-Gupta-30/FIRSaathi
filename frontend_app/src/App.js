import React, { useState, useEffect } from 'react'
import './css/App.css'
import { Route, Routes } from "react-router-dom"
import { Auth } from './components/Auth'
import { AuthContainer } from './containers/AuthContainer'
import { PrivateContainer } from './containers/PrivateContainer'
import { Loader } from './components/Loader'
import { Dashboard } from './components/backoffice/Dashboard'
import Fir from './artifacts/contracts/Fir.sol/Fir.json'
const ethers = require("ethers")

const App = () => {

	const [account, setAccount] = useState("");
	const [contract, setContract] = useState(null);
	const [provider, setProvider] = useState(null);

	useEffect(() => {
		const provider = new ethers.providers.Web3Provider(window.ethereum);

		const loadProvider = async () => {
			if (provider) {
				window.ethereum.on("chainChanged", () => {
					window.location.reload();
				})
				window.ethereum.on("accountsChanged", () => {
					window.location.reload();
				})
				await provider.send("eth_requestAccounts", []);
				const signer = provider.getSigner();
				const address = await signer.getAddress();
				setAccount(address);
				let contractAddress = "0xD022b05633cdb571d12fF4d236EC2A8e6a7DA89B";
				const contract = new ethers.Contract(contractAddress, Fir.abi, signer);
				// console.log(contract)
				setContract(contract);
				setProvider(provider);
			}
			else {
				console.log("Metamask not found");
			}
		}
		provider && loadProvider();
	}, [])

	return (
		<div className="limiter poppins">
			<Loader />
			<div className="container-login100">
				<Routes>
					<Route path='/' element={<AuthContainer><Auth /></AuthContainer>} />
					<Route path='/dashboard' element={<PrivateContainer><Dashboard contract={contract} account={account} provider={provider} /></PrivateContainer>} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
