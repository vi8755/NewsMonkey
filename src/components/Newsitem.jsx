import React from 'react'

export default function Newsitem(props) {

 

    const [title,description] = [props.title,props.description];
  return (

  <>
  <div className="card" style={{width: "18rem"}}>
  <img src="..." className="cardimgtop" alt="..."/>
  <div className="cardbody">
    <h5 className="cardtitle">{title}</h5>
    <p className="cardtext">{description}</p>
    <a href="/" className="btn btnprimary">Go somewhere</a>
  </div>
</div>
  </>
  )
}
