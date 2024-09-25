import { FunctionComponent } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

interface NoteProps {

    key:number
    id:number
    title:string
    content: string
    onDelete: (id:Number)=>void

}

const Note: FunctionComponent<NoteProps> = (props) => {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><DeleteIcon /></button>
    </div>
  );
};

export default Note;
