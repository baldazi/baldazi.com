import React from 'react';
import { AboutCard } from '../components';
function About() {
    return (
        <div className="min-h-screen md:max-w-[60%] mx-auto">
            {/* scholarship*/}
            <AboutCard
            title = "Education"
            contents = {[
                {title:2018, content:"MPSI/MP"},
                {title:2020, content:"BSc - Computer Sc, Year 1"},
                {title:2021, content:"BSc - Computer Sc, Year 2"},
                {title:2023, content:"MSc - Computer Sc"}
            ]}
            />

            {/* Skills*/}
            <AboutCard
            title = "Skills"
            contents = {[
                {title:"Web", content:"React, Node.js"},
                {title:"Mobile", content:"Native Kotlin, jetpack compose, .net-Maui"},
                {title:"Systeme & Network", content:"Linux, TCP/IP"},
                {title:"Others", content:"Git & Github"}
            ]}
            />
        
        </div>
    );
}

export default About;