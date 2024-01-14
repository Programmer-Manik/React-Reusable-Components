import cn from "../../Utils/cn"

const Button = ({className, outline , variant}) => {

   const getVariant = (variant) => {
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
      <button className={cn(
          getVariant(variant),
         {'border border-purple-500 bg-opacity-10': outline,},
         className
      )}
      >
         click
      </button>
   )
}

export default Button