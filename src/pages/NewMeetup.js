import NewMeetupForm from "../components/meetups/NewMeetupForm";


function NewMeetupPage() {
    /*firebase automagically creates the meetups collection if it doesn't exist.
    the fetch function is built into JavaScript and defaults to GET. */
    function addMeetupHandler(meetupData) {
        fetch('https://max-next-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        );
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
}

export default NewMeetupPage;