
import colors from '../../../constants/config/theme/colors';
import { Drawercontainer, DrawerButton } from './elements'
import { DeleteSelectedToDoDrawerProps } from './types'

const DeleteSelectedToDoDrawer = ({onCompleteSelected,onDeleteSelected,onSelectAll,hidden,hide,allSelected}: DeleteSelectedToDoDrawerProps) => {
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
        <DrawerButton color={colors.black} onClick={onSelectAll}>{allSelected?"Unselect All":"Select All"}</DrawerButton>
        <DrawerButton color={colors.black} onClick={completeSelected}>Complete Selected</DrawerButton>
        <DrawerButton color={colors.redPrimary} onClick={deleteSelected}>Delete Selected</DrawerButton>
    </Drawercontainer>
  )
}

export default DeleteSelectedToDoDrawer