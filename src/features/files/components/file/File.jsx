import React from 'react';
import DotButtonImage from "../../../../assets/3-vertical-dots-icon.svg";
import FileIcon from "../../../../assets/text-document-svgrepo-com.svg";
import './file.css'
import {getSizeString} from "../../utils/size";
import {DropdownMenu} from "../../../../components/dropdown/Dropdown";

const File = ({file}) => {
  return (
      <div className="file_card">
          <div className="file_header">
              <h4  className="file_header_name"><b>{file.name}</b></h4>
              <DropdownMenu
                  trigger={<button className="file_header_button">
                      <img className="file_header_image" src={DotButtonImage} alt=""/>
                  </button>}
                  dropdowns={[{
                      text: "Скачать", onClick: () => console.log("menu")
                  }, {
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