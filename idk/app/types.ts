import type { ReactNode } from "react"

export type ButtonProps = {
    textProp: string
    hrefProp: string
    classes?: string
}

export type NavbarProps = {
    children: ReactNode
    classes?: string
}

export type TextProps = {
    classes?: string
    children: string
}

export type ImgProps = {
    classes?: string
    source: string
    alt: string
}