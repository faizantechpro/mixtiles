const guestInfo =  ( state = {name: "", email:""}, action) => {
    switch(action.type){
        case 'NAME' : 
        return state.name 

        case 'EMAIL':
        return state.email 

        default: 
        return state;
    }
}

export default guestInfo;