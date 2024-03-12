
export const Flex = ({ children, className }) => {
    return <div className={[
        `flex`, className
    ].join(" ")}>{children}</div>
}

export const FlexColumn = ({ children, className }) => {
    return <div className={[
        `flex flex-col`, className
    ].join(" ")}> {children}</ div>
}

export const FlexCenter = ({ children, className }) => {
    return <div className={[
        `flex items-center justify-center`, className
    ].join(" ")}> {children}</ div>
}

export const FlexBetween = ({ children, className }) => {
    return <div className={[
        `flex items-center justify-between`, className
    ].join(" ")}> {children}</ div>
}

export const Pressable = ({ children, ...rest }) => {
    return <button {...rest}>{children}</button>
}