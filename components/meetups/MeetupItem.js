import { useRouter } from "next/router.js";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem({ image, title, address } = props) {
	const router = useRouter();
	const showDetails = () => {
		router.push("/");
	};

	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.image}>
					<img src={image} alt={title} />
				</div>
				<div className={classes.content}>
					<h3>{title}</h3>
					<address>{address}</address>
				</div>
				<div className={classes.actions}>
					<button onClick={showDetails}>Show Details</button>
				</div>
			</Card>
		</li>
	);
}

export default MeetupItem;
