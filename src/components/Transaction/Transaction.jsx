// lib
import React from 'react';

// components
import TableUI from "../../design/TableUI/TableUI";
import styles from "../Screen/Statistical/Styles/index.module.scss";
import ModalAddNew from "../Screen/Statistical/ModalAddNew";
import SelectOption from "../Screen/Statistical/SelectOption";
import OpenChart from '../Screen/Statistical/OpenChart';
// import AddTransaction from "./AddTransaction"; //  Sử dụng cách của QuanDX và sẽ maintain vào base sau

function Transaction() {
    return (
        <div className={styles.wrapInvoice}>
            <div className={styles.invoiceHeader}>
                <div className={styles.contentLeft}>
                    <ModalAddNew />
                    {/* Tạm thời ẩn AddTransaction đi vì dùng cách của QuanDX */}
                    {/* <AddTransaction /> */}

                    {/* Tạm thời ẩn SelectOption vì chưa có kịch bản */}
                    {/* <SelectOption /> */}
                </div>
                {/* Tạm thời ẩn đi */}
                {/* <div className={styles.contentRight}>*/}
                {/*    <OpenChart />*/}
                {/* </div> */}
            </div>
            <TableUI />
        </div>
    );
}

export default Transaction;
