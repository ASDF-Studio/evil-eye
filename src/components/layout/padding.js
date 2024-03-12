export const ScreenPadding = ({ children, className }) => {
    return <div className={[
        `mx-[180px]`, className
    ].join(" ")}>{children}</div>
}