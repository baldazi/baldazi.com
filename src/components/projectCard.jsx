import React from "react"

export default function ProjectCard(props){
    return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
    <figure><img src={props.image} alt={props.alt||""} /></figure>
    <div className="card-body items-center text-center">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
        {props.children}
        {/*  <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
        </div> */}
        {props.usages &&
        <div className="flex">
            {props.usages.map(it => <div className={it.type}>{it.text}</div>)}
        </div>
        }
  </div>
</div>)
}