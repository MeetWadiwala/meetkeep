import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

function Note(props) {
	const defaultProps = {
		bgcolor: "background.paper",
		borderColor: "text.primary",
		style: { width: "40px", height: "40px" },
	};

	const deleteNote = () => {
		props.deleteItem(props.id);
	};

	return (
		<>
			<div className="note-Main">
				<div className="note">
					<h1>{props.title}</h1>
					{/* <br/> */}
					<p>{props.content}</p>
					<button
						className="btn"
						borderRadius="50%"
						{...defaultProps}
						onClick={deleteNote}
					>
						<DeleteOutlineIcon className="deleteIcon" />
					</button>
				</div>
			</div>
		</>
	);
}

export default Note;
