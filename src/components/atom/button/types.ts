export type ButtonProps = {
    children: React.ReactNode,
    disabled?: boolean,
    type: "primary" | "secondary",
    color?: string;
    size?: "small" | "middle" | "large",
    preset?:"warning",
    onClick?: (e: any) => void;
}