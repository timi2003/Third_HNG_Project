import React from "react";


const Button = ({children, variant = 'dark, ...props'}) => {
    const baseClasses = "px-6 py-2 rounded-lg transition-colors";
    const variantClasses = {
        dark: "bg-[#002633] hover-[#003346]",
        cyan: "bg-cyan-600 hover: bg-cyan-700"
    };

    return(
        <button className={`${baseClasses} ${variantClasses[variant] || ''}`} {...props}>
            {children}
        </button>
    );
};
export default Button;