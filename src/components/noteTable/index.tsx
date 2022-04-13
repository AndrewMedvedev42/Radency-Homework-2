import {Link} from "react-router-dom";

import { AiFillDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";

import setArchiveStatus from "../../redux/actions/setArchiveStatus";
import deleteNote from "../../redux/actions/deleteNote";

import { Props } from "../../types";

export const NoteTable:React.FC<Props> = ({names, note_list, dispatch}) => {
    const ICON_SIZE = 25
    return (
        <table>
            <tbody>
                <tr className="row main-row">
                    {
                        names.map((item:any)=>{
                            return(
                                <th className={item === "Content" ? "text-slot":"main-slot"}>{item}</th>
                            )
                        })
                    }
                </tr>
                {
                    note_list.map((item:any)=>{
                        const {id, name, createdAt, category, text_content, archived, datesMentioned} = item
                                return (
                                    <tr>
                                    <th>{name}</th>
                                        <th>{createdAt}</th>
                                        <th>{category}</th>
                                        <th>{text_content}</th>
                                        <th>{datesMentioned.join(", ")}</th>
                                        {!archived && <th><Link to={`/edit/${id}`} className="btn btn-secondary"><MdModeEdit size={ICON_SIZE}/></Link></th>}
                                        <th>
                                            <button 
                                                className="btn-warning" 
                                                onClick={()=>{dispatch(setArchiveStatus(id))}}
                                                    >{archived ? <BiArchiveOut size={ICON_SIZE}/> : <BiArchiveIn size={ICON_SIZE}/>}</button>
                                        </th>
                                        <th><button className="btn-danger" onClick={()=>{dispatch(deleteNote(id))}} >{<AiFillDelete size={ICON_SIZE}/>}</button></th>
                                </tr>
                                )
                            
                    })
                }
            </tbody>
        </table>
    )
}