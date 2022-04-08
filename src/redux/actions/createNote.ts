interface LooseObject {
    [key: string]: any
}
const getMentionedDates = (text:string) => {
    const dayMonthYearRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
    return text.replace(/[^a-zA-Z0-9-/\ ]/g, "").split(" ").filter(item=>item.match(dayMonthYearRegex))
}

const createNote = (event:any) => async (dispatch:any) => {
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