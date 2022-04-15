import { Dispatch } from 'redux'
const deleteNote = (id:string) => async (dispatch:Dispatch) => {
    dispatch({
            type:"DELETE_NOTE",
            payload:{
                id: id,
        }
    })         
}

export default deleteNote