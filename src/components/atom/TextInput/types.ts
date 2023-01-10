export type TextInputProps = {
    prefix?: React.ReactNode;
    disabled?: boolean;
    placeholder?: string;
    value?: string;
    onChange?: () => void;
    onPressEnter?: () => void;
    hidden?: boolean;
    allowClear?: boolean;
};