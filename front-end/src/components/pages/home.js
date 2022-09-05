import React, { useState, useEffect } from 'react'
import AfterConnectV2 from '../HomeComponent/afterConnectV2';
import Connect from '../HomeComponent/connect';
import { ethers, utils } from "ethers"
import { create } from "ipfs-http-client"
import { Buffer } from "buffer"
import { useDispatch, useSelector } from "react-redux"
import { connect, disconnect } from "../../features/blockchain"
import Web3Modal from "web3modal"
import SmartContract from "../../artifacts/contracts/FileStorage.json"
import contractsAddress from "../../artifacts/deployments/map.json"
import networks from "../../networksMap.json"
import Navbar from '../navbar';


const ipfsClient = create({ url: "http://localhost:5001" })
const ipfsBaseUrl = "http://localhost:8080/ipfs/"
const eth = window.ethereum
const web3Modal = new Web3Modal()
const ads = contractsAddress["5777"]["FileStorage"][0]
const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
export default function Home() {

    const dispatch = useDispatch()
    const data = useSelector((state) => state.blockchain.value)

    const currentNetwork = networks["1337"]

    const [isConnected, setIsConnected] = useState(false)
    const [isGoodNet, setIsGoodNet] = useState(false)



    const [selectedFile, setSelectedFile] = useState()
    const [isSelected, setisSelected] = useState(false)
    const [name, setName] = useState("")
    const [size, setSize] = useState()
    const [userFiles, setUserFiles] = useState([])


    const [loading, setLoading] = useState(false)



    const updateBalance = async () => {
        const signer = provider.getSigner()
        const balance = await signer.getBalance()
        dispatch(
            connect(
                { ...data, balance: utils.formatUnits(balance) }
            )
        )
    }

    // read uploaded file using FileReader and buffer
    const getFile = (e) => {

        e.preventDefault()

        const reader = new window.FileReader();

        const file = e.target.files[0];

        if (file !== undefined) {
            reader.readAsArrayBuffer(file)

            reader.onloadend = () => {

                const buf = Buffer(reader.result, "base64")
                setSelectedFile(buf)
                setisSelected(true)

                setName(file.name)
                setSize(file.size)
            }
        }

    }

    // a function to convert file size to readable format ex: KB, MB...
    const niceBytes = (x) => {

        const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        let l = 0, n = parseInt(x, 10) || 0;
        while (n >= 1024 && ++l) {

            n = n / 1024;

        }
        return String(n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
    }

    const upload = async () => {
        console.log("Upload Fired!")
        console.log(selectedFile)
        if (selectedFile !== undefined) {
            try {
                setLoading(true)
                const signer = await provider.getSigner()
                console.log("Signer : " + signer)
                const storageContract = new ethers.Contract(ads, SmartContract.abi, signer);
                console.log("Storage contract " + storageContract)
                const addedFile = await ipfsClient.add(selectedFile)
                console.log("Added file :" + addedFile)
                const ipfsHash = ipfsBaseUrl + addedFile.path
                const fee = await storageContract.getListingFee()
                const add_tx = await storageContract.uploadFile(name, size, ipfsHash, { value: fee })
                await add_tx.wait();
                setLoading(false)

                getUserFiles()

                setName("")
                setSize(null)
                setisSelected(false)
                setSelectedFile(null)
                updateBalance()
            }
            catch (err) {
                console.log(err)
                setLoading(false)
            }

        }
        else { return }
    }

    const getUserFiles = async () => {

        const signer = await provider.getSigner()
        const storageContract = new ethers.Contract(ads, SmartContract.abi, signer);

        const filesList = await storageContract.getUserFiles(data.account)

        setUserFiles(filesList)

    }

    const [injectedProvider, setInjectedProvider] = useState();

    const fetchAccountData = async () => {
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)

        setInjectedProvider(provider);

        const signer = await provider.getSigner()
        const chainId = await provider.getNetwork()
        const account = await signer.getAddress()
        const balance = await signer.getBalance()

        dispatch(connect(
            {
                account: account,
                balance: utils.formatUnits(balance),
                network: networks[String(chainId.chainId)]
            }
        ))
        setIsConnected(data.account !== "")
        setIsGoodNet(currentNetwork === data.network)
        await (setTimeout(() => {

        }), 1000)
        getUserFiles()
    }

    const Disconnect = async () => {
        web3Modal.clearCachedProvider();
        if (injectedProvider && injectedProvider.provider && typeof injectedProvider.provider.disconnect == "function") {
            await injectedProvider.provider.disconnect();
            setInjectedProvider(null)
        }

        dispatch(disconnect())
        setTimeout(() => {
            window.location.reload();
        }, 1);
    }

    useEffect(() => {
        if (eth) {
            eth.on('chainChanged', (chainId) => {
                fetchAccountData()
            })
            eth.on('accountsChanged', (accounts) => {
                fetchAccountData()
            })
        }
    }, [])




    const shortenAddress = (address) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;




    return (
        <>
            {isConnected && isGoodNet ?
                <AfterConnectV2
                    isGoodNet={isGoodNet}
                    data={data}
                    shortenAddress={shortenAddress}
                    Disconnect={Disconnect}
                    provider={provider}
                    upload={upload}
                    niceBytes={niceBytes}
                    getFile={getFile}
                    name={name}
                    size={size}
                    userFiles={userFiles}
                    isSelected={isSelected}
                    loading={loading}
                    currentNetwork={currentNetwork}
                />
                :
                <>
                    <Navbar />
                    <Connect fetchAccountData={fetchAccountData} />
                </>
            }
        </>
    )

}