import { useSelector } from "react-redux";
import { RootState, NoteData } from "../interfaces";

export const useIdToFindNote = (note_id:string) => {
    const {notes} = useSelector((state:RootState) => state);  
    return notes.find((item:NoteData)=>item.id === note_id)
}