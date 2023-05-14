import React from 'react';
import DotButtonImage from "../../../../assets/3-vertical-dots-icon.svg";
import FileIcon from "../../../../assets/text-document-svgrepo-com.svg";
import './file.css'
import {getSizeString} from "../../utils/size";

const File = ({file, onClick}) => {
  return (
      <div className="file_card">
          <div className="file_header">
              <h4  className="file_header_name"><b>{file.name}</b></h4>
              <button className="file_header_button" onClick={()=>onClick()}>
                  <img className="file_header_image" src={DotButtonImage} alt=""/>
              </button>
          </div>
          <div className="file_container">
              <img className="file_container_img" src={ file.previewUrl == null ? FileIcon: file.previewUrl} onError= {({currentTarget}) => {
                  currentTarget.onerror = null
                  currentTarget.src = FileIcon
                  currentTarget.className= "file_container_img"
              }} alt=""/>
          </div>
          <div className="file_footer">
              <p>{getSizeString(file.size)}</p>
          </div>
      </div>
  )
}

export default File