export type ToDoItemProps = {
    value:string;
    onUpdate?: () => void;
    onDelete?: () => void;
    onSelect: () => void;
    selectionMode?: boolean;
    deleteDrawer?:boolean;
    selected?: boolean;
    completed?: boolean;
    onTextClick: () => void;
}