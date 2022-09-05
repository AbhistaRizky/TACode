import { useNavigate } from 'react-router-dom';

export default function Connect({ fetchAccountData }) {

    const navigate = useNavigate();
    const navigateToTutorial = () => {
        navigate('/Tutorial');
    }

    return (
        <>
            <div style={styles.homeContainer}>
                <div>
                    <h1 style={styles.connectTitle}> A place where you can protect your document with safe.</h1>
                    <p style={styles.connectContent}>In order to start, you just need to connect your account to your metamask wallet. simple!</p>

                    <div style={styles.buttonContainer}>
                        <button style={styles.connectBtn} onClick={() => { fetchAccountData() }}>Connect to Metamask</button> &nbsp;
                        <button style={styles.tutorialBtn} onClick={navigateToTutorial}>Tutorial</button>
                    </div>

                </div>
                <div>
                    <img style={styles.remote} src="./img/Remotework.png" alt=""
                    />
                </div>
            </div >
        </>
    );
}


const styles = {
    homeContainer: {
        backgroundImage: "url(/img/Desktop-1.png",
        height: 650,
        width: 1349,
        backgroundSize: "cover",
        display: "flex",
        padding: 150,
        justifyContent: "Left",
        boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.2)",
        objectFit: "contain",
        // position: "relative"
    },

    connectTitle: {
        fontSize: 50,
        height: 211,
        width: 650,
        left: 99,
        borderRadius: "nullpx",
        marginBottom: -20,
        marginTop: -50,
        textAlign: "Left",
        fontFamily: "Poppins",
        fontWeight: 700,
        color: "white"

    },
    connectContent: {
        fontSize: 20,
        height: 84,
        width: 527,
        left: 99,
        top: 408,
        borderRadius: "nullpx",
        textAlign: "left",
        marginBottom: -0,
        color: "white",
        fontFamily: "Poppins",
        fontWeight: "400"

        // },
        // textPreset: {
        //     fontSize: 14,
        //     color: "white",
        //     textAlign: "center",
        //     marginBottom: 23,
        //     fontFamily: "Poppins"

    },
    buttonContainer: {
        display: "flex",
        justifyContent: "left",
        marginTop: 20,
        alignItems: "center"
    },

    connectBtn: {
        backgroundColor: "transparent",
        fontSize: 14,
        border: "solid 2px white",
        color: "white",
        marginRight: 23,
        marginTop: -12,
        height: 61,
        width: 247,
        left: 379,
        top: 555,
        borderRadius: 0,
        cursor: "pointer",
        fontFamily: "poppins"

    },

    tutorialBtn: {
        backgroundColor: "white",
        fontSize: 14,
        border: "solid 2px white",
        color: "#353535",
        fontWeight: 500,
        marginTop: -12,
        height: 61,
        width: 247,
        left: 379,
        top: 555,
        borderRadius: 0,
        cursor: "pointer",
        fontFamily: "poppins"
    },

    remote: {
        position: "absolute",
        height: 657,
        width: 674,
        left: 550,
        top: 70,
        borderRadius: 0

    }
}