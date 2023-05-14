import {getFiles, uploadFile} from "../../services/files";
import {setFiles} from "../../reducers/fileReducer";
import {addUploadFile, hideUploader, showUploader} from "../../reducers/uploadReducer";

export const getFilesAction = (dirId) =>{
    return async dispatch => {
        getFiles(dirId).then(r => dispatch(setFiles(r)))
    }
}

export const uploadFileAction = (file, dirId) => {
    return async dispatch => {
        dispatch(showUploader())
        uploadFile(file, dirId).then(() => dispatch(addUploadFile(file)))
    }
}