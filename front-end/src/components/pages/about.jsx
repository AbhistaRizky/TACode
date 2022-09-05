import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar';


export default function About() {

    const navigate = useNavigate();
    const navigateToTutorial = () => {
        navigate('/Tutorial');

    };
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <>
            <Navbar />
            <div style={styles.aboutContainer}>
                <section style={styles.glasseffectabout}>
                    <h1 style={styles.aboutTitle}> About Us </h1>
                    <p style={styles.aboutcontext}>
                        We are a Blockchain based website that can be used for storing and tracking your documents with high secure.
                        By using Metamask wallet as the account, there will be no registration! all you need to do is to set up your wallet then connect it to our network and if the wallet all set up, you are free to use this website!
                    </p>
                    <h1 style={styles.bctitle}> What is Blockchain? </h1>
                    <p style={styles.bccontext}>
                        Blockchain is a decentralized cryptocurrency technology that in this case, are used to track documents and make an ideal evidence that can’t be manipulated by anyone except the owner itself.  Blockchain also have a secure network that are immune to some security attack so by using this technology, your files safety are highly guaranteed!
                    </p>
                    <p style={styles.direct}>
                        incase you don't have the metamask extension and don't have metamask account, please consider download it through the link below or see the tutorial on how to set up metamask!
                    </p>
                    <div style={styles.linkContainer}>
                        <button style={styles.downloadBtn} onClick={() => openInNewTab('https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en-US')}> &nbsp;
                            Download metamask extension
                        </button>
                        <button style={styles.tutorialBtn} onClick={navigateToTutorial}>See Tutorial</button>
                        <button style={styles.bckBtn} onClick={() => navigate(-1)}> &nbsp;
                            Back
                        </button>
                    </div>
                </section>
            </div>
        </>

    );
}

const styles = {
    aboutContainer: {
        backgroundImage: "url(/img/Desktop-1.png",
        height: 858,
        width: 1349,
        backgroundSize: "cover",
        display: "flex",
        padding: 150,
        justifyContent: "Left",
        boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.2)",
        objectFit: "contain",
        position: "relative"
    },

    glasseffectabout: {
        position: "absolute",
        width: 939,
        minHeight: "100vh",
        padding: 40,
        left: 200,
        top: 40,
        background: "rgba(238, 238, 238, 0.9)",
        borderRadius: 50
    },

    aboutTitle: {
        color: "#494949",
        fontWeight: 700,
        fontSize: 35,
        textAlign: "center",
        fontFamily: "Poppins",
        marginTop: 20

    },

    aboutcontext: {
        color: "#494949",
        fontFamily: "Poppins",
        textAlign: "left",
        fontSize: 18,
        marginTop: 15
    },

    bctitle: {
        fontFamily: "Poppins",
        color: "#494949",
        fontSize: 25,
        textAlign: "center",
        fontWeight: 700,
        marginTop: 10,

    },

    bccontext: {
        fontFamily: "Poppins",
        color: "#494949",
        fontSize: 18,
        marginTop: 15,
        textAlign: "left",

    },

    direct: {
        fontFamily: "Poppins",
        color: "#494949",
        fontSize: 18,
        marginTop: 30,
        marginBottom: 50,
        textAlign: "left",
    },

    linkContainer: {
        fontFamily: "Poppins",
        fontColor: "white",
        fontSize: 23,
        marginLeft: 39,
        textAlign: "left",
    },
    downloadBtn: {
        backgroundColor: "white",
        fontSize: 14,
        border: "solid 2px #494949",
        color: "#353535",
        marginRight: 23,
        height: 40,
        width: 247,
        left: 379,
        borderRadius: 50,
        cursor: "pointer",
        fontFamily: "poppins"

    },

    tutorialBtn: {
        backgroundColor: "white",
        fontSize: 14,
        border: "solid 2px #494949",
        color: "#353535",
        fontWeight: 500,
        height: 40,
        marginRight: 23,
        width: 247,
        left: 379,
        top: 555,
        borderRadius: 50,
        cursor: "pointer",
        fontFamily: "poppins"
    },
    bckBtn: {
        backgroundColor: "turquoise",
        fontSize: 14,
        border: "solid 2px #494949",
        color: "#353535",
        marginRight: 23,
        height: 40,
        width: 247,
        left: 379,
        cursor: "pointer",
        fontFamily: "poppins",
        borderRadius: 50
    }

}