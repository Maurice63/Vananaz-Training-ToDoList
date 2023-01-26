import { message as AntToast } from 'antd';
import { ResetGlobalStyles } from '../../../constants/config/reset';
import { MessageContainer } from './elements';
import { ToastProps } from './types';

const Toast = ({style,duration,message}: ToastProps) => {
    return(<>
    <ResetGlobalStyles/>
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
        
        </>)
}

export default Toast