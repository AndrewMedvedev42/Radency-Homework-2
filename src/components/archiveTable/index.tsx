import { FaCheck } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';

import setArchiveStatus from "../../redux/actions/setArchiveStatus";
import deleteNote from "../../redux/actions/deleteNote";

import { NoteData } from "../../interfaces";
import { Props } from "../../types";

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
                    {notes.map((item:NoteData)=>{
                        const {id, name, createdAt, category, text_content, completed, archived} = item
                        if(archived){
                            return (
                                <tr className="row" key={id}>
                                    <th>{name}</th>
                                    <th>{createdAt}</th>
                                    <th>{category}</th>
                                    <th>{text_content}</th>
                                    <th>Dates</th>
                                    <th>{!completed ? <BsThreeDots size={ICON_SIZE} /> : <FaCheck size={ICON_SIZE}/>}</th>
                                    <th><button className="btn-warning" onClick={()=>{dispatch(setArchiveStatus(id))}} >Unarhcive</button></th>
                                    <th><button className="btn-danger" onClick={()=>{dispatch(deleteNote(id))}} >Delete</button></th>
                                </tr>
                            )
                        }
                    })}
                </tbody>
            </table>
        </section>
    )
}