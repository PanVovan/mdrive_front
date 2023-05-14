import Directory from "../folder/Directory";
import File from "../file/File";
import React from "react";

export const FileViewSelector = ({file}) => {
    if (file.type === "folder") {
        return <Directory file={file}/>
    } else {
        return <File file={file} />
    }
}