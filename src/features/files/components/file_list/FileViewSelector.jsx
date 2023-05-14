import Directory from "../folder/Directory";
import File from "../file/File";
import React from "react";

export const FileViewSelector = ({file, onClickFolder, onClickFile}) => {
    if (file.type === "folder") {
        return <Directory key={file._id} file={file} onClick = {onClickFolder}/>
    } else {
        return <File key={file._id} file={file} onClick = {onClickFile}/>
    }
}