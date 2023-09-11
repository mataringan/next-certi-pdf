"use client";

import { useState } from "react";
import {
    PDFDownloadLink,
    PDFViewer,
} from "@react-pdf/renderer/lib/react-pdf.browser.es.js";
import Certificate from "@/components/Certificate";

const Home = () => {
    const [name, setName] = useState("Jamal");
    const [kelas, setKelas] = useState("Javascript");

    const saveBlobToDevice = (blob, fileName) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    };

    return (
        <div className="bg-blue-300 h-full">
            <h1>Certificate G-MOOC 4D</h1>
            {/* <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            /> */}
            <div style={{ width: "100%", height: "80vh" }}>
                <PDFViewer width="100%" height="100%">
                    <Certificate name={name} kelas={kelas} />
                </PDFViewer>
            </div>
            <PDFDownloadLink
                document={<Certificate name={name} kelas={kelas} />}
                // fileName="Jamal Certificate.pdf"
            >
                {({ blob, url, loading, error }) => {
                    if (loading) {
                        return "Loading document...";
                    } else if (error) {
                        return `Error: ${error}`;
                    } else if (blob) {
                        // auto download
                        saveBlobToDevice(blob, `${kelas} Certificate.pdf`);
                        return null;
                    }
                }}
            </PDFDownloadLink>
        </div>
    );
};

export default Home;
