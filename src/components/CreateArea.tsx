import { FunctionComponent, useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

interface Note {
  title: string;
  content: string;
}

interface CreateAreaProps {
  onAdd: (newNote: Note) => void;
}

const CreateArea: FunctionComponent<CreateAreaProps> = (props) => {
  const [isExpanded, setExpended] = useState(false);
  // const [rowNumber, setRowNumber] = useState(1);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event: any) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event: any) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function expand() {
    // isExpanded ? setRowNumber(1) : setRowNumber(3);
    setExpended(!isExpanded);
    // console.log(isExpanded, rowNumber);
  }

  return (
    <div>
      <form className="create-note" onDoubleClick={expand}>
        {isExpanded ? (
          <>
            {" "}
            <input
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
            />
            <textarea
              name="content"
              onChange={handleChange}
              value={note.content}
              placeholder="Take a note..."
              rows={3}
            />{" "}
          </>
        ) : (
          <textarea
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            onClick={expand}
            rows={1}
          />
        )}

        <Zoom in={isExpanded}>
          <Fab color="primary" onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>

        {/* <button onClick={submitNote}>
          <AddIcon fontSize="large" />
        </button> */}
      </form>
    </div>
  );
};

export default CreateArea;
