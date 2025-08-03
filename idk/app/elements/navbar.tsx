import type { NavbarProps } from "~/types"

const Navbar = ({children, classes}: NavbarProps) => {
    
    if (!classes) classes = "flex flex-row flex-wrap justify-center gap-3 m-5"

    return <div className={classes}>
        {children}
    </div>
}

export default Navbar