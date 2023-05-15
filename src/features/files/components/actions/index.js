import {deleteFile as deleteFileReq, getFiles, uploadFile} from "../../services/files";
import {addFile, deleteFile, setFiles} from "../../reducers/fileReducer";
import {addUploadFile, changeUploadFile, showUploader} from "../../reducers/uploadReducer";

export const getFilesAction = (dirId) => {
    return async dispatch => {
        getFiles(dirId).then(r => dispatch(setFiles(r)))
    }
}

export const uploadFileAction = (file, dirId) => {
    return async dispatch => {
        dispatch(showUploader())
        uploadFile(
            file,
            dirId,
            (ss) => dispatch(addUploadFile(ss)),
            (e) => dispatch(changeUploadFile(e))
        ).then((r) => dispatch(addFile(r)))
    }
}

export const deleteFileAction = (file) => {
    return async dispatch => {
        deleteFileReq(file).then(r => dispatch(deleteFile(r.id)))
    }
}