import React, {Fragment, useState} from "react";
import {PDFDownloadLink, PDFViewer} from "@react-pdf/renderer";
import {PdfDocument} from "./Report";

export default function PDFGenerator() {

    const [data, setDetails] = useState([]);


    return (
        <Fragment>
            <div className="container">
                <PDFDownloadLink
                    document={<PdfDocument data={data}/>}
                    fileName="movielist.pdf"
                    style={{
                        textDecoration: "none",
                        padding: "10px",
                        color: "#4a4a4a",
                        backgroundColor: "#f2f2f2",
                        border: "1px solid #4a4a4a"
                    }}
                >
                    {({blob, url, loading, error}) =>
                        loading ? "Loading document..." : "Download Pdf"
                    }
                </PDFDownloadLink>

            </div>
            <h2>Preview</h2>
            <PDFViewer>
                <PdfDocument/>
            </PDFViewer>

        </Fragment>

    );
}
