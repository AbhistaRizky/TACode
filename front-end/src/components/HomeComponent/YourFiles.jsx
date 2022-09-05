import { Button, makeStyles, Input, List, ListItem, ListItemIcon, ListItemText, CircularProgress } from "@material-ui/core"
import { Folder } from "@material-ui/icons"
import { useState } from "react";
import SearchBar from "./SearchBar";
import { useEffect } from "react";

export default function YourFiles({ name, size, getFile, upload, niceBytes, userFiles, isSelected, loading }) {
    const [searchValue, setSearchValue] = useState("");
    const [userFilesData, setUserFilesData] = useState(userFiles);
    const updateData = () => {

        if (searchValue == "") {
            setUserFilesData(userFiles)
        }
        else {
            const searchResults = userFiles.filter((file) => {
                if (file.name.toLowerCase().includes(searchValue.toLowerCase())) {
                    return file
                }
            })
            setUserFilesData(searchResults)
        }

    }

    useEffect(() => {
        updateData()
    }, [searchValue])



    return (
        <div>
            <div className="row">
                <div className="col-lg-9">
                    <h4 style={styles.transactionhist}>
                        Transaction History
                    </h4>
                </div>
                <div className="col-lg-3">
                    <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
                </div>
            </div>
            <div style={styles.filescont}>
                <List>
                    {userFilesData.map((fileData, i) => {
                        const uploadDate = new Date(fileData.uploadDate.toNumber() * 1000).toLocaleString()

                        return (
                            <ListItem key={i}>
                                <ListItemIcon>
                                    <Folder />
                                </ListItemIcon>
                                <a href={fileData.uri} target="_blank" style={{ textDecoration: 'none', color: "black" }}>
                                    <ListItemText
                                        primary={fileData.name}
                                        secondary={niceBytes(fileData.size) + "   ||   " + uploadDate}
                                    />
                                </a>


                            </ListItem>)
                    })}
                </List>

            </div>


            <button className="btn btn-success" style={styles.addDocumentButton} data-bs-toggle="modal" data-bs-target="#addModal">
                +
            </button>

            <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" >
                    <div className="modal-content" style={styles.effectmodal}>
                        <div className="modal-body">
                            <div className="d-flex justify-content-end pb-3">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <h1 style={styles.homeTitle}> Upload your document here! </h1>
                            <h4 style={styles.h4}> Please input your document by clicking the button below </h4>
                            <div style={styles.inputfile} >
                                <Input type="file" name="file" onChange={(e) => { getFile(e) }} />
                            </div>

                            {isSelected ? (
                                <div style={styles.getdata}>
                                    <p>File name: {name}</p>
                                    <p>File size: {niceBytes(size)}</p>
                                </div>
                            ) : null}


                            <div style={styles.uploadBtn}>

                                <Button variant='contained' color="primary" onClick={() => { upload() }}>
                                    {loading ? <CircularProgress size={26} color="secondary" /> : "upload"}
                                </Button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    searchbar: {
        display: "flex",
        justifyContent: "Right"
    },
    addDocumentButton: {
        position: "fixed",
        right: 10,
        bottom: 10,
        borderRadius: "50%",
        height: 80,
        width: 80,
        fontSize: 36,
        cursor: "cell"
    },
    h4: {
        fontFamily: "poppins",
        fontWeight: 500,
        fontSize: 15,
        textAlign: "center",
        marginBottom: 20
    },
    inputfile: {
        textAlign: "center"
    },
    filescont: {

        width: "1000px",
        height: "435px",
        marginTop: "30px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 2px 4px 1px rgba(0, 0, 0, 0.25)",
    },
    transactionhist: {
        marginTop: -30,
        fontFamily: "poppins",
        fontWeight: 800

    },
    uploadBtn: {
        textAlign: "center",
        position: "center",
        padding: 20,

    },
    getdata: {
        marginTop: 20,
        fontFamily: "poppins",

    },
    homeTitle: {
        fontFamily: "poppins",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 30
    }
}