const State = {
    notes:[
            {id:"id-hg43jh-543bnm", name:"Note name", createdAt:"April 1, 2999", category:"Task", text_content:"Lorem ipsum dolor sit amet, 1/2/9090 consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", datesMentioned:["1/2/9090"], completed:false, archived:false},
            {id:"id-mn978n-nbm32kl", name:"Note name", createdAt:"April 1, 2999", category:"Task", text_content:"Lorem ipsum dolor sit amet, 1/2/9090 consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", datesMentioned:["1/2/9090"], completed:true, archived:false},
            {id:"id-pzb32a-543bnm", name:"Note name", createdAt:"April 1, 2999", category:"Task", text_content:"Lorem ipsum dolor sit amet, 1/2/9090 consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", datesMentioned:["1/2/9090"], completed:false, archived:false},
            {id:"id-fds789-543bnm", name:"Note name", createdAt:"April 1, 2999", category:"Random Thought", text_content:"Lorem ipsum dolor sit amet, 1/2/9090 consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", datesMentioned:["1/2/9090"], completed:false, archived:false},
            {id:"id-09xzc3-543bnm", name:"Note name", createdAt:"April 1, 2999", category:"Random Thought", text_content:"Lorem ipsum dolor sit amet, 1/2/9090 consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", datesMentioned:["1/2/9090"], completed:true, archived:true},
            {id:"id-nmb876-543bnm", name:"Note name", createdAt:"April 1, 2999", category:"Idea", text_content:"Lorem ipsum dolor sit amet, 1/2/9090 consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", datesMentioned:["1/2/9090"], completed:false, archived:false},
            {id:"id-mn87v1-543bnm", name:"Note name", createdAt:"April 1, 2999", category:"Idea", text_content:"Lorem ipsum dolor sit amet, 1/2/9090 consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", datesMentioned:["1/2/9090"], completed:false, archived:false},
    ],
    stats:[]
}

export default function rootReducer (state=State, action:any){
    switch (action.type){
        case "CREATE_NEW_NOTE":
            return {...state, notes: [...state.notes, action.payload.note_data]}
        case "EDIT_NOTE":
            return {...state, notes:state.notes.map((item)=>item.id === action.payload.note_id ? action.payload.note_data : item)}
        case "SET_ARCHIVE_STATUS":
            return {...state, 
                    notes:state.notes.map(
                    (item) => item.id === action.payload.id ? {...item, archived: !item.archived}: item)}
        case "DELETE_NOTE":
            return {...state, notes:state.notes.filter((item)=> item.id !== action.payload.id)}
        case "SET_NOTES_STATS":
            return {...state, stats:action.payload.stats}
        default:
            return {...state}
    }
}