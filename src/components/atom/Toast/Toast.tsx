import { message as AntToast } from 'antd';
import { MessageContainer,GlobalStyle } from './elements';
import { ToastProps } from './types';

const Toast = (props: ToastProps) => {
    const {style,duration,message} = props
    return(<>
        {AntToast.config({
        transitionName: 'move-down',
        })}
        {
        AntToast.success({
            content: <MessageContainer>{message}</MessageContainer>,
            duration: duration,
            icon: " ",
            className: 'custom-class',
            style: {...style,
              color:"black",
              padding: "0px",
            },
          }    
        )}
        <GlobalStyle/>
        </>)
}

export default Toast