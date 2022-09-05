// import React from 'react'
// import { useSelector } from "react-redux"
// import Account from "./Account"
// import FileStorage from "./FileStorage"

// import { Nav, Title, Note } from "./NavbarElements"



// function Main() {
//     const data = useSelector((state) => state.blockchain.value)

//     const isConnected = data.account !== ""

//     return (
//         <>
//             <Nav >
//                 <Title>Simple Document Storage</Title>
//                 <Note>
//                     {isConnected ? (
//                         <p>
//                             Note: You are currently connected to the {data.network ? data.network : "unknown"} network
//                         </p>
//                     ) : (
//                         <p>Please connect your wallet</p>
//                     )}
//                 </Note>
//                 <Account />
//             </Nav>

//             <h1>Decentralized Storage Dapp</h1>
//             <h2>Abhista and Annisa Blockchain Final Project</h2>
//             <br />
//             <div>

//                 {isConnected ? (
//                     <>
//                         <FileStorage />
//                     </>
//                 ) : null}

//             </div>

//         </>
//     )
// }

// export default Main