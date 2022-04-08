export interface RootState {
    notes:[],
    stats:StatsItem[]
}

export interface LooseObject {
    [key: string]: any
}

export interface NoteData {
    id:string,
    name:string,
    createdAt:string,
    category:string,
    text_content:string,
    completed:boolean
    archived:boolean
    datesMentioned:string[]
}

export interface StatsItem {
    category:string,
    activeNotesCount:number,
    archivedNotesCount:number
}