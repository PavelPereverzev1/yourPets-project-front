import React, { useEffect } from 'react';
import "./modal.css"
import { MdClose } from "react-icons/md";

export default function Modal({ active, setActive, children }) {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        setActive(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'visible';
    };
  }, [setActive]);
  return (
    
      <div className={active ? "modal active": "modal"} onClick={()=>setActive(false)}>
        <div  className={active ? "modal-content active": "modal-content"} onClick={e => e.stopPropagation()}>
          <button
                  className="modal-close-button"
                  onClick={()=>setActive(false)}
                >
                  <MdClose/>
          </button>
          {children}
        </div>
      </div>
    
  );
}
