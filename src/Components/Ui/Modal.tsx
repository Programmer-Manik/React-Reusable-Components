// import React from 'react';
import { createPortal } from "react-dom";
import cn from "../../Utils/cn";
import { Children } from "react";

const Modal = ({isOpen, onClose, children}) => {
   return createPortal(
      <div>
            <div className={ cn ("fixed flex justify-center items-center inset-0 bg-gray-500/70 invisible z-[99]",{
                visible: isOpen,
            })}>
              <div className="rounded-md bg-white w-full max-w-sm">
               {children}
              </div>
            </div>
      </div>,
      document.getElementById('portal') as Element
   );
};

export default Modal;