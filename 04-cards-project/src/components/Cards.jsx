import React from 'react'
import { Bookmark } from 'lucide-react'

const Cards = (props) => {
  return (
    <div className="card">
       <div>
         <div className="top">
          <img src={props.brandLogo} alt="logo" />
          <button>Save <Bookmark size={13}/> </button>
        </div>

        <div className="center">
          <div>
            <h3>{props.companyName}</h3> 
            <span>{props.datePosted}</span>
          </div>
          <h2>{props.post}</h2>
          <div>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
       </div>

        <div className="bottom">
          <div>
            <h3>{props.pay}</h3>
               <p>{props.location}</p>
            </div>
            <button>Apply now</button>
        </div>
      </div>

  )
}

export default Cards