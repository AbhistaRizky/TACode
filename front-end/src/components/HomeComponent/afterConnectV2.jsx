import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import DashboardAfterConnect from "./Dashboard";
import YourFiles from "./YourFiles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Feedback from "./Feedback";
export default function AfterConnectV2({ isGoodNet, currentNetwork, data, shortenAddress, Disconnect, name, size, getFile, upload, niceBytes, provider, userFiles, isSelected, loading }) {

    const [activeMenu, setActiveMenu] = useState("dashboard");
    const [themeColor, setThemeColor] = useState("#3A8AAC");
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };


    return (

        <div className="d-flex justify-content-start" style={{ minHeight: "100vh" }}>
            <div style={{ background: themeColor, ...styles.sideBar }}>
                <div className="logoSection">

                    <div className="p-3">


                        <h4 className="text-center">
                            DocsPal <FontAwesomeIcon icon={faCubes} />
                        </h4>
                        <div className="card mt-4" style={styles.accountInfo}>
                            <div className="card-body">
                                <p className="small">Welcome!</p>
                                <p>Account {shortenAddress(data.account)}</p>
                                <p>
                                    Balance {data.balance} ETH
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="menu mt-5">
                        <div className="dashboardMenuSelect p-2" style={{
                            background: activeMenu === "dashboard" ? "rgba(255,255,255,0.4)" : themeColor,
                            color: activeMenu === "dashboard" ? "#232323" : "#FFFFFF",
                            height: 40,
                            width: "100%",
                            cursor: "pointer"
                        }}
                            onClick={() => { setActiveMenu("dashboard") }}
                        >
                            <p className="text-center">
                                DASHBOARD
                            </p>
                        </div>
                        <div className="filesMenuSelect p-2" style={{
                            background: activeMenu === "files" ? "rgba(255,255,255,0.4)" : themeColor,
                            color: activeMenu === "files" ? "#232323" : "#FFFFFF",
                            height: 40,
                            width: "100%",
                            cursor: "pointer"
                        }}
                            onClick={() => { setActiveMenu("files") }}
                        >
                            <p className="text-center">
                                YOUR FILES
                            </p>
                        </div>
                        <div className="dashboardMenuSelect p-2" style={{
                            background: activeMenu === "feedback" ? "rgba(255,255,255,0.4)" : themeColor,
                            color: activeMenu === "feedback" ? "#232323" : "#FFFFFF",
                            height: 40,
                            width: "100%",
                            cursor: "pointer"
                        }}
                            onClick={() => { setActiveMenu("feedback") }}
                        >
                            <p className="text-center">
                                FEEDBACK
                            </p>
                        </div>
                    </div>
                    <div style={styles.sidebarFooter}>
                        <div style={styles.iconflex}>
                            <Link to='/' onClick={() => openInNewTab('https://github.com/')} style={styles.icon}>
                                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                            </Link>
                            <Link to='/about' style={styles.icon}>
                                <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>
                            </Link>
                        </div>
                        <h1 style={styles.quick}>
                            Quick Overview!
                        </h1>
                        <p style={styles.quickcontent}>
                            This was made to complete the thesis of Annisa, Rizal and Abhista.
                        </p>
                    </div>




                </div>
            </div>
            <div style={styles.content}>
                <div className="topBar shadow" style={{ borderBottom: "solid 1px #ececec" }}>
                    <div style={styles.btnbtn}>
                        <button style={styles.btnpink} className="btn btn-primary" onClick={() => { setThemeColor("#F8B195") }}></button>
                        <button style={styles.btnblue} className="btn btn-primary" onClick={() => { setThemeColor("#4095B9") }}></button>
                        <button style={styles.btngreen} className="btn btn-primary" onClick={() => { setThemeColor("#7EC384") }}></button>
                        <button style={styles.btnpurple} className="btn btn-primary" onClick={() => { setThemeColor("#D5A6BD") }}></button>
                        <button style={styles.btnorange} className="btn btn-primary" onClick={() => { setThemeColor("#f6b26b") }}></button>
                    </div>
                </div>
                <div className="content p-5" style={{ background: "#eeeeee", marginTop: 10, minHeight: "100vh" }}>
                    {

                        activeMenu === "files" ?
                            <YourFiles isGoodNet={isGoodNet}
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
                                currentNetwork={currentNetwork} /> :
                            activeMenu === "feedback" ?
                                <Feedback /> :
                                <DashboardAfterConnect isGoodNet={isGoodNet}
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
                                    currentNetwork={currentNetwork} />
                    }
                </div>
            </div>
        </div>

    );
}

const styles = {
    iconflex: {
        display: "flex",
        justifyContent: "center",
    },
    icon: {
        color: "white",
        fontSize: 50,
        margin: 5

    },
    quick: {
        fontFamily: "poppins",
        fontSize: 30,
        padding: 10
    },

    quickcontent: {
        fontFamily: "poppins",
        padding: 10,
        fontSize: 15,
        marginTop: -15
    },
    btnbtn: {
        display: "flex",
        justifyContent: "right",
        padding: 5
    },
    sideBar: {
        color: '#FFFFFF',
        width: "20%",
        position: "relative"
    },
    content: {
        width: "80%"
    },
    accountInfo: {
        background: "rgba(255,255,255,0.4)",
        color: "#232323",
        borderRadius: "30px"
    },

    btnpink: {
        borderRadius: "32px",
        backgroundColor: "#F8B195",
        border: "none",
        color: "white",
        padding: 20,
        textAlign: "center",
        textDecoration: "none",
        display: "inline - block",
        fontSize: "16px",
        margin: "4px 2px"
    },

    btnblue: {
        borderRadius: "32px",
        backgroundColor: "#4095B9",
        border: "none",
        color: "white",
        padding: 20,
        textAlign: "center",
        textDecoration: "none",
        display: "inline - block",
        fontSize: "16px",
        margin: "4px 2px"
    },
    btngreen: {
        borderRadius: "32px",
        backgroundColor: "#7EC384",
        border: "none",
        color: "white",
        padding: 20,
        textAlign: "center",
        textDecoration: "none",
        display: "inline - block",
        fontSize: "16px",
        margin: "4px 2px"
    },
    sidebarFooter: {
        bottom: 0,
        position: "absolute"
    },
    btnpurple: {
        borderRadius: "32px",
        backgroundColor: "#D5A6BD",
        border: "none",
        color: "white",
        padding: 20,
        textAlign: "center",
        textDecoration: "none",
        display: "inline - block",
        fontSize: "16px",
        margin: "4px 2px"
    },
    btnorange: {
        borderRadius: "32px",
        backgroundColor: "#f6b26b",
        border: "none",
        color: "white",
        padding: 20,
        textAlign: "center",
        textDecoration: "none",
        display: "inline - block",
        fontSize: "16px",
        margin: "4px 2px"
    }
}