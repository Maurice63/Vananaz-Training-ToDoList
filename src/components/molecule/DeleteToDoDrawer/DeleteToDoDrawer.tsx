import Button from '../../atom/Button'
import { DrawerButtonsContainer, Drawercontainer, DrawerContent, Drawermask, DrawerText } from './elements'
import { DeleteToDoDrawerProps } from './types'

const DeleteToDoDrawer = ({onYes,hidden,Hide}: DeleteToDoDrawerProps) => {
    const DoNothing = () =>{
        Hide();
    }
    const DoSomething = () =>{
        onYes()
        Hide();
    }
  return (
    <Drawercontainer className={hidden?"hide":" "}>
        <Drawermask/>
        <DrawerContent>
        <DrawerText>Delete to do?</DrawerText>
        <DrawerButtonsContainer>
            <Button bType={"secondary"} bsize={"middle"} onClick={DoNothing} label={"No"} preset/>
            <Button bType={"primary"} bsize={"middle"} onClick={DoSomething} label={"Yes"}/>
        </DrawerButtonsContainer>
        </DrawerContent>
    </Drawercontainer>
  )
}

export default DeleteToDoDrawer