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
  const [isExpended, SetExpended] = useState(false);
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

  function expand(){

  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          onClick={expand}
          value={note.title}
          placeholder="Title"
        />
        
          <div>
            <textarea
              name="content"
              onChange={handleChange}
              value={note.content}
              placeholder="Take a note..."
              rows={3}
            />
<Zoom in={isExpended}></Zoom>
            <Fab color="primary" aria-label="add" onClick={submitNote}>
              <AddIcon />
            </Fab>
          </div>
        </Zoom>
        {/* <button onClick={submitNote}>
          <AddIcon fontSize="large" />
        </button> */}
      </form>
    </div>
  );
};

export default CreateArea;
