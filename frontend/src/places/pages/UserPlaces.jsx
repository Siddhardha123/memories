import React from 'react'
import PlaceList from '../components/PlaceList'
const Userplaces = () => {

   const DUMMY_PLACES = [
       {
         id:"p1",
         title : 'EmpireState building',
         description : "blah blah blah",
         imageUrl : 'https://www.history.com/news/10-surprising-facts-about-the-empire-state-building',
         address : '20w 31st Street NewYork',
         location : {
           lat : 38276431256935,
           long : 13495879837564,
             },
          creator : 'u1'
        },
      {
         id:"p2",
         title : 'EmpireState building',
         description : "blah blah blah",
         imageUrl : 'https://www.history.com/news/10-surprising-facts-about-the-empire-state-building',
         address : '20w 31st Street NewYork',
         location : {
           lat : 38276431256935,
           long : 13495879837564,
         },
         creator : 'u2'
      }

   ]
  return (
       <PlaceList items={DUMMY_PLACES}/>
  );
}

export default Userplaces