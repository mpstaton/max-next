//useEffect is a hook that allows you to run code under certain conditions.
import { useState, useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage() {
  /* you cana have as many "states" as you want or need */
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  /* useEffect hook gets two arguments: a function and an array of dependencies */  
  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://max-next-default-rtdb.firebaseio.com/meetups.json'
    )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      /* because we use the map method the data needs to be converted from
      an object to an array */ 
      const meetups = [];

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };

        meetups.push(meetup);

      }
      setIsLoading(false);
      setLoadedMeetups(data);
    });
  }, []);

  /* functions must immediately return JSX*/


    if (isLoading) {
      return (
        <section>
          <p>Loading...</p>
        </section>
      )
    }

    return (
    <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={loadedMeetups} />
    </section>
    );
}

export default AllMeetupsPage;