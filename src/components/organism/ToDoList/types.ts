import { todoprops } from "../../../redux/features/ToDos";

export type ToDoListProps = {
    selectionMode?: boolean;
    UpdateCallback: (todo:todoprops) => void;
    searchedTodos?: todoprops[];
    search?: boolean;
    addToDo: () =>void;
}
