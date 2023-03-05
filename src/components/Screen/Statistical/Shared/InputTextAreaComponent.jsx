/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 2/26/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import { Input } from "antd";
import PropTypes from 'prop-types';

// Style
import styles from "./Styles/index.module.scss";

const { TextArea } = Input;

function InputTextAreaComponent(props) {
	const {
		style,
		typeName,
		maxLength,
		setDisabled,
		onChangeInput
	} = props;

	const [checkError, setCheckError] = React.useState('');
	const refValueTextArea = React.useRef(null);

	const onChange = (e) => {
		const { value } = e.target;
		refValueTextArea.current = value;
		const countValueNew = value.length;
		if (countValueNew === maxLength) {
			setDisabled && setDisabled(true);
			setCheckError(`Dữ liệu đã vượt quá số lượng cho phép nhập là: ${maxLength}`);
		}
	};

	const onfocusTextArea = () => {
		setCheckError('');
	};

	const onBlurInput = () => {
		const valueTextAreaNew = refValueTextArea.current;
		if (!valueTextAreaNew) {
			setDisabled && setDisabled(true);
			setCheckError('Dữ liệu không được để trống, vui lòng nhập.')
		} else  {
			onChangeInput(valueTextAreaNew, typeName);
		}
	};

    return(
        <React.Fragment>
	        <TextArea
		        rows={4}
		        showCount
		        onChange={onChange}
		        onBlur={onBlurInput}
		        style={{ ...style }}
		        maxLength={maxLength}
		        onFocus={onfocusTextArea}
		        status={checkError && "error"}
	        />
	        {
		        checkError && <span className={styles.textError}>{checkError}</span>
	        }
        </React.Fragment>
    );
}

InputTextAreaComponent.propTypes = {
	style: PropTypes.object,
	typeName: PropTypes.string,
	maxLength: PropTypes.number,
	setDisabled: PropTypes.func,
	onChangeInput: PropTypes.func,
};

InputTextAreaComponent.defaultProps = {
	style: {},
};

export default React.memo(InputTextAreaComponent);
