import React from 'react';
import DotButtonImage from "../../../../assets/3-vertical-dots-icon.svg";
import FileIcon from "../../../../assets/text-document-svgrepo-com.svg";
import './file.css'
import {getSizeString} from "../../utils/size";
import {DropdownMenu} from "../../../../components/dropdown/Dropdown";
import {useDispatch, useSelector} from "react-redux";
import {downloadFile} from "../../services/files";
import {deleteFileAction} from "../actions";

const File = ({file}) => {

    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const fileView = useSelector(state => state.files.view)


    function downloadClickHandler(e) {
        e.stopPropagation()
        console.log("start_")
        downloadFile(file)
    }

    function deleteClickHandler(e) {
        e.stopPropagation()
        dispatch(deleteFileAction(file))
    }

    return (
        <div className="file_card">
            <div className="file_header">
                <h4 className="file_header_name"><b>{file.name}</b></h4>
                <DropdownMenu
                    trigger={<button className="file_header_button">
                        <img className="file_header_image" src={DotButtonImage} alt=""/>
                    </button>}
                    dropdowns={[{
                        text: "Скачать", onClick: (e) => downloadClickHandler(e)
                    }, {
                        text: "Переименовать", onClick: () => console.log("menu")
                    }, {
                        text: "Копировать", onClick: () => console.log("menu")
                    }, {
                        text: "Вырезать", onClick: () => console.log("menu")
                    }, {
                        text: "Вставить", onClick: () => console.log("menu")
                    }, {
                        text: "Удалить", onClick: (e) => deleteClickHandler(e)
                    }]}
                />
            </div>
            <div className="file_container">
                <img className="file_container_img" src={file.previewUrl == null ? FileIcon : file.previewUrl}
                     onError={({currentTarget}) => {
                         currentTarget.onerror = null
                         currentTarget.src = FileIcon
                         currentTarget.className = "file_container_img"
                     }} alt=""/>
            </div>
            <div className="file_footer">
                <p>{getSizeString(file.size)}</p>
            </div>
        </div>
    )
}

export default File