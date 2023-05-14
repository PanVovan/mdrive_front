import React, {useEffect, useRef, useState} from 'react';
//import "./dropdown.css"

export const DropdownItem = (props) => {
    return (
        <li className='dropdownItem' onClick={props.onClick}>
            <a> {props.text} </a>
        </li>
    );
}

export const DropdownMenu = ({trigger, dropdowns}) => {
    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handler);


        return () => {
            document.removeEventListener("mousedown", handler);
        }

    });
    return (
        <div className='menu-container' ref={menuRef}>
            <div onClick={() => {
                setOpen(!open)
            }}>
                {trigger}
            </div>
            <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
                <ul>
                    {dropdowns?.map((file, index) => <DropdownItem
                        key={index}
                        text={file.text}
                        onClick={() => {
                            file.onClick()
                        }}
                    ></DropdownItem>)}
                </ul>
            </div>
        </div>
    );
};