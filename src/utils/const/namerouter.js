const NAME = {
    LOGIN: "login", // Đăng nhập
    TRANSACTIONS: "transactions", // Giao dịch
    DAOTHE: "daothe", // Lịch đáo thẻ
    CUSTOMER: 'customer', // Khách hàng
    ACCOUNT_MANAGEMENT: 'account-management', // quản lý tài khoản
    STAFF: 'staff', // nhân viến
    DEBTS: 'debts',
    STATISTICAL: 'statistical', // Thống kê
    TODOS: 'todos', // Thống kê
}
const ROUTES = {
    LOGIN: `/${NAME.LOGIN}`,
    TRANSACTIONS: `/${NAME.TRANSACTIONS}`,
    DAOTHE: `/${NAME.DAOTHE}`,
    CUSTOMER: `/${NAME.CUSTOMER}`,
    STAFF: `/${NAME.STAFF}`,
    DEBTS: `/${NAME.DEBTS}`,
    ACCOUNT_MANAGEMENT: `/${NAME.ACCOUNT_MANAGEMENT}`,
    STATISTICAL: `/${NAME.STATISTICAL}`,
    TODOS: `/${NAME.TODOS}`,
}

export default ROUTES;
