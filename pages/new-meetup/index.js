import NewMeetupForm from "@/components/meetups/NewMeetupForm.js";
import React from "react";

export default function NewMeetupPage() {
	const addMeetupHandler = (value) => {
		console.log(value);
	};

	return (
		<>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</>
	);
}
