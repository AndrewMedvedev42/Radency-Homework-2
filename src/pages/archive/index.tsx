import { useSelector } from "react-redux";
import { ArchiveTable } from "../../components/archiveTable";

interface RootState {
    notes:[],
    stats:[]
}

export const ArchivePage:React.FC = () => {
    const {notes} = useSelector((state:RootState) => state);   
    return (
        <section>
            <ArchiveTable notes={notes}/>
        </section>
    )
}