import {Link} from "react-router-dom";

import { StatsItem } from "../../interfaces";
import { Props } from "../../types";

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
                        stats_list.map((item:StatsItem, index:number)=>{
                            const {category, activeNotesCount, archivedNotesCount} = item
                            return (
                                <tr key={index} className="row">
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
                <Link to='/archive' className="btn btn-primary">See archive</Link>
            </section>
        </section>
    )
}