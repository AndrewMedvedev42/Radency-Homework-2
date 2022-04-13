import { Dispatch } from 'redux'
import { getMentionedDates, generateId, setCreationDate } from "../../modules";

const createNote = (event:any) => async (dispatch:Dispatch) => {
    const {name, category, text_content} = event.target
    dispatch({
            type:"CREATE_NEW_NOTE",
            payload:{
                note_data: {
                    id:generateId(),
                    name:name.value,
                    archived:false,
                    createdAt:setCreationDate(),
                    category:category.value,
                    text_content:text_content.value,
                    datesMentioned:getMentionedDates(text_content.value)
                },
        }
    })    
}
export default createNote