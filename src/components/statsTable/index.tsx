import {Link} from "react-router-dom";

type Props = {
    [key: string]: any;
};

export const StatsTable:React.FC<Props> = ({stats_list}) => {
    return (
        <section className="section">
            <table>
                <tbody>
                    <tr className="row main-row">
                        <th>Name</th>
                        <th>Active</th>
                        <th>Archived</th>
                    </tr>
                    {
                        stats_list.map((item:any)=>{
                            const {category, activeNotesCount, archivedNotesCount} = item
                            return (
                                <tr className="row">
                                    <th>{category}</th>
                                    <th>{activeNotesCount}</th>
                                    <th>{archivedNotesCount}</th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <section className="note-archive-section">
                <Link to='/archive' className="btn">See archive</Link>
            </section>
        </section>
    )
}