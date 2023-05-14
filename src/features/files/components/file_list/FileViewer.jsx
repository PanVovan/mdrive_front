import React from 'react';
import "./filelist.css"
import {FileViewSelector} from "./FileViewSelector";
const FileViewer = ({files}) => {
    const onClickFile = () => {
        console.log("menu")
    }

    const onClickFolder = () => {
        console.log("menu")
    }

    return (
        <div className="grid_container">
            {files.map((file) => <FileViewSelector
                key={file._id}
                file={file}
                onClickFile={()=>onClickFile()}
                onClickFolder={() => onClickFolder()}
            ></FileViewSelector>)}
        </div>
    );
};
export default FileViewer
