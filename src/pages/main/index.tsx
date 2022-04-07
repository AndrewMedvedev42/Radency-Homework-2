import { useEffect } from 'react';
import { useSelector, useDispatch} from "react-redux";
import getStats from "../../redux/actions/getStats"
import { NoteTable } from "../../components/noteTable";
import { StatsTable } from "../../components/statsTable";

interface RootState {
    notes:[],
    stats:[]
}

export const MainPage:React.FC = () => {
    const dispatch = useDispatch()
    const {notes, stats} = useSelector((state:RootState) => state);   
    useEffect(()=>{
        dispatch(getStats(notes))
    },[notes])     
    return (
        <section>
            <NoteTable notes={notes}/>
            <StatsTable stats_list={stats}/>
        </section>
    )
}
