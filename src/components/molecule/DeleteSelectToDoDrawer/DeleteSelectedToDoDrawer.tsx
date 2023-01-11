
import colors from '../../../constants/config/theme/colors';
import { Drawercontainer, DrawerButton } from './elements'
import { DeleteSelectedToDoDrawerProps } from './types'

const DeleteToDoDrawer = ({onCompleteSelected,onDeleteSelected,onSelectAll,hidden,hide}: DeleteSelectedToDoDrawerProps) => {
    const completeSelected = () =>{
        onCompleteSelected();
        hide();
    }
    const deleteSelected = () =>{
        onDeleteSelected();
        hide();
    }
  return (
    <Drawercontainer className={hidden?"hide":" "}>
        <DrawerButton type={"default"} color={colors.black} onClick={onSelectAll}>Select All</DrawerButton>
        <DrawerButton type={"default"} color={colors.black} onClick={completeSelected}>Complete Selected</DrawerButton>
        <DrawerButton type={"default"} color={colors.redPrimary} onClick={deleteSelected}>Delete Selected</DrawerButton>
    </Drawercontainer>
  )
}

export default DeleteToDoDrawer