import {useLocation} from "react-router-dom"
import editNote from "../../redux/actions/editNote";
import { useIdToFindNote } from "../../hooks/useIdToFindNote";

import { NoteData } from "../../interfaces";

import { Props } from "../../types";

export const EditNoteForm:React.FC<Props> = ({dispatch}) => {
    const noteToEdit:NoteData = useIdToFindNote(useLocation().pathname.split('/')[2])!
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
                <input type="submit" className="btn-blank" value="Edit note"/>
            </form>
        </section>
    )
}