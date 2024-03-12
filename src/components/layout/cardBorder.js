export const CardBorder = ({ children, className }) => {
    return <div className={[
        `flex rounded-[32px]`, className
    ].join(" ")}>{children}</div>
}