const deleteNote = (id:string) => async (dispatch:any) => {
    dispatch({
            type:"DELETE_NOTE",
            payload:{
                id: id,
        }
    })         
}

export default deleteNote