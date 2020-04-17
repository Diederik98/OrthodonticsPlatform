import React, {Fragment, useState} from "react";
import {PDFDownloadLink, PDFViewer} from "@react-pdf/renderer";
import {PdfDocument} from "./Report";
import {Button} from "@material-ui/core";

export default function PDFGenerator() {

    const [data, setDetails] = useState([]);


    return (
        <Fragment>
            <Button variant="contained">
                <PDFDownloadLink
                    document={<PdfDocument data={data}/>}
                    fileName="report.pdf"
                    style={{
                        textDecoration: "none",
                        color: "#4a4a4a",
                    }}
                >
                    {({blob, url, loading, error}) =>
                        loading ? "Loading document..." : "Download Pdf"
                    }
                </PDFDownloadLink>
            </Button>

            <h2>Preview</h2>
            <PDFViewer>
                <PdfDocument/>
            </PDFViewer>

        </Fragment>

    );
}
