interface LooseObject {
    [key: string]: any
}
const getMentionedDates = (text:string) => {
    const dayMonthYearRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
    return text.replace(/[^a-zA-Z0-9-/\ ]/g, "").split(" ").filter(item=>item.match(dayMonthYearRegex))
}

const editNote = (event:any, note_to_edit:any) => async (dispatch:any) => {
    const {name, category, text_content, status} = event.target
        note_to_edit.name = name.value
        note_to_edit.archived = false
        note_to_edit.completed = status.checked
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