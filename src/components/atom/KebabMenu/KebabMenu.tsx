import React, { useState } from 'react'
import {KebabMenuProps } from './types'
import { MoreOutlined } from "@ant-design/icons";
import { PopUpItem,PopUp,PopUpContainer } from './elements'
import IconButton from '../IconButton';
import colors from '../../../constants/config/theme/colors';


const KebabMenu = ({onDelete,onUpdate,onOpen,onBlur}: KebabMenuProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
    const onDeletePress =()=>{
        hide();
        if(onDelete){onDelete()}
    }
    const content =(
        <PopUpContainer>
        <PopUpItem onClick={onUpdate}>
            Update
        </PopUpItem>
        <PopUpItem onClick={onDeletePress}>
            Delete
        </PopUpItem>
        </PopUpContainer>
    );
  return (
    <PopUp 
    placement="left" 
    arrowPointAtCenter 
    trigger="click" 
    open={open}
    onOpenChange={handleOpenChange} 
    content={content}>
        <IconButton bType={"iconButton"} bsize={"middle"} bShape={"square"} fontColor={colors.bluePrimary} onClick={onOpen} onBlur={onBlur}>
        <MoreOutlined style={{"border": "1px solid transparent"}}/>
        </IconButton>
    </PopUp>
  )
}

export default KebabMenu