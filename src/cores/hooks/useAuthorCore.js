import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { message } from 'antd'; // Import antd message component

// utils
import ACTION_TYPE from 'cores/utils/constants/ACTION_TYPE';

export default function useAuthorCore(path = '/') {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function onSuccess() {
        navigate(path);
    };

    function onFail(status) {
        switch (status) {
            case 401:
                message.error('Tài khoản mật khẩu không đúng');
                break;
            default:
                message.error('Lỗi đăng nhập! Vui lòng thử lại.');
        }
    };

    function handleLogin(email = '', password = '') {
        dispatch({
            type: ACTION_TYPE.LOGIN,
            payload: {
                config: {
                    data: {
                        email,
                        password,
                    }
                },
                callback: [onSuccess, onFail]
            }
        });
    }
    
    function handleRegister(email = '', password = '', confirmPassword = '') {
        dispatch({
            type: ACTION_TYPE.REGISTER,
            payload: {
                config: {
                    data: {
                        email,
                        password,
                        confirmPassword,
                    }
                },
                callback: [onSuccess, onFail]
            }
        });
    }
    
    function handleCheckLogin(onSuccess = () => null, onFail = () => null) {
        dispatch({
            type: ACTION_TYPE.CHECK_LOGIN,
            payload: {
                callback: [onSuccess, onFail]
            }
        });
    }
    
    return {
        handleLogin,
        handleCheckLogin,
    };
}