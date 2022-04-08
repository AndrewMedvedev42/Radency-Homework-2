import { Dispatch } from 'redux'

const setArchiveStatus = (id:string) => async (dispatch:Dispatch) => {
    console.log(id);
    
    dispatch({
            type:"SET_ARCHIVE_STATUS",
            payload:{
                id: id,
        }
    })         
}
export default setArchiveStatus