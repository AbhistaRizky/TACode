import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar';


export default function Tutorial() {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <div style={styles.tutorialContainer}>
                <section style={styles.glasseffecttutor}>

                    <h1 style={styles.tutorTitle}> How to use our website </h1>
                    <h2 style={styles.installTitle}>Step one: Install Metamask </h2>
                    <p style={styles.tutorcontext1}> 1. Install Metamask extension from Google extension and add it to chrome or just click the button below. </p>
                    <div>
                        <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en-US'}" target="_blank" rel="noopener noreferrer">
                            Metamask Extension
                        </a>
                    </div>
                    <img style={{
                        resizeMode: "center",
                        height: 300,
                        marginLeft: 150,
                        marginTop: 30,
                        marginBottom: 20,
                        width: 550
                    }} src="./img/ss5.png" alt="" />

                    <p style={styles.tutorcontext2}> 2. After you done with the installation, you can get started immediately and create a new wallet. </p>
                    <img style={{
                        resizeMode: "center",
                        height: 300,
                        marginLeft: 150,
                        marginTop: 30,
                        marginBottom: 20,
                        width: 550
                    }} src="./img/meta 2.png" alt="" />

                    <p style={styles.tutorcontext3}> 3. Create your password. </p>
                    <img style={{
                        resizeMode: "center",
                        height: 300,
                        marginLeft: 150,
                        marginTop: 10,
                        marginBottom: 20,
                        width: 550
                    }} src="./img/meta 3.png" alt="" />

                    <p style={styles.tutorcontext4}> 4. After you created your password, you will be directed to your account.</p>
                    <img style={{
                        resizeMode: "center",
                        height: 300,
                        marginLeft: 150,
                        marginTop: 30,
                        marginBottom: 20,
                        width: 550
                    }} src="./img/meta 4.png" alt="" />

                    <h3 style={styles.networkTitle}>Step Two. Set up your Network </h3>
                    <p style={styles.tutorcontext5}> 1. you can start by clicking the button beside your account button. Then click add Network </p>
                    <img style={{
                        resizeMode: "center",
                        height: 300,
                        marginLeft: 150,
                        marginTop: 30,
                        marginBottom: 20,
                        width: 550
                    }} src="./img/meta 5.png" alt="" />

                    <p style={styles.tutorcontext6}> 2. Input the exact same context as the image below shows. it will lead you to create a polygon testnet </p>
                    <img style={{
                        resizeMode: "center",
                        height: 300,
                        marginLeft: 150,
                        marginTop: 30,
                        marginBottom: 20,
                        width: 550
                    }} src="./img/meta 6.png" alt="" />

                    <p style={styles.tutorcontext7}> 3. After the polygon Testnet was successfully added, go to google search and type "Polygon Faucet" and choose the top one. or you can just click the link below </p>
                    <div>
                        <a href="https://faucet.polygon.technology/" target="_blank" rel="noopener noreferrer">
                            Polygon Faucet
                        </a> </div>
                    <img style={{
                        resizeMode: "center",
                        height: 300,
                        marginLeft: 150,
                        marginTop: 30,
                        marginBottom: 20,
                        width: 550
                    }} src="./img/meta 8.png" alt="" />

                    <p style={styles.tutorcontext8}> 4. Copy your address on metamask and paste input it on the wallet address  </p>
                    <img style={{
                        resizeMode: "center",
                        height: 300,
                        marginLeft: 150,
                        marginTop: 30,
                        marginBottom: 20,
                        width: 550
                    }} src="./img/meta 9.png" alt="" />

                    <img style={{
                        resizeMode: "center",
                        height: 300,
                        marginLeft: 150,
                        marginTop: 30,
                        marginBottom: 20,
                        width: 550
                    }} src="./img/meta 10.png" alt="" />

                    <p style={styles.tutorcontext9}> 5. Make sure the wallet address you input are right and then confirm. Wait for 1-2 minutes and a 0.2 MATIC token will be transferred to your metamask account  </p>
                    <img style={{
                        resizeMode: "center",
                        height: 300,
                        marginLeft: 150,
                        marginTop: 30,
                        marginBottom: 20,
                        width: 550
                    }} src="./img/meta 13.png" alt="" />

                    <button style={styles.bckBtn} onClick={() => navigate(-1)}> &nbsp;
                        Back
                    </button>
                </section>
            </div>
        </>

    );
}

const styles = {
    tutorialContainer: {
        background: "#4095B9",
        height: 4500,
        width: 1349,
        backgroundSize: "cover",
        display: "flex",
        padding: 150,
        justifyContent: "Left",
        objectFit: "contain",
        position: "relative"
    },

    glasseffecttutor: {
        position: "absolute",
        width: 939,
        height: 4370,
        padding: 60,
        left: 200,
        top: 40,
        background: "rgba(238, 238, 238, 0.9)",
        borderRadius: 50,
        objectFit: "contain"
    },

    tutorTitle: {
        color: "#494949",
        fontWeight: 700,
        fontSize: 40,
        textAlign: "center",
        justifyContent: "center",
        fontFamily: "Poppins",
        marginTop: 20

    },
    installTitle: {
        color: "#494949",
        fontWeight: 700,
        fontSize: 20,
        fontFamily: "Poppins",
        marginTop: 20

    },

    networkTitle: {
        color: "#494949",
        fontWeight: 700,
        fontSize: 20,
        fontFamily: "Poppins",
        marginTop: 50
    },

    tutorcontext1: {
        color: "#494949",
        fontFamily: "Poppins",
        fontWeight: 500,
        textAlign: "left",
        fontSize: 15,
        marginTop: 15
    },

    tutorcontext2: {
        color: "#494949",
        fontFamily: "Poppins",
        fontWeight: 500,
        textAlign: "left",
        fontSize: 15,
        marginTop: 15
    },
    tutorcontext3: {
        color: "#494949",
        fontFamily: "Poppins",
        fontWeight: 500,
        textAlign: "left",
        fontSize: 15,
        marginTop: 15
    },
    tutorcontext4: {
        color: "#494949",
        fontFamily: "Poppins",
        fontWeight: 500,
        textAlign: "left",
        fontSize: 15,
        marginTop: 15
    },
    tutorcontext5: {
        color: "#494949",
        fontFamily: "Poppins",
        fontWeight: 500,
        textAlign: "left",
        fontSize: 15,
        marginTop: 15
    },
    tutorcontext6: {
        color: "#494949",
        fontFamily: "Poppins",
        fontWeight: 500,
        textAlign: "left",
        fontSize: 15,
        marginTop: 15
    },
    tutorcontext7: {
        color: "#494949",
        fontFamily: "Poppins",
        fontWeight: 500,
        textAlign: "left",
        fontSize: 15,
        marginTop: 15
    },
    tutorcontext8: {
        color: "#494949",
        fontFamily: "Poppins",
        fontWeight: 500,
        textAlign: "left",
        fontSize: 15,
        marginTop: 15
    },
    tutorcontext9: {
        color: "#494949",
        fontFamily: "Poppins",
        fontWeight: 500,
        textAlign: "left",
        fontSize: 15,
        marginTop: 15
    },



    linkContainer: {
        fontFamily: "Poppins",
        fontColor: "white",
        fontSize: 23,
        textAlign: "left",
    },
    downloadBtn: {
        backgroundColor: "gray",
        fontSize: 15,
        border: "solid 2px #494949",
        color: "white",
        //marginRight: 23,
        height: 30,
        width: 255,
        // left: 350,
        borderRadius: 0,
        cursor: "pointer",
        fontFamily: "poppins"
    },
    bckBtn: {
        backgroundColor: "white",
        fontSize: 14,
        border: "solid 1px #494949",
        color: "#353535",
        marginRight: 23,
        height: 40,
        width: 247,
        left: 379,
        borderRadius: 10,
        cursor: "pointer",
        fontFamily: "poppins"
    }
}