import Button from '../../atom/Button'
import { DrawerButtonsContainer, Drawercontainer, DrawerContent, Drawermask, DrawerText } from './elements'
import { DeleteToDoDrawerProps } from './types'

const DeleteToDoDrawer = ({onYes,hidden,hide}: DeleteToDoDrawerProps) => {
    const cancel = () =>{
        //No
        hide();
    }
    const proceed = () =>{
        onYes()
        hide();
    }
  return (
    <Drawercontainer className={hidden?"hide":" "}>
        <Drawermask/>
        <DrawerContent>
        <DrawerText>Delete to do?</DrawerText>
        <DrawerButtonsContainer>
            <Button bType={"secondary"} bsize={"middle"} onClick={cancel} style={{width: "80px"}} label={"No"} preset/>
            <Button bType={"primary"} bsize={"middle"} onClick={proceed} style={{width: "80px"}} label={"Yes"}/>
        </DrawerButtonsContainer>
        </DrawerContent>
    </Drawercontainer>
  )
}

export default DeleteToDoDrawer