import { Inter } from "next/font/google";
import MeetupList from "@/components/meetups/MeetupList.js";

const inter = Inter({ subsets: ["latin"] });

const DUMMY_MEETUPS = [
	{
		id: "m1",
		title: "tai",
		image:
			"https://images.unsplash.com/photo-1716125581956-81ca1b3f6ad6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		address: "ciamis",
		description: "asik",
	},
	{
		id: "m2",
		title: "tai 2",
		image:
			"https://images.unsplash.com/photo-1716125581956-81ca1b3f6ad6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		address: "ciamis 2",
		description: "asik 2",
	},
];

export default function Home() {
	return (
		<>
			<MeetupList meetups={DUMMY_MEETUPS} />
		</>
	);
}
