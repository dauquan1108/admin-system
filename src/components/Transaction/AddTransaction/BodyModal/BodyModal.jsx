// lib
import React from 'react';
import classNames from "classnames";

// custom hooks
import useBodyModal from "./useBodyModal";

// components
import AutoCompleteCustom from "components/Screen/Statistical/ModalAddNew/AutoCompleteCustom";
import DatePickerComponent from "components/Shared/DatePickerComponent";
import SelectComponent from "components/Shared/SelectComponent";
import InputNumberComponent from "components/Shared/InputNumberComponent";
import InputComponentAccountName from "components/Shared/InputComponentAccountName";
import InputComponent from "components/Shared/InputComponent";
import InputTextAreaComponent from "components/Shared/InputTextAreaComponent";

// utils
import {typeName} from "components/Shared/Synthetic";

// styles
import styles from './styles/index.module.scss';

function BodyModal() {
    const {
        data,
        setData,
        isDisabled,
        setDisabled,
        onChangeTag,
        onDatePicker,
        onChangeInput,
        provinceDataType,
        optionsDevicePost,
        optionsPercentBank,
    } = useBodyModal();

    return(
        <React.Fragment>
            <div className={styles.wrap}>
                <div className={classNames(styles.wrapContent, styles._flex2, styles.contentLeft)}>
                    <span className={styles.titleText}>Tên thiết bị:</span>
                    <AutoCompleteCustom
                        isText
                        style={{ width: '100%' }}
                        setDisabled={setDisabled}
                        onChangeInput={onChangeInput}
                        typeName={typeName.devicePost}
                        optionsData={optionsDevicePost}
                        placeholder="Vui lòng nhập tên thiết bị..."
                    />
                </div>
                <div className={classNames(styles.wrapContent, styles._flex1, styles.contentRight)}>
                    <span className={styles.titleText}>Ngày làm:</span>
                    <DatePickerComponent
                        style={{width: '100%'}}
                        onDatePicker={onDatePicker}
                    />
                </div>
            </div>
            <div className={styles.wrap}>
                <div className={classNames(styles.wrapContent, styles._flex2, styles.contentLeft)}>
                    <span className={styles.titleText}>% Phí ngân hàng: </span>
                    <AutoCompleteCustom
                        data={data}
                        style={{ width: '100%' }}
                        setDisabled={setDisabled}
                        onChangeInput={onChangeInput}
                        typeName={typeName.percentBank}
                        optionsData={optionsPercentBank}
                        placeholder="Vui lòng nhập % phí ngân hàng..."
                    />
                </div>
                <div className={classNames(styles.wrapContent, styles._flex2)}>
                    <span className={styles.titleText}>% Phí thu khách:</span>
                    <AutoCompleteCustom
                        data={data}
                        style={{ width: '100%' }}
                        setDisabled={setDisabled}
                        onChangeInput={onChangeInput}
                        optionsData={optionsPercentBank}
                        typeName={typeName.percentCustomer}
                        placeholder="Vui lòng nhập % phí thu khách..."
                    />
                </div>
                <div className={classNames(styles.wrapContent, styles._flex1, styles.contentRight)}>
                    <span className={styles.titleText}>Hình thức:</span>
                    <SelectComponent
                        onSelect={onChangeTag}
                        data={provinceDataType}
                        style={{ width: '100%' }}
                    />
                </div>
            </div>
            <div className={styles.wrap}>
                <div className={classNames(styles.wrapContent, styles._flex1, styles.contentLeft)}>
                    <span className={styles.titleText}>Số tiền  làm cho khách:</span>
                    <InputNumberComponent
                        data={data}
                        typeName={typeName.money}
                        setDisabled={setDisabled}
                        onChangeInput={onChangeInput}
                        placeholder="Vui lòng nhập số tiền làm cho khách..."
                    />
                </div>

                <div className={classNames(styles.wrapContent, styles._flex1, styles.contentRight)}>
                    <span className={styles.titleText}>Hạn mức:</span>
                    <InputNumberComponent
                        data={data}
                        setDisabled={setDisabled}
                        onChangeInput={onChangeInput}
                        typeName={typeName.limitCard}
                        placeholder="Vui lòng nhập hạn mức..."
                    />
                </div>
            </div>
            <div className={styles.wrap}>
                <div className={classNames(styles.wrapContent, styles._flex1, styles.contentLeft)}>
                    <span className={styles.titleText}>Chủ thẻ:</span>
                    <InputComponentAccountName
                        data={data}
                        maxLength={100}
                        setDisabled={setDisabled}
                        placeholder="Tên chủ thẻ..."
                        typeName={typeName.accountName}
                        onChangeInput={onChangeInput}
                    />
                </div>

                <div className={classNames(styles.wrapContent, styles._flex1, styles.contentRight)}>
                    <samp className={styles.titleText}>Số thẻ là [4 số cuối của thẻ]:</samp>
                    <InputComponent
                        data={data}
                        maxLength={50}
                        placeholder="Mã số thẻ..."
                        setDisabled={setDisabled}
                        onChangeInput={onChangeInput}
                        typeName={typeName.cardNumber}
                    />
                </div>
            </div>
            <div>
                <span className={styles.titleText}>Note:</span>
                <InputTextAreaComponent
                    maxLength={250}
                    setDisabled={setDisabled}
                    typeName={typeName.extends}
                    onChangeInput={onChangeInput}
                    style={{ marginBottom: '25px' }}
                />
            </div>
        </React.Fragment>
    );
}

export default BodyModal;
