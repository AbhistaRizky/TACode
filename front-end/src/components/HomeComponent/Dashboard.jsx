import { ClipLoader } from "react-spinners"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //manggil asset dalam fontawesome yang udah di install di terminal
import { faStar } from "@fortawesome/free-solid-svg-icons"
export default function DashboardAfterConnect({ isGoodNet, currentNetwork }) {
    const config = require("../../env.json")
    const [isLoading, setIsLoading] = useState(true)
    const [feedbacks, setFeedbacks] = useState([])
    const loadFeedbacks = async () => {
        console.log("Loading Feedbacks...")
        try {
            const res = await fetch(`${config.backendUrl}/feedback`);
            const resJson = await res.json();
            const feedbacksData = resJson.feedbacks;
            setFeedbacks(feedbacksData)
            setIsLoading(false)
        } catch (err) {
            console.log("Error Loading Feedbacks")
        }
    }

    useEffect(() => {
        loadFeedbacks()
    }, [])

    const renderStar = (rating) => {
        const content = [];

        for (let i = 1; i <= 5; i++) {
            content.push(
                <FontAwesomeIcon icon={faStar} style={{ color: i <= rating ? "yellow" : "#cecece" }} />)
        }
        return (
            <>
                {content}
            </>
        )
    }

    const renderFeedbacks = () => {
        return (
            <>            {
                isLoading ?
                    <ClipLoader size={200} /> :
                    <ul class="list-group">
                        {feedbacks.map((feedback) => {
                            return (
                                <li className="list-group-item" key={feedback.id} >
                                    <h4 className="font-weight-bold" style={{ fontSize: 20 }}>
                                        {feedback.name}
                                    </h4>
                                    <p>{renderStar(feedback.rating)}</p>
                                    <p className="text-muted">
                                        " {feedback.content} "
                                    </p>
                                </li>
                            )
                        })}

                    </ul>
            }
            </>

        )
    }

    return (
        <div>
            <div style={styles.dashboardcontent}>
                <div className="card-body">
                    <p style={styles.network}>
                        You are currently using: {currentNetwork}
                    </p>
                    <p style={styles.network}>
                        Network Status : {isGoodNet ? "Good" : "Bad"}
                    </p>
                    {/* <Grid container justify="flex-end">
                        <Button color="primary" size="large" type="submit" variant="contained" onClick={() => { Disconnect() }}>
                            Disconnect
                        </Button>
                    </Grid> */}
                </div>
            </div>
            <div style={styles.fbview}>
                <h4 style={styles.feedback} className="mb-3">View Feedbacks</h4>

                {renderFeedbacks()}


            </div>

        </div >
    )
}

const styles = {
    dashboardcontent: {
        backgroundColor: "white",
        width: "1000px",
        height: 100,
        marginTop: -35,
        borderRadius: "30px",
        fontFamily: "poppins"
    },

    network: {
        fontFamily: "poppins",
        fontWeight: 500
    },
    dashcont: {
        marginTop: 20,
    },

    searchbar: {
        marginLeft: "800px",
        width: "300px",
    },

    fbview: {
        width: "100%",
        padding: 30,
        minHeight: "385px",
        marginTop: "30px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 2px 4px 1px rgba(0, 0, 0, 0.25)",
    },
    feedback: {
        fontFamily: "poppins",
        fontWeight: 800
    }


}