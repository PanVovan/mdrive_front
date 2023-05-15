import React from 'react';
import DotButtonImage from "../../../../assets/3-vertical-dots-icon.svg";
import FolderImage from "../../../../assets/folder.png";
import '../file/file.css'
import {getSizeString} from "../../utils/size";
import {useDispatch, useSelector} from "react-redux";
import {pushToStack, setCurrentDir} from "../../reducers/fileReducer";
import {DropdownMenu} from "../../../../components/dropdown/Dropdown";

const Directory = ({file}) => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)

    function openDirHandler(file) {
        dispatch(pushToStack(currentDir))
        dispatch(setCurrentDir(file.id))
    }

    return (
        <div className="file_card">
            <div className="file_header">
                <div className="file_header__box">
                    <img className="folder_header_image" src={FolderImage} alt=""/>
                    <h4 className="file_header_name"><b>{file.name}</b></h4>
                </div>
                <DropdownMenu
                    trigger={<button className="file_header_button">
                        <img className="file_header_image" src={DotButtonImage} alt=""/>
                    </button>}
                    dropdowns={[{
                        text: "Переименовать", onClick: () => console.log("menu")
                    }, {
                        text: "Копировать", onClick: () => console.log("menu")
                    }, {
                        text: "Вырезать", onClick: () => console.log("menu")
                    }, {
                        text: "Вставить", onClick: () => console.log("menu")
                    }, {
                        text: "Удалить", onClick: () => console.log("menu")
                    }]}
                />
            </div>
            <div className="file_footer" onClick={() => openDirHandler(file)}>
                <div className="file_footer_data">
                    <p>{getSizeString(file.size)}</p>
                    <p>{file.filecount} файлов</p>
                </div>
            </div>
        </div>)
}
export default Directory