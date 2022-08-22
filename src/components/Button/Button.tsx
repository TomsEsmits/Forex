import React, { memo } from "react";

interface ButtonProps {
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button:React.FC<React.PropsWithChildren<ButtonProps>> = ({handleClick}) => {
    return(
        <button className="button" type="button" onClick={handleClick}>Search</button>
    )
}

export default memo(Button);