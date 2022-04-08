import { Dispatch } from 'redux'
import { NoteData, LooseObject } from "../../interfaces";


const getStats = (notes_list:[]) => async (dispatch:Dispatch) => {
    const noteStats:LooseObject = []

    notes_list.map((item:NoteData) => item.category)
        .filter((value:string, index:number, self:string[]) => self.indexOf(value) === index)
            .forEach((category:string)=>{
                let activeNotesCount = 0
                let archivedNotesCount = 0
                notes_list.filter((item:NoteData)=>category === item.category)
                .forEach((item:NoteData)=>{
                    !item.completed && activeNotesCount++
                    item.archived && archivedNotesCount++
                })
                noteStats.push({
                    category:category,
                    activeNotesCount:activeNotesCount,
                    archivedNotesCount:archivedNotesCount
                })
        })
    dispatch({
            type:"SET_NOTES_STATS",
            payload:{
                stats: noteStats,
        }
    })  
                
}

export default getStats