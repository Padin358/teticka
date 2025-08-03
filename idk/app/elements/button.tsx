import type { ButtonProps } from "~/types"

const Button = ({ textProp, hrefProp, classes }: ButtonProps) => {

    if (!classes) classes = "bg-cyan-600 p-3 rounded-xl text-xl font-semibold text-gray-50 hover:bg-cyan-700 hover:scale-105 transition duration-100"

    return <a className={classes} href={hrefProp}> {textProp} </a>
}

export default Button