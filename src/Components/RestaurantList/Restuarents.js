import React from 'react'
import image from './Asserts/pizza.jpg'
import './rList.css';
const Restuarents = (props) => {
  return (
    <div className="col-md-3">

    <div className="restaurents text-center">
    <div className="overflow">
        <img src={`data:image/png;base64,${props.Resto.res_img}`}  style={{'max-width': '50vh',
    'max-height': '100px'}} alt="image" className="card-img-top"/>
    </div>
    <div className="card-body text-dark">
        <h4 classname="card-title">{props.Resto.res_name} </h4>
        <p className="card-text text-secondary">
        {props.Resto.res_name} Delivery Fee . 15-20 min
        </p>
        <a href={`/restaurant/${props.Resto._id}`} className="btn btn-outline-success">Order now</a>
    </div>
</div>
</div>


  )
}

export default Restuarents

