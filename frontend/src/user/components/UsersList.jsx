import React from 'react'
import UserItem from './UserItem'
import Card from '../../shared/components/uiElements/Card'
import './UsersList.css'
const UsersList = (props) => {
  
  if (props.items.length == 0){
          return (
               <Card>
                   <h1>No users found</h1>
               </Card>
          );
    }
  else{
         return (
            <ul>
              {props.items.map(user=> {
                   return (
                           <UserItem 
                                key={user.id} 
                                id={user.id} 
                                image={user.image} 
                                name ={user.name} 
                                placeCount={user.places}
                            />
                   
                   );
              })}
            </ul>
         );
  }
  
}

export default UsersList