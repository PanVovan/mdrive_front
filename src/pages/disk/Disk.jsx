import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getFilesAction, uploadFileAction} from "../../features/files/components/actions";
import './disk.css'
import {FileList} from "../../features/files/components/file_list/FileList";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {setCurrentDir} from "../../features/files/reducers/fileReducer";
import Uploader from "../../features/files/components/uploader/Uploader";
import {store} from "../../reducers";

const Disk = () => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const dirStack = useSelector(state => state.files.dirStack)
    const [dragEnter, setDragEnter] = useState(false)


    useEffect(() => {
        dispatch(getFilesAction(currentDir))
    }, [currentDir, dispatch])

    function backClickHandler() {
        const backDirId = dirStack?.pop()
        dispatch(setCurrentDir(backDirId))
    }

    function dragEnterHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(true)
    }

    function dragLeaveHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(false)
    }

    function dropHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        let files = [...event.dataTransfer.files]
        files.forEach(file => dispatch(uploadFileAction(file, currentDir)))
        setDragEnter(false)
    }

    // if(loader) {
    //     return (
    //         <div className="loader">
    //             <div className="lds-dual-ring"></div>
    //         </div>
    //     )
    // }

    function fileUploadHandler(event) {
        const files = [...event.target.files]
        files.forEach(file => dispatch(uploadFileAction(file, currentDir)))
    }

    return (!dragEnter ?
        <div className="disk" onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler}
                              onDragOver={dragEnterHandler}>
            <div className="disk__btns">
                <button className="disk__back" onClick={() => backClickHandler()}>Назад</button>
                {/*<button className="disk__create" onClick={() => showPopupHandler()}>Создать папку</button>*/}
                <div className="disk__upload">
                    <label htmlFor="disk__upload-input" className="disk__upload-label">Загрузить файл</label>
                    <input multiple={true} onChange={(event) => fileUploadHandler(event)} type="file"
                           id="disk__upload-input" className="disk__upload-input"/>
                </div>
            </div>
            <FileList/>
            {/*<Popup/>*/}
            <Uploader/>
        </div> : <div className="drop-area" onDrop={dropHandler} onDragEnter={dragEnterHandler}
                      onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
            Перетащите файлы сюда
        </div>)
};

export default Disk;

const Wrapper = () => (<Provider store={store}>
        <BrowserRouter>
            <Disk>

            </Disk>
        </BrowserRouter>
    </Provider>);