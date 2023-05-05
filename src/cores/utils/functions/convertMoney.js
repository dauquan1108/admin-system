/**
 * convertMoney: sử dụng để chuyển number đổi thành tiền ví dụ: 1000000 => 1,000,000
 * @param money {number}
 * @returns {string}
 */

const convertMoney = (money) => {
    return (money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
};

export default convertMoney;
