import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import cn from "../../Utils/cn"

type Tref = HTMLButtonElement;

type TVariant = 'solid'| 'ghost' | 'outline'

type tButtonOptions = {
   variant?:TVariant
}

type TButton = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement> & tButtonOptions 

const Button = forwardRef<Tref,TButton >(({className, variant="solid", ...rest}, ref) => {
   const getVariant = (variant :TVariant) => {
      switch (variant) {
         case 'outline' :
            return 'btn-outline';
         case 'ghost':
            return 'btn-ghost';
         default :
         return 'btn'
      }
   }
   return (
      <button 
     
      {...rest}
      ref={ref}
      className={cn(getVariant(variant),className)}
      >
         click
      </button>
   )
})

export default Button