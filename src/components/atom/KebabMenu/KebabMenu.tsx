import { useRef, useState } from 'react'
import {KebabMenuProps } from './types'
import { MoreOutlined } from "@ant-design/icons";
import { PopUpItem,PopUp,PopUpContainer } from './elements'
import IconButton from '../IconButton';
import colors from '../../../constants/config/theme/colors';


const KebabMenu = ({onDelete,onUpdate,onOpen,onBlur}: KebabMenuProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const first = useRef<boolean>(true);
  const hide = () => {
    setOpen(false);
    if(onBlur){
      if(!first.current){
        onBlur();      
      }
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const onOpenPress = () => {
    if(onOpen){
      handleOpenChange(true);
      if(first.current){
        onOpen();
        first.current = false;
      }
    }
  }
  const onBlurPress = () => {
    setTimeout(()=>{hide(); first.current = true;},500)
    
  }

  const onDeletePress = () => {
    hide();
    if(onDelete){onDelete()}
  }
  return (
    <PopUp>
        <PopUpContainer className={open?"":"hide"}>
        <PopUpItem onClick={onUpdate}>
            Update
        </PopUpItem>
        <PopUpItem onClick={onDeletePress}>
            Delete
        </PopUpItem>
        </PopUpContainer>
        <IconButton 
        bType={"iconButton"} 
        bsize={"middle"} 
        bShape={"square"} 
        fontColor={open?colors.bluePrimary:colors.gray} 
        onClick={onOpenPress} 
        onBlur={onBlurPress}>
        <MoreOutlined style={{"border": "1px solid transparent",fontWeight:"700"}}/>
        </IconButton>
    </PopUp>
  )
}

export default KebabMenu