const State = {
    notes:[
            {id:"id-hg43jh-543bnm", name:"note name", createdAt:"date", category:"category", text:"lorem ipsum", datesMentioned:[], completed:false, archived:false},
            {id:"id-mn978n-nbm32kl", name:"note name", createdAt:"date", category:"category", text:"lorem ipsum", datesMentioned:[], completed:true, archived:false},
            {id:"id-pzb32a-543bnm", name:"note name", createdAt:"date", category:"category", text:"lorem ipsum", datesMentioned:[], completed:false, archived:false},
            {id:"id-fds789-543bnm", name:"note name", createdAt:"date", category:"category", text:"lorem ipsum", datesMentioned:[], completed:false, archived:false},
            {id:"id-09xzc3-543bnm", name:"note name", createdAt:"date", category:"task", text:"lorem ipsum", datesMentioned:[], completed:true, archived:true},
            {id:"id-nmb876-543bnm", name:"note name", createdAt:"date", category:"category", text:"lorem ipsum", datesMentioned:[], completed:false, archived:false},
            {id:"id-mn87v1-543bnm", name:"note name", createdAt:"date", category:"category", text:"lorem ipsum", datesMentioned:[], completed:false, archived:false},
    ],
    stats:[]
}

export default function rootReducer (state=State, action:any){
    switch (action.type){
        case "SET_NOTES_STATS":
            return {...state, stats:action.payload.stats}
        default:
            return {...state}
    }
}