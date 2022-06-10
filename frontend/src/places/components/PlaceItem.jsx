import React from 'react'
import './PlaceItem.css'
import Card from "../../shared/components/uiElements/Card";
const PlaceItem = (props) => {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={props.img} alt={props.title} />
        </div>
        <div className="place-item__info">
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div className="place-item__actions">
          <button>View Place on Map</button>
          <button>EDIT</button>
          <button>Delete</button>
        </div>
      </Card>
    </li>
  );
}

export default PlaceItem