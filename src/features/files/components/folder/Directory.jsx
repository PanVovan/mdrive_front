import React from 'react';
import DotButtonImage from "../../../../assets/3-vertical-dots-icon.svg";
import './directory.css'
import {getSizeString} from "../../utils/size";

const Directory = ({file, onClick}) => {
  return (
      <div className="file_card">
          <div className="file_header">
              <img className="folder_header_image" src={DotButtonImage} alt=""/>
              <h4 className="file_header_name"><b>{file.name}</b></h4>
              <button className="file_header_button" onClick={()=>onClick()}>
                  <img className="file_header_image" src={DotButtonImage} alt=""/>
              </button>
          </div>
          <div className="file_footer">
              <div className="file_footer_data">
                  <p>{getSizeString(file.size)}</p>
                  <p>{file.filecount}</p>
              </div>
          </div>
      </div>
  )
}
export default Directory