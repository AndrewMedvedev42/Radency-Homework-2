const setArchiveStatus = (id:string) => async (dispatch:any) => {
    console.log(id);
    
    dispatch({
            type:"SET_ARCHIVE_STATUS",
            payload:{
                id: id,
        }
    })         
}
export default setArchiveStatus