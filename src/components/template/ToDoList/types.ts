
export type ToDoListTHeaderProps = {
    toLogIn: () => void;
    back?: boolean;
    type?: "search"|"select"|"add"|"update"|"home";
    toBack: () =>void;
}
export type ToDoListInputProps = {
    hide: boolean;
    value: string;
    type?: "search"|"select"|"add"|"update"|"home";
    onClick?: () => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}