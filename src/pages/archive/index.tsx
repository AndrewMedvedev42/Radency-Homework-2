import { useSelector } from "react-redux";
import { ArchiveTable } from "../../components/archiveTable";

import { RootState } from "../../interfaces";
import { Props } from "../../types";

export const ArchivePage:React.FC<Props> = ({dispatch}) => {
    const {notes} = useSelector((state:RootState) => state);   
    return (
        <section>
            <ArchiveTable notes={notes} dispatch={dispatch}/>
        </section>
    )
}