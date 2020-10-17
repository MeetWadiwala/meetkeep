import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

function CreateNote(props) {
	const [expand, setExpand] = useState(false);

	const defaultProps = {
		bgcolor: "background.paper",
		borderColor: "text.primary",
		m: 1,
		border: 1,
		style: { width: "0px", height: "55px" },
	};

	const [note, setNote] = useState({
		title: "",
		content: "",
	});

	const InputEvent = (event) => {
		const { name, value } = event.target;

		setNote((preValue) => {
			return {
				...preValue,
				[name]: value,
			};
		});
		console.log(note);
	};

	const addEvent = () => {
		props.passNote(note);
		setNote({
			title: "",
			content: "",
		});
	};

	const expandIt = () => {
		setExpand(true);
	};

	const shrinkIt = () => {
		setExpand(false);
	};

	return (
		<>
			<div className="main_note" onDoubleClick={shrinkIt}>
				<form>
					{expand ? (
						<input
							type="text"
							name="title"
							value={note.title}
							onChange={InputEvent}
							placeholder="Title"
							autoComplete="off"
						/>
					) : null}
					<br />
					<textarea
						rows=""
						column=""
						name="content"
						value={note.content}
						onChange={InputEvent}
						placeholder="Write a note..."
						onClick={expandIt}
					></textarea>

					{expand ? (
						<Button borderRadius="50%" {...defaultProps} onClick={addEvent}>
							<AddIcon className="plus_sign" />
						</Button>
					) : null}
				</form>
			</div>
		</>
	);
}

export default CreateNote;
