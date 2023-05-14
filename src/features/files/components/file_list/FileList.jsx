import React from 'react';
import FileViewer from "./FileViewer";
import {useSelector} from "react-redux";

export const FileList = () => {
    const files = useSelector(state => state.files)
    return (
        <FileViewer files={files}></FileViewer>
    )
}