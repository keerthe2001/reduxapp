const deposit = (amount) =>{
    return (dispatch)=>{
        dispatch({
            type:'deposit',
            payload:amount
        })
    }
}
const withdraw = (amount) =>{
    return (dispatch)=>{
        dispatch({
            type:'withdraw',
            payload:amount
        })
    }
}