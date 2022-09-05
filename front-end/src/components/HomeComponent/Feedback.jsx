import { useState } from "react"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const config = require("../../env.json")

export default function Feedback() {

    const Alert = withReactContent(Swal)

    const stars = Array(5).fill(0);

    const [name, setName] = useState("")
    const [content, setContent] = useState("")
    const [rating, setRating] = useState(1)


    const submitFeedback = async () => {
        const data = {
            name,
            content,
            rating
        }

        try {
            await fetch(`${config.backendUrl}/feedback`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(data)
            })
            setName("")
            setContent("")
            setRating("")
            Alert.fire({
                title: "Success",
                text: "Feedback Successfully Submitted!",
                icon: "success"
            })
        } catch (err) {
            console.log("Error Create")
        }
    }

    return (

        <div className="card w-100">
            <div className="card-body">
                <h2 style={styles.h2}>Give us your feedback</h2>

                <div className="feedBackForm">
                    <div className="form-group p-2">
                        <label style={styles.text} htmlFor="name">Name</label>
                        <input placeholder="Please input your name" type="text" className="form-control" onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div className="form-group p-2">
                        <label style={styles.text} htmlFor="content">Feedback</label>
                        <input placeholder="Please give us your feedback " type="text" className="form-control" onChange={(e) => { setContent(e.target.value) }} />
                    </div>
                    <div className="form-group p-2">
                        <label style={styles.text} htmlFor="rating">Rating</label>
                        <select className="form-control" id="rating" onChange={(e) => { setRating(e.target.value) }}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <button style={styles.fontdiv} className="btn btn-md mt-3 btn-primary" onClick={() => { submitFeedback() }}>
                        Submit Feedback
                    </button>
                </div>
            </div>
        </div>

    );
};

const styles = {
    h2: {
        fontFamily: "poppins",
        fontWeight: 800,
    },

    fontdiv: {
        fontFamily: "poppins",
        fontWeight: 500
    },
    text: {
        fontFamily: "poppins",
        fontWeight: 800
    }
}