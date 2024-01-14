import  { ReactNode } from 'react';

const Container = ({children}:{children:ReactNode}) => {
   return (
      <div className=" h-full w-full max-w-[1250px] p-5 mx-auto bg-primary-gradient">
         {children}
         
      </div>
   );
};

export default Container;