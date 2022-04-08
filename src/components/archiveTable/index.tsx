import { FaCheck } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';

import setArchiveStatus from "../../redux/actions/setArchiveStatus";
import deleteNote from "../../redux/actions/deleteNote";

type Props = {
    [key: string]: any;
};

interface noteData {
    id:string,
    name:string,
    createdAt:string,
    category:string,
    text:string,
    completed:boolean
    archived:boolean
}

export const ArchiveTable:React.FC<Props> = ({notes, dispatch}) => {
    const ICON_SIZE = 24
    return (
        <section className="section">
            <table>
                <tbody>
                    <tr className="row main-row">
                        <th>Name</th>
                        <th>Created</th>
                        <th>Category</th>
                        <th className="text-slot">Content</th>
                        <th>Dates</th>
                        <th>Status</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {notes.map((item:noteData)=>{
                        const {id, name, createdAt, category, text, completed, archived} = item
                        if(archived){
                            return (
                                <tr className="row" key={id}>
                                    <th>{name}</th>
                                    <th>{createdAt}</th>
                                    <th>{category}</th>
                                    <th>{text}</th>
                                    <th>Dates</th>
                                    <th>{!completed ? <BsThreeDots size={ICON_SIZE} /> : <FaCheck size={ICON_SIZE}/>}</th>
                                    <th><button className="btn btn-warning" onClick={()=>{dispatch(setArchiveStatus(id))}} >Unarhcive</button></th>
                                    <th><button className="btn btn-danger" onClick={()=>{dispatch(deleteNote(id))}} >Delete</button></th>
                                </tr>
                            )
                        }
                    })}
                </tbody>
            </table>
        </section>
    )
}