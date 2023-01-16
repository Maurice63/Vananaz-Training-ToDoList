export type TextInputProps = {
    prefix?: React.ReactNode;
    disabled?: boolean;
    placeholder?: string;
    value?: string;
    onChange?: () => void;
    onPressEnter?: (e: any) => void;
    hidden?: boolean;
    allowClear?: boolean;
};