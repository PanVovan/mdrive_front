import React from 'react';
import {useSelector} from "react-redux";
import "./filelist.css"
import {FileViewSelector} from "./FileViewSelector";

export const FileList = () => {
    const files = useSelector(state => state.files)
    return (
        <div className="grid_container">
            {
                files?.map((file) => <FileViewSelector
                    key={file.id}
                    file={file}
                ></FileViewSelector>)
            }
        </div>
    )
}