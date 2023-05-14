import {getFiles} from "../../services/files";
import {setFiles} from "../../reducers/fileReducer";

export function getFilesAction (dirId){
    return async dispatch => {
        getFiles(dirId).then(r => dispatch(setFiles(r)))
    }
}