import { useSelector } from "react-redux";
import { ArchiveTable } from "../../components/archiveTable";

interface RootState {
    notes:[],
    stats:[]
}

type Props = {
    [key: string]: any;
};

export const ArchivePage:React.FC<Props> = ({dispatch}) => {
    const {notes} = useSelector((state:RootState) => state);   
    return (
        <section>
            <ArchiveTable notes={notes} dispatch={dispatch}/>
        </section>
    )
}