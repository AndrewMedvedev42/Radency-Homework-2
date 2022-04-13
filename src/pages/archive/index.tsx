import {Link} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { NoteTable } from "../../components/noteTable";
import { LinkSection } from "../../components/linkSection";

import { RootState, NoteData } from "../../interfaces";
import { Props } from "../../types";

export const ArchivePage:React.FC<Props> = () => {
    const {notes} = useSelector((state:RootState) => state);   
    const dispatch = useDispatch()    
    return (
        <article>
            <h1 className="section_title">Archived Notes</h1>
            <NoteTable 
                names={["Name", "Created at", "Category", "Content", "Dates", "-", "-"]} 
                note_list={notes.filter((item:NoteData)=>item.archived === true)} 
                dispatch={dispatch}/>
            <LinkSection link_to="/" text_content="Go to main page"/>
        </article>
    )
}