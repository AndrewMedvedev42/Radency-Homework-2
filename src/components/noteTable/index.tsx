import {Link} from "react-router-dom";
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
    text_content:string,
    completed:boolean
    archived:boolean
    datesMentioned:[string]
}

export const NoteTable:React.FC<Props> = ({notes, dispatch}) => {
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
                        <th></th>
                    </tr>
                    {notes.map((item:noteData)=>{
                        const {id, name, createdAt, category, text_content, completed, archived, datesMentioned} = item
                        if(!archived){
                            return (
                                <tr className="row" key={id}>
                                    <th>{name}</th>
                                    <th>{createdAt}</th>
                                    <th>{category}</th>
                                    <th>{text_content}</th>
                                    <th>{datesMentioned.join(", ")}</th>
                                    <th>{!completed ? <BsThreeDots size={ICON_SIZE}/> : <FaCheck size={ICON_SIZE}/>}</th>
                                    <th><Link to={`/edit/${id}`} className="btn">Edit</Link></th>
                                    <th><button className="btn btn-warning" onClick={()=>{dispatch(setArchiveStatus(id))}} >Arhcive</button></th>
                                    <th><button className="btn btn-danger" onClick={()=>{dispatch(deleteNote(id))}} >Delete</button></th>
                                </tr>
                            )
                        }
                    })}
                </tbody>
            </table>
            <section className="add-note-section">
                <Link to='/create' className="btn">Add note</Link>
            </section>
        </section>
    )
}