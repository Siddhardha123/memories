import React from 'react'
import UserItem from './UserItem'
import './UsersList.css'
const UsersList = (props) => {
  
  if (props.items.length == 0){
          return (
               <div>
                   <h1>No users found</h1>
               </div>
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