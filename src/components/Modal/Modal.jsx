import React from 'react';
import "./modal.css"
import { MdClose } from "react-icons/md";

export default function Modal({ active, setActive, children }) {
  return (
    
      <div className={active ? "modal active": "modal"} onClick={()=>setActive(false)}>
        <div  className={active ? "modal-content active": "modal-content"} onClick={e => e.stopPropagation()}>
          <button
                  className="modal-close-button"
                  onClick={()=>setActive(false)}
                >
                  <MdClose />
          </button>
          {children}
        </div>
      </div>
    
  );
}
