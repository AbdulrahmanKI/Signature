import {TypeConstant} from "./TypeConstant";

export const Name = (name) => {

    return {
        type: TypeConstant.Name,
        payload:name
    }

}
export const Email = (email) => {
    return {
        type: TypeConstant.Email,
        payload: email
    }
}
export const JobTitle = (jobTitle)=>{
    return {
        type: TypeConstant.JobTitle,
        payload: jobTitle
    }
}
export const Department = (department)=>{
    return {
        type: TypeConstant.Department,
        payload: department
    }
}
export const Mobile = (mobile)=>{
    return {
        type: TypeConstant.Mobile,
        payload: mobile
    }
}
export const Website = (website)=>{
    return {
        type: TypeConstant.WebSite,
        payload: website
    }
}

export const ImageLogo = (image)=>{
    return {
        type: TypeConstant.Image,
        payload: image
    }
}
