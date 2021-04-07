import { createContext, useState } from 'react';

const FavoritesContext = createContext({
   favorties: [],
   totalFavorites: 0
});

function FavoritesContextProvider(props) {
   const [userFavorites, setUserFavorites] = useState([]);

   function addFavoriteHandler(favoriteMeetup) {
      setUserFavorites((prevUserFavorites) => {
         return prevUserFavorites.concat(favoriteMeetup);
      });
   }

   function removeFavoriteHandler(meetupId) {
      setUserFavorites(prevUserFavorites => {
         return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
      });
   }

   function itemIsFavoriteHandler(meetupId) {
      return userFavorites.some(meetup => meetup.id === meetupId);
   }

   const context = {
      favorites: userFavorites,
      totalFavorites: userFavorites.length,
   };

   /* the .Provider is a property of the context library.
   it wraps anything within it with the context. Here, because the context will
   be called from the App.js parent component, the children will be every other 
   component within the app. */

   return <FavoritesContext.Provider value={context}>
      {props.children}
   </FavoritesContext.Provider>
}
