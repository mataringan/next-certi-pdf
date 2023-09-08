"use client";

import { useState } from "react";
import {
    PDFDownloadLink,
    PDFViewer,
} from "@react-pdf/renderer/lib/react-pdf.browser.es.js";
import Certificate from "@/components/Certificate";

const Home = () => {
    const [name, setName] = useState("Jamal");

    return (
        <div className="bg-blue-300 h-full">
            <h1>Certificate</h1>
            {/* <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            /> */}
            <div style={{ width: "100%", height: "80vh" }}>
                <PDFViewer width="100%" height="100%">
                    <Certificate name={name} />
                </PDFViewer>
            </div>
            <PDFDownloadLink
                document={<Certificate name={name} />}
                fileName={`${name} Certificate.pdf`}
            >
                {({ blob, url, loading, error }) =>
                    loading ? "Loading document..." : "Download Certificate!"
                }
            </PDFDownloadLink>
        </div>
    );
};

export default Home;
