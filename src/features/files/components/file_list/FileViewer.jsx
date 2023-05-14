import React from 'react';
import "./filelist.css"
import {FileViewSelector} from "./FileViewSelector";
const FileViewer = ({files}) => {
    return (
        <div className="grid_container">
            {files.map((file) => <FileViewSelector key={file._id} file={file}></FileViewSelector>)}
        </div>
    );
};
export default FileViewer
