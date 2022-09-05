import React from 'react'
import Navbar from '../navbar';
import { useNavigate } from 'react-router-dom';


export default function Error() {

    const navigate = useNavigate();
    return (

        <>
            <Navbar />
            <div style={styles.errorContainer}>
                <section style={styles.glasseffecterror}>
                    <img style={{
                        resizeMode: "center",
                        height: 400,
                        marginLeft: 100,
                        marginTop: -20,
                        width: 600
                    }} src="./img/404.png" alt="" />
                    <h1 style={styles.errortitle}> OOPSS.... </h1>
                    <p style={styles.errorcontext}>
                        Sorry, we can’t find the page you were looking for :(
                    </p>
                    <button style={styles.bckBtn} onClick={() => navigate(-1)}> &nbsp;
                        Back
                    </button>
                </section>
            </div>
        </>

    );
}

const styles = {
    bckBtn: {
        backgroundColor: "white",
        fontSize: 14,
        border: "solid 1px #494949",
        color: "#353535",
        marginTop: 5,
        marginLeft: 300,
        height: 40,
        width: 247,
        left: 379,
        borderRadius: 10,
        cursor: "pointer",
        fontFamily: "poppins"
    },
    errorContainer: {
        backgroundImage: "url(/img/Desktop-1.png",
        height: 660,
        width: 1349,
        display: "flex",
        padding: 150,
        justifyContent: "Left",
        boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.2)",
    },

    glasseffecterror: {
        position: "absolute",
        width: 939,
        height: 690,
        padding: 40,
        left: 250,
        top: 50,
        borderRadius: 50
    },

    errortitle: {
        color: "white",
        fontSize: 50,
        fontFamily: "poppins",
        fontWeight: "Bold",
        marginTop: 0,
        display: "flex",
        justifyContent: "center"

    },

    errorcontext: {
        color: "white",
        fontFamily: "poppins",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 15

    }
}
