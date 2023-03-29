/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 3/16/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

// Component
import UpdatePassword from "./UpdatePassword/UpdatePassword";
import PersonalInformation from "./PersonalInformation/PersonalInformation";

// Base
import ModalBase from "../../../../Base/Modal";

// Style
import styles from './Styles/index.module.scss';

const item = ['Chỉnh sửa avatar', 'Chỉnh sửa thông tin cá nhân', 'Cập nhật mật khẩu'];

function UpdateUserInformation(props) {
	const { open, onCloneModal } = props;

	const [active, setActive] = React.useState(item[0]);

	const onClickTab = (tabItem) => {
		setActive(tabItem);
	};

	const showTitle = () => {
		if (active === item[1]) {
			return item[1];
		}
		if (active === item[2]) {
			return item[2];
		}
		return item[0];
	};

	const showContent = () => {
		if (active === item[1]) {
			return <PersonalInformation />;
		}
		if (active === item[2]) {
			return <UpdatePassword />;
		}
		return <PersonalInformation />;
	};

    return(
	    <ModalBase
		    open={open}
		    width={600}
		    onCancel={onCloneModal}
		    title={showTitle()}
		    footer={null}
	    >
		    <div className={styles.wrapBtn}>
				<span className={classNames(styles.text, styles.flex_1, active === item[0] && styles.textActive)} onClick={() => onClickTab(item[0])}>
					{item[0]}
				</span>
			    <span className={classNames(styles.text, styles.flex_2, styles.itemCenter, active === item[1] && styles.textActive)} onClick={() => onClickTab(item[1])}>
					{item[1]}
				</span>
			    <span className={classNames(styles.text, styles.flex_1, active === item[2] && styles.textActive)} onClick={() => onClickTab(item[2])}>
					{item[2]}
				</span>
		    </div>
		    <div className={styles.content}>
			    {
				    showContent()
			    }
		    </div>
	    </ModalBase>
    );
}

UpdateUserInformation.propTypes = {
	open: PropTypes.bool,
	onCloneModal: PropTypes.func,
};

UpdateUserInformation.defaultProps = {
	PropTypes: false,
	onCloneModal: () => null,
};

export default React.memo(UpdateUserInformation);
