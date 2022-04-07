import {Link} from "react-router-dom";
import { FaCheck } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
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

export const NoteTable:React.FC<Props> = ({notes}) => {
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
                        const {id, name, createdAt, category, text, completed, archived} = item
                        if(!archived){
                            return (
                                <tr className="row" key={id}>
                                    <th>{name}</th>
                                    <th>{createdAt}</th>
                                    <th>{category}</th>
                                    <th>{text}</th>
                                    <th>Dates</th>
                                    <th>{!completed ? <BsThreeDots/> : <FaCheck/>}</th>
                                    <th><Link to={`/edit/${id}`} className="btn">Edit</Link></th>
                                    <th><button className="btn btn-warning">Arhcive</button></th>
                                    <th><button className="btn btn-danger">Delete</button></th>
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