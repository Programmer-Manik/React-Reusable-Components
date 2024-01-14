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


const CloseButton = () => {
   const {onClose} = useContext(ModalContext)
   return <button onClick={onClose}>close button</button>
};
Modal.CloseButton = CloseButton ;

export default Modal;