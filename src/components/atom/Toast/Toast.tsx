import { message as AntToast } from 'antd';
import { MessageContainer,GlobalStyle } from './elements';
import { ToastProps } from './types';

const Toast = ({style,duration,message}: ToastProps) => {
    return(<>
        {AntToast.config({
        transitionName: 'move-down',
        })}
        {
        AntToast.success({
            content: <MessageContainer>{message}</MessageContainer>,
            duration: duration || 3,
            icon: " ",
            className: 'custom-class',
            style: {
              ...style,
              color:"black",
              padding: "0px",
            },
          }    
        )}
        <GlobalStyle/>
        </>)
}

export default Toast