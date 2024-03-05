import React from "react";
import AboutTimeline from "./aboutTimeline";

export default function AboutCard(props){
    return (
        <div className="card card-normal bg-base-100">
            <div className="card-body items-center">
                <div className="divider divider-accent divider-center md:w-[80%] mx-auto card-title">
                    <span className="badge badge-lg badge-accent">{props.title}</span>
                </div>
                <AboutTimeline contents = {props.contents}/>
            </div>
        </div>
    )
}