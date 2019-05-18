import {TypeConstant} from "./TypeConstant";

const initStat = {
    name : '',
    email:'',
    jobTitle:'',
    department:'',
    mobile:'',
    website:'',

}

const reducer = (state = initStat , action) => {
    switch (action.type) {
        case TypeConstant.Name: return {...state, name : action.payload}
        case TypeConstant.Email: return {...state, email:action.payload}
        case TypeConstant.JobTitle: return {...state, jobTitle:action.payload}
        case TypeConstant.Department: return {...state, department :action.payload}
        case TypeConstant.Mobile: return {...state, mobile:action.payload}
        case TypeConstant.WebSite: return {...state, website:action.payload}
        default: return state;
    }


}

export default reducer
