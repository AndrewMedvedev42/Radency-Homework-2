import { Dispatch } from 'redux'
import { getMentionedDates } from "../../modules";

import { LooseObject } from "../../interfaces";

const createNote = (event:any) => async (dispatch:Dispatch) => {
    const newNoteData:LooseObject = {}
    const noteId = "id" + Math.random().toString(16).slice(2)
    const {name, category, text_content, status} = event.target
        newNoteData.id = noteId
        newNoteData.name = name.value
        newNoteData.archived = false
        newNoteData.completed = status.checked
        newNoteData.createdAt = `${new Date().toLocaleString('default', { month: 'long' })} ${new Date().getDate()}, ${new Date().getFullYear()}`
        newNoteData.category = category.value
        newNoteData.text_content = text_content.value
        newNoteData.datesMentioned = getMentionedDates(text_content.value)
    dispatch({
            type:"CREATE_NEW_NOTE",
            payload:{
                note_data: newNoteData,
        }
    })    
}
export default createNote