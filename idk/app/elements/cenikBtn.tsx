import type { cenikBtnProps } from "~/types"

const CenikBtn = ({children, idProp, classes, clickProp}: cenikBtnProps) => {
  return (
    <button className={classes} id={idProp} onClick={clickProp}>{children}</button>
  )
}

export default CenikBtn