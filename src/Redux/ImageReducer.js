import {TypeConstant} from "./TypeConstant";

const initStat = {
    image :"/ksu-identity.png",
}

const imageReducer = (state = initStat , action) => {
    if (action.type === TypeConstant.Image) {
      return { image : action.payload}
    }
    return state;
}

export default imageReducer;
