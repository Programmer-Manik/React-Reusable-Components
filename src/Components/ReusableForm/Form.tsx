import { createContext } from "react";
import cn from "../../Utils/cn";

export const FormElementContext = createContext<{double:boolean} | null>(null);
export const Form = ({children,onSubmit,double}) => {
   return (
      <FormElementContext.Provider value={{double}}>
     <form 
     onSubmit={onSubmit}
     className={cn("border border-red-300 rounded-lg shadow-sm  p-5 mx-auto", {
      "max-w-5xl": double,
      "max-w-md": !double,
    })}
     >
      {children}
     </form>
     </FormElementContext.Provider>
   );
};

