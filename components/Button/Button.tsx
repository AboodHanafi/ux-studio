import { PropsWithChildren } from "react"

interface PropsType extends PropsWithChildren {
    secondary? : boolean;
    className? : string;
}
const Button : React.FC <PropsType> = ({children,secondary = false ,className}) => {
  return (
    <button className={` rounded-lg py-[5px] px-[9px] sm:py-[10px] sm:px-[18px] shadow-button ${secondary  ?  `bg-white text-black` : `bg-black text-white border border-white`} ${className}`} >
    {children}
    </button>
  )
}

export default Button