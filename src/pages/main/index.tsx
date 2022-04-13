import { useEffect } from 'react';
import { useSelector, useDispatch} from "react-redux";
import getStats from "../../redux/actions/getStats"
import { StatsTable } from "../../components/statsTable";

import { LinkSection } from "../../components/linkSection";
import { NoteTable } from "../../components/NoteTable";

import { RootState } from "../../interfaces";

export const MainPage:React.FC = () => {
    const dispatch = useDispatch()
    const {notes, stats} = useSelector((state:RootState) => state);   
    useEffect(()=>{
        dispatch(getStats(notes))
    },[notes])     
    return (
        <section>
            <article className="section">
                <h1 className="section_title">Your Notes</h1>
                <NoteTable 
                    names={["Name", "Created at", "Category", "Content", "Dates", "-", "-", "-"]} 
                    note_list={notes.filter((item:any)=>item.archived === false)} 
                    dispatch={dispatch}/>
                <LinkSection link_to="/create" text_content="Add note"/>
            </article>
            <article className="section">
                <h1 className="section_title">Note's Stats</h1>
                <StatsTable stats_list={stats}/>
                <LinkSection link_to="/archive" text_content="See archive"/>
            </article>
        </section>
    )
}
