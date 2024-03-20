export const ScreenPadding = ({ children, className }) => {
    return <div className={[
        `mx-0 5xl:mx-[180px]`  , className
    ].join(" ")}>{children}</div>
}