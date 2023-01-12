export type IconButtonProps = {
    children: React.ReactNode,
    disabled?: boolean,
    bType: "iconButton" | "floatIconButton",
    bShape: "circle" | "square",
    fontColor: string;
    color?: string;
    bsize?: "small" | "middle" | "large",
    onClick?: () => void;
    onBlur?: () => void;
}