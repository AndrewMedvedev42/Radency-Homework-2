import { useEffect } from 'react';
import { useSelector, useDispatch} from "react-redux";
import getStats from "../../redux/actions/getStats"
import { NoteTable } from "../../components/noteTable";
import { StatsTable } from "../../components/statsTable";

import { RootState } from "../../interfaces";

export const MainPage:React.FC = () => {
    const dispatch = useDispatch()
    const {notes, stats} = useSelector((state:RootState) => state);   
    useEffect(()=>{
        dispatch(getStats(notes))
    },[notes])     
    return (
        <section>
            <NoteTable notes={notes} dispatch={dispatch}/>
            <StatsTable stats_list={stats}/>
        </section>
    )
}
