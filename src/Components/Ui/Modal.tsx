// import React from 'react';
import { createPortal } from "react-dom";
import cn from "../../Utils/cn";
import {  MouseEvent, ReactNode, createContext, useContext, useRef } from "react";



const ModalContext = createContext<TModalContext  | null>(null);

type TModalContext = {
   onClose : () => void;
}

type TModal = {
   isOpen: boolean;
   onClose: () => void;
   children: ReactNode;
};

type TClose = {
   children ?: ReactNode;
}

type THeader = TClose

const Modal = ({isOpen, onClose, children}:TModal) => {
  
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
            <div ref={containerRef} className="rounded-md p-3 bg-white w-full max-w-sm">
               {children}
            </div>
         </div>
      </div>,
     </ModalContext.Provider>,
      document.getElementById('portal') as Element
   );
};


const CloseButton = ({children}: TClose) => {
   const {onClose} = useContext(ModalContext) as TModalContext
   return <button onClick={onClose}>
     {children ? (children): (
       <svg className="size-5 bg-red-400 text-white  p-0.5 rounded-md" fill="none" strokeWidth={4} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
       <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
     )}
 </button>
};

const Header = ({children}:THeader) => {
   return <div className="flex  justify-end mb-1">{children}</div>
}

Modal.Header = Header;
Modal.CloseButton = CloseButton ;

export default Modal;