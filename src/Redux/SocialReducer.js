import {TypeConstant} from "./TypeConstant";

const initStat = {
    linkedin :'https://www.linkedin.com',
    twitter:'https://www.twitter.com',
    facebook:'https://www.facebook.com/',
    github:'https://www.github.com/'
}

const socialReducer = (state = initStat , action) => {
    switch (action.type) {
        case TypeConstant.Linkedin: return {...state, linkedin : action.payload}
        case TypeConstant.Twitter: return {...state, twitter:action.payload}
        case TypeConstant.Facebook: return {...state, facebook:action.payload}
        case TypeConstant.Github: return {...state, github :action.payload}

        default: return state;
    }
}

export default socialReducer;
