import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import useTableUI from "./useTableUI";

function TableUI({nameAPI, columns, onShow, onEdit, onDelete, ...otherProps}) {
    const propsData = useTableUI({ ...otherProps});
    React.useEffect(() => {
        propsData.getList();
    }, []);
    return (
        <Table {...propsData} />
    );
}

TableUI.propTypes = {
    nameAPI: PropTypes.string,
    columns: PropTypes.array,
    onShow: PropTypes.func,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func
};

export default React.memo(TableUI);
