export type DeleteSelectedToDoDrawerProps ={
    hidden: boolean,
    hide: ()=> void,
    onSelectAll: ()=> void,
    onCompleteSelected: ()=> void,
    onDeleteSelected: ()=> void,
    allSelected?: boolean;
    }