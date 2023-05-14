import Directory from "../directory/Directory";
import File from "../file/File";
import React from "react";

export const FileViewSelector = ({file}) => {
    if (file.type === "directory") {
        return <Directory file={file}/>
    } else {
        return <File file={file}/>
    }
}