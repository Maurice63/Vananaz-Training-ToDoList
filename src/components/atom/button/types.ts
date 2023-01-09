export type ButtonProps = {
    label: string,
    disabled?: boolean,
    bType: "primary" | "secondary",
    color?: string;
    bsize?: "small" | "middle" | "large",
    preset?: boolean,
    onClick?: (e: any) => void;
}