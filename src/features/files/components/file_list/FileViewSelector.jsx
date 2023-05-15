import Directory from "../directory/Directory";
import File from "../file/File";
import React from "react";

export const FileViewSelector = ({file}) => {
    if (file.type === "folder") {
        console.log(file)
        return <Directory file={file}/>
    } else {
        return <File file={file}/>
    }
}