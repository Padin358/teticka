import type { ImgProps } from "~/types"

const Image = ({classes, source, alt}: ImgProps) => {
    return <img src={source} alt={alt} className={classes} />
}

export default Image