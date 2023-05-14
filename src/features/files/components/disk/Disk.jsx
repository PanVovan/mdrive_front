import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getFilesAction} from "../actions";
import './disk.css'
import {FileList} from "../file_list/FileList";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import fileReducer from "../../reducers/fileReducer";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";

const Disk = () => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.currentDir)
    const dirStack = useSelector(state => state.dirStack)

    useEffect(() => {
        console.log(currentDir)
        dispatch(getFilesAction(currentDir))
    }, [currentDir, dispatch])
    
    return (<FileList></FileList>)

};

export default Disk;



const Wrapper = () => (
    <Provider store={createStore(fileReducer, composeWithDevTools(applyMiddleware(thunk)))}>
        <BrowserRouter>
            <Disk>

            </Disk>
        </BrowserRouter>
    </Provider>
);