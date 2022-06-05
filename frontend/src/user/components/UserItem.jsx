import React from 'react'
import {Link} from 'react-router-dom'
import Avatar from '../../shared/components/uiElements/Avatar'
import Card from "../../shared/components/uiElements/Card";
import './UserItem.css'
const UserItem = (props) => {
  return (
    <li className="user-item">
        <Card className="user-item__content">
          <Link to={`/${props.userid}/pages`}>
            <div className="user-item__image">
              <Avatar image={props.image} alt={props.name} />
            </div>
            <div className="user-item__info">
              <h2>{props.name}</h2>
              <h3>
                {props.placeCount} {props.placceCount == 1 ? "Place" : "Places"}
              </h3>
            </div>
          </Link>
        </Card>
    </li>
  );
}

export default UserItem