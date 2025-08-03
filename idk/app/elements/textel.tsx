import type { TextProps } from "~/types"

const TextEl = ({classes, children}: TextProps) => {
    return <p className={classes}>{children}</p>
}

export default TextEl