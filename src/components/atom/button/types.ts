export type ButtonProps = {
    label: string,
    disabled?: boolean,
    bType: "primary" | "secondary",
    bsize?: "small" | "middle" | "large",
    preset?: boolean,
    onClick?: () => void;
    style?: React.CSSProperties
}