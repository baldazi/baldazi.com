import React from "react"

export default function ProjectCard(props){
    return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
    <figure><img src={props.image} alt={props.alt||""} /></figure>
    <div className="card-body">
        <h2 className="card-title">props.title</h2>
        <p>name.description</p>*
        {props.children}
    {/*  <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
        </div> */}
  </div>
</div>)
}