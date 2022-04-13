import { Dispatch } from 'redux'
import { getMentionedDates } from "../../modules";

import { NoteData } from "../../interfaces";

const editNote = (event:any, note_to_edit:NoteData) => async (dispatch:Dispatch) => {
    const {name, category, text_content, status} = event.target
        note_to_edit.name = name.value
        note_to_edit.archived = false
        note_to_edit.createdAt = `${new Date().toLocaleString('default', { month: 'long' })} ${new Date().getDate()}, ${new Date().getFullYear()}`
        note_to_edit.category = category.value
        note_to_edit.text_content = text_content.value
        note_to_edit.datesMentioned = getMentionedDates(text_content.value)
        
    dispatch({
            type:"EDIT_NOTE",
            payload:{
                note_id:note_to_edit.id,
                note_data: note_to_edit,
        }
    }) 
    
}
export default editNote