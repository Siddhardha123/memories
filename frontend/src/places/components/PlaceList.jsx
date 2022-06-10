import React from 'react'
import './PlaceList.css'
import Card from '../../shared/components/uiElements/Card'
import { Link } from 'react-router-dom'
import PlaceItem from './PlaceItem'
const PlaceList = (props) => {

    if (props.items.length === 0) {
        return <div className='place-list center'>
            <Card>
                <h2>No places fount may be create one?</h2>
                <button>Share Place</button>
            </Card>
        </div>
    }
    else {
        return (
            <ul className='place-list'>
                {props.tems.map(place => <PlaceItem key={place.id} id={place.id} image={place.imgUrl} title={place.title} description={place.description} address={place.address} creatorId={place.creatorId} coordinates={props.coordinates} />)}
            </ul>
    );
  }
}

export default PlaceList