import React from "react";

export type TextInputProps = {
    prefix?: React.ReactNode;
    disabled?: boolean;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    hidden?: boolean;
    allowClear?: boolean;
    style?: React.CSSProperties;
};