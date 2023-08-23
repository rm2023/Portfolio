import React from "react";
import "../css/resume.css"
import ResumePDF from "../../assets/RMresume.pdf";

export default function Resume() {
    return (
        
        <section id="resume">
            <div className="pdfContainer text-center">
                <iframe className="pdf" src={ResumePDF} title="resume" width="100%" height="100%"></iframe>
            </div>
        </section>
    );
}