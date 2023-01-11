import React from 'react'
import {KebabMenuProps } from './types'
import { MoreOutlined } from "@ant-design/icons";
import { PopUpItem,PopUp,PopUpContainer } from './elements'
import IconButton from '../IconButton';
import colors from '../../../constants/config/theme/colors';


const KebabMenu = ({onDelete,onUpdate}: KebabMenuProps) => {
    const content =(
        <PopUpContainer>
        <PopUpItem onClick={onUpdate}>
            Update
        </PopUpItem>
        <PopUpItem onClick={onDelete}>
            Delete
        </PopUpItem>
        </PopUpContainer>
    );
  return (
    <PopUp placement="left" arrowPointAtCenter trigger="click" content={content}>
        <IconButton bType={"iconButton"} bsize={"middle"} bShape={"square"} fontColor={colors.bluePrimary}>
        <MoreOutlined style={{"border": "1px solid transparent"}}/>
        </IconButton>
    </PopUp>
  )
}

export default KebabMenu