const NAME = {
    LOGIN: "login", // Đăng nhập 
    TRANSACTIONS: "transactions", // Giao dịch
    CALENDAR: "calendar", // Lịch đáo thẻ
    CUMTOMER: 'customer', // Khách hàng
    ACCOUNT_MANAGEMENT: 'account-management', // quản lý tài khoản
    STAFF: 'staff', // nhân viến
    STATISTICAL: 'statistical', // Thống kêD
    TODOS: 'todos', // Thống kêD
}
const ROUTES = {
    LOGIN: `/${NAME.LOGIN}`,
    TRANSACTIONS: `/${NAME.TRANSACTIONS}`,
    CALENDAR: `/${NAME.CALENDAR}`,
    CUMTOMER: `/${NAME.CUMTOMER}`,
    STAFF: `/${NAME.STAFF}`,
    ACCOUNT_MANAGEMENT: `/${NAME.ACCOUNT_MANAGEMENT}`,
    STATISTICAL: `/${NAME.STATISTICAL}`,
    TODOS: `/${NAME.TODOS}`,
}

export default ROUTES;