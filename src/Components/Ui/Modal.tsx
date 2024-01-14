// import React from 'react';
import { createPortal } from "react-dom";
import cn from "../../Utils/cn";
import {  MouseEvent, createContext, useContext, useRef } from "react";

const ModalContext = createContext(null);

const Modal = ({isOpen, onClose, children}) => {
  
   const containerRef = useRef<HTMLDivElement>(null);
  
   const handelOutsideClose = (e:MouseEvent) => {
     if(!containerRef.current?.contains(e.target as Node)){
      onClose();
     }
   }

   return createPortal(
     <ModalContext.Provider value={{onClose}}>
       <div>
         <div className={ cn ("fixed flex justify-center items-center inset-0 bg-gray-500/70 invisible z-[99]",{
                visible: isOpen,
            })}
               onClick={handelOutsideClose}
            >
            <div ref={containerRef} className="rounded-md bg-white w-full max-w-sm">
               {children}
            </div>
         </div>
      </div>,
     </ModalContext.Provider>,
      document.getElementById('portal') as Element
   );
};


const CloseButton = ({children}) => {
   const {onClose} = useContext(ModalContext)
   return <button onClick={onClose}>
     {children ? (children): (
       <svg className="size-5 bg-red-400 text-white p-0.5 rounded-md" fill="none" strokeWidth={4} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
       <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
     )}
 </button>
};

const Header = ({children}) => {
   return <div className="flex  justify-end">{children}</div>
}

Modal.Header = Header;
Modal.CloseButton = CloseButton ;

export default Modal;