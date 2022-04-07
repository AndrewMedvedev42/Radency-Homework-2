interface StatsItem {
    category:string,
    activeNotesCount:number,
    archivedNotesCount:number
}

const getStats = (notes:[]) => async (dispatch:any) => {
    const notestats:any = []
    notes.map((item:any) => item.category)
        .filter((value:any, index:any, self:any) => self.indexOf(value) === index)
            .forEach((category:any)=>{
                let activeNotesCount = 0
                let archivedNotesCount = 0
                notes.filter((item:any)=>category == item.category)
                    .forEach((item:any)=>{
                        if (!item.completed) {
                            activeNotesCount++
                        }
                        if (item.archived) {
                            archivedNotesCount++
                        }
                    })
                    notestats.push({
                        category:category,
                        activeNotesCount:activeNotesCount,
                        archivedNotesCount:archivedNotesCount
                    })
                })
    dispatch({
            type:"SET_NOTES_STATS",
            payload:{
                stats: notestats,
        }
    })  
                
}

export default getStats