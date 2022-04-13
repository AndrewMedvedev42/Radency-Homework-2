import { State } from "./defaultState";

export default function rootReducer (state=State, action:any){
    switch (action.type){
        case "CREATE_NEW_NOTE":
            return {...state, notes: [...state.notes, action.payload.note_data]}
        case "EDIT_NOTE":
            return {...state, notes:state.notes.map((item)=>item.id === action.payload.note_id ? action.payload.note_data : item)}
        case "SET_ARCHIVE_STATUS":
            return {...state, 
                    notes:state.notes.map(
                    (item) => item.id === action.payload.id ? {...item, archived: !item.archived}: item)}
        case "DELETE_NOTE":
            return {...state, notes:state.notes.filter((item)=> item.id !== action.payload.id)}
        case "SET_NOTES_STATS":
            return {...state, stats:action.payload.stats}
        default:
            return {...state}
    }
}