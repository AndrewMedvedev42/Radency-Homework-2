import {useLocation} from "react-router-dom"
import editNote from "../../redux/actions/editNote";
import { useSelector } from "react-redux";

interface RootState {
    notes:[],
    stats:[]
}


type Props = {
    [key: string]: any;
};

export const EditNoteForm:React.FC<Props> = ({dispatch}) => {
    const NOTE_ID = useLocation().pathname.split('/')[2]
    const {notes} = useSelector((state:RootState) => state);  

    const noteToEdit:any = notes.find((item:any)=>item.id === NOTE_ID)

    return (
        <section className="section">
            <form action="/" onSubmit={(event)=>{dispatch(editNote(event, noteToEdit))}}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Name" defaultValue={noteToEdit.name} required/>
                <label htmlFor="category">Category</label>
                <select id="category" defaultValue={noteToEdit.category} name="category">
                    <option value="Task">Task</option>
                    <option value="Random Thought">Random Thought</option>
                    <option value="Idea">Idea</option>
                </select>
                <label htmlFor="text-content"></label>
                <textarea name="text_content" id="text-content" placeholder="Text" required>{noteToEdit.text_content}</textarea>
                <label htmlFor="note-status">Completed</label>
                <input id="note-status" type="checkbox" name="status" defaultChecked={noteToEdit.completed}/>
                <input type="submit" value="Edit note"/>
            </form>
        </section>
    )
}