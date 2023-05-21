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
import { useSelector } from "react-redux";

// Base
import { flagInput } from "../../../Base/Regex/FlagInput";
import validationName from "../../../Base/Regex/validationName";
import validationNumberDecimal from "../../../Base/Regex/validationNumberDecimal";

// Selector
import selectorDevice from "../../../../cores/selector/selectorDevice";

// Shared
import { typeName } from "../Shared/Synthetic";
import { convertTimeStamp } from "../Shared/Time";

const provinceDataType = ['Đáo', 'Rút tiền'];

const paymentOption = ['Chưa rút', 'Đã rút'];

const paymentDataStatus = ['Chưa thanh toán', 'Đã thanh toán'];

// Data chủ thẻ
const optionUser = [
	{id: '1', accountName: 'HỒ SỸ THẮNG', value: 'HỒ SỸ THẮNG (0001)', phoneNumber: '0387091101', cardNumber: '0001', limitCard: '50000000000'},
	{id: '2', accountName: 'HÀ NHI NGUYỄN THỊ', value: 'HÀ NHI NGUYỄN THỊ (0002)', phoneNumber: '0387091102', cardNumber: '0002', limitCard: '100000000000'},
	{id: '3', accountName: 'LÊ THU HẢO', value: 'LÊ THU HẢO (0003)', phoneNumber: '0387091103', cardNumber: '0003', limitCard: '100000000000'},
	{id: '4', accountName: 'LÊ CÔNG TUẤN', value: 'LÊ CÔNG TUẤN (0004)', phoneNumber: '0387091104',cardNumber: '0004', limitCard: '100000000000'},
	{id: '5', accountName: 'VŨ HẢI ANH', value: 'VŨ HẢI ANH (0005)', phoneNumber: '0387091105', cardNumber: '0005', limitCard: '100000000000'},
	{id: '6', accountName: 'TRỊNH ĐỨC ANH', value: 'TRỊNH ĐỨC ANH (0006)', phoneNumber: '0387091106', cardNumber: '0006', limitCard: '100000000000'},
	{id: '7', accountName: 'HOÀNG THỊ TÂM', value: 'HOÀNG THỊ TÂM (0007)', phoneNumber: '0387091107', cardNumber: '0007', limitCard: '100000000000'},
	{id: '8', accountName: 'NGUYỄN VĂN DŨNG', value: 'NGUYỄN VĂN DŨNG (0008)', phoneNumber: '0387091108', cardNumber: '0008', limitCard: '100000000000'},
	{id: '9', accountName: 'ĐẬU THỊ NHẬT MINH', value: 'ĐẬU THỊ NHẬT MINH (0009)', phoneNumber: '0387091109', cardNumber: '0009', limitCard: '100000000000'},
	{id: '10', accountName: 'LƯỜNG TÚ ANH', value: 'LƯỜNG TÚ ANH (0010)', phoneNumber: '0387091110', cardNumber: '0010', limitCard: '50000000000'},
];

// Data Số điện thoại
const optionUserPhoneNumber = [
	{id: '1', accountName: 'HỒ SỸ THẮNG', value: '0387091101', phoneNumber: '0387091101', cardNumber: '0001', limitCard: '50000000000'},
	{id: '2', accountName: 'HÀ NHI NGUYỄN THỊ', value: '0387091102', phoneNumber: '0387091102', cardNumber: '0002', limitCard: '100000000000'},
	{id: '3', accountName: 'LÊ THU HẢO', value: '0387091103', phoneNumber: '0387091103', cardNumber: '0003', limitCard: '100000000000'},
	{id: '4', accountName: 'LÊ CÔNG TUẤN', value: '0387091104', phoneNumber: '0387091104',cardNumber: '0004', limitCard: '100000000000'},
	{id: '5', accountName: 'VŨ HẢI ANH', value: '0387091105', phoneNumber: '0387091105', cardNumber: '0005', limitCard: '100000000000'},
	{id: '6', accountName: 'TRỊNH ĐỨC ANH', value: '0387091106', phoneNumber: '0387091106', cardNumber: '0006', limitCard: '100000000000'},
	{id: '7', accountName: 'HOÀNG THỊ TÂM', value: '0387091107', phoneNumber: '0387091107', cardNumber: '0007', limitCard: '100000000000'},
	{id: '8', accountName: 'NGUYỄN VĂN DŨNG', value: '0387091108', phoneNumber: '0387091108', cardNumber: '0008', limitCard: '100000000000'},
	{id: '9', accountName: 'ĐẬU THỊ NHẬT MINH', value: '0387091109', phoneNumber: '0387091109', cardNumber: '0009', limitCard: '100000000000'},
	{id: '10', accountName: 'LƯỜNG TÚ ANH', value: '0387091110', phoneNumber: '0387091110', cardNumber: '0010', limitCard: '50000000000'},
];

// Data Số điện thoại
const optionUserCardNumber = [
	{id: '1', accountName: 'HỒ SỸ THẮNG', value: '0001', phoneNumber: '0387091101', cardNumber: '0001', limitCard: '100,000,000,000'},
	{id: '2', accountName: 'HÀ NHI NGUYỄN THỊ', value: '0002', phoneNumber: '0387091102', cardNumber: '0002', limitCard: '100,000,000,000'},
	{id: '3', accountName: 'LÊ THU HẢO', value: '0003', phoneNumber: '0387091103', cardNumber: '0003', limitCard: '100,000,000,000'},
	{id: '4', accountName: 'LÊ CÔNG TUẤN', value: '0004', phoneNumber: '0387091104',cardNumber: '0004', limitCard: '100,000,000,000'},
	{id: '5', accountName: 'VŨ HẢI ANH', value: '0005', phoneNumber: '0387091105', cardNumber: '0005', limitCard: '100,000,000,000'},
	{id: '6', accountName: 'TRỊNH ĐỨC ANH', value: '0006', phoneNumber: '0387091106', cardNumber: '0006', limitCard: '100,000,000,000'},
	{id: '7', accountName: 'HOÀNG THỊ TÂM', value: '0007', phoneNumber: '0387091107', cardNumber: '0007', limitCard: '100,000,000,000'},
	{id: '8', accountName: 'NGUYỄN VĂN DŨNG', value: '0008', phoneNumber: '0387091108', cardNumber: '0008', limitCard: '100,000,000,000'},
	{id: '9', accountName: 'ĐẬU THỊ NHẬT MINH', value: '0009', phoneNumber: '0387091109', cardNumber: '0009', limitCard: '100,000,000,000'},
	{id: '10', accountName: 'LƯỜNG TÚ ANH', value: '0010', phoneNumber: '0387091110', cardNumber: '0010', limitCard: '100,000,000,000'},
];

const optionsPercentBank = [
	{id: '1', value: '1.2'},
	{id: '2', value: '1.4'},
	{id: '3', value: '1.6'},
	{id: '4', value: '1.8'},
	{id: '5', value: '2'},
];

const optionsBankName = [
	{id: '1', value: 'Ngân hàng ngoại thương Việt Nam(VietcomBank).'},
	{id: '2', value: 'Ngân hàng Đầu tư và Phát triển VN (BIDV).'},
	{id: '3', value: 'Ngân hàng Chính sách xã hội (VBSP).'},
	{id: '4', value: 'Ngân hàng Công thương VN (Vietinbank).'},
	{id: '5', value: 'Ngân hàng Nông nghiệp&PT Nông thôn VN-AGribank.'},
	{id: '6', value: 'Ngân hàng Phát triển Nhà ĐBSCL (MHB).'},
	{id: '7', value: 'Ngân hàng Phát triển Việt Nam (VDB).'},
	{id: '8', value: 'Ngân hàng TMCP Bản Việt.'},
	{id: '9', value: 'Ngân hàng TMCP Đại A.'},
	{id: '10', value: 'Ngân hàng TMCP Phát triển MeKong.'},
	{id: '11', value: 'Ngân hàng TMCP Quốc Dân.'},
	{id: '12', value: 'Ngân hàng TMCP Việt Á'},
	{id: '13', value: 'Ngân hàng TMCP Việt Nam Thương Tín.'},
	{id: '14', value: 'Ngân hàng TMCP Xây dựng VN.'},
	{id: '15', value: 'Ngân hàng BẢO VIỆT (Bao Viet Bank).'},
	{id: '16', value: 'NHTMCP Kỹ thương VN (Techcombank).'},
	{id: '17', value: 'NHTMCP Nam Á (Nam A Bank).'},
	{id: '18', value: 'NHTMCP phát triển Tp HCM (HD Bank).'},
	{id: '19', value: 'NHTMCP Phương Đông (OCB).'},
	{id: '20', value: 'NHTMCP Phương Nam (Southern Bank).'},
	{id: '21', value: 'NHTMCP Quân Đội (MB).'},
	{id: '22', value: 'NHTMCP Quốc Tế (VIB).'},
	{id: '23', value: 'NHTMCP Sài Gòn (SCB).'},
	{id: '24', value: 'NHTMCP Sài gòn – Hà Nội (SHB).'},
	{id: '25', value: 'NHTMCP Sài gòn Thương Tín (Sacombank).'},
	{id: '26', value: 'NHTMCP SG Công Thương (SaigonBank).'},
	{id: '27', value: 'NHTMCP Việt Hóa (Viet hoa JS bank).'},
	{id: '28', value: 'NHTMCP VN Thịnh Vượng (VP Bank).'},
	{id: '29', value: 'NHTMCP Xăng dầu Petrolimex (PGBank).'},
	{id: '30', value: 'NHTMCP Xuất Nhập Khẩu (Eximbank).'},
	{id: '31', value: 'PV com bank_NH Đại Chúng (P.Tay+TCDK).'},
	{id: '32', value: 'Ngân hàng Tiên Phong (Tiên Phong Bank).'},
	{id: '34', value: 'Ngân hàng TMCP BƯU ĐIỆN LIÊN VIỆT.'},
	{id: '35', value: 'NHTMCP Á Châu (ACB).'},
	{id: '36', value: 'NHTMCP An Bình (ABBank).'},
	{id: '37', value: 'NHTMCP Bắc Á (Bac A bank).'},
	{id: '38', value: 'NHTMCP Đại Dương (Oceanbank).'},
	{id: '39', value: 'NHTMCP Dầu khí Toàn cầu (GPBank).'},
	{id: '40', value: 'NHTMCP Đông Á (Dong A bank).'},
	{id: '41', value: 'NHTMCP Đông Nam Á (Seabank).'},
	{id: '42', value: 'NHTMCP Hàng Hải (Maritime Bank).'},
	{id: '43', value: 'NHTMCP Kiên Long (Kien Long bank).'},
	{id: '44', value: 'IN DOVINA BANK.'},
	{id: '45', value: 'Ngân hàng liên doanh Việt Nga.'},
	{id: '46', value: 'ABN-AMRO BANK.'},
	{id: '47', value: 'ANZ BANK.'},
	{id: '48', value: 'BANGKOK BANK.'},
	{id: '49', value: 'BANK OF CHINA.'},
	{id: '50', value: 'Bank of Communications.'},
	{id: '51', value: 'BANKO OF TOKYO-MITSUBISHI UFJ,LTD CN HCM.'},
	{id: '52', value: 'BANKO OF TOKYO-MITSUBISHI UFJ,LTD CN HN.'},
	{id: '53', value: 'BNP- PARIBAS.'},
	{id: '54', value: 'CITI BANK HCM.'},
	{id: '55', value: 'CITI BANK HN.'},
	{id: '56', value: 'Credit Agricole CIB.'},
	{id: '57', value: 'DEUTSCHE BANK.'},
	{id: '58', value: 'FIRST COMMERCIAL BANK HCM.'},
	{id: '59', value: 'HONGKONG AND SHANGHAI BANK (HSBC).'},
	{id: '60', value: 'HUANAN COMMERECIAL BANK LTD chi nhanh SG.'},
	{id: '61', value: 'NH Cong nghiep Han Quoc.'},
	{id: '62', value: 'NH DBS Bank Ltd CN HCM.'},
	{id: '63', value: 'NH DTPT Campuchia Ha Noi.'},
	{id: '64', value: 'NH DTPT Campuchia – HCM.'},
	{id: '65', value: 'NH FAR EAST NATIONAL BANK.'},
	{id: '66', value: 'NH Industrial &amp; Commercial Bank of China.'},
	{id: '67', value: 'NH Kookmin thanh pho Ho Chi Minh.'},
	{id: '68', value: 'NH Taipei FubonC.Bi.'},
	{id: '69', value: 'NH TM Taipei Fubon.'},
	{id: '70', value: 'NH TNHH CTBC ( NHTM Chinatrust).'},
	{id: '71', value: 'NH TNHH MTV Shinhan VN.'},
	{id: '72', value: 'NHTM Taipei Fubon.'},
	{id: '73', value: 'NHTNHH MTV Hong Leong VN.'},
	{id: '74', value: 'OVERSEA – CHINESE BANKING COPORATION Ltd.'},
	{id: '75', value: 'STANDARD CHARTERED BANK.'},
	{id: '76', value: 'SUMITOMO MITSUI BANKING CORPORATION.'},
	{id: '77', value: 'The Shanghai Com&amp;Savings Bank.'},
	{id: '78', value: 'UNITED OVERSEAS BANK (UOB).'},
	{id: '79', value: 'WOORI BANK HA NOI.'},
	{id: '80', value: 'Industrial Bank of korea.'},
	{id: '81', value: 'JP MORGAN CHASE BANK.'},
	{id: '82', value: 'KOREA EXCHANGE BANK.'},
	{id: '83', value: 'MAY BANK.'},
	{id: '84', value: 'MEGA INTERNATIONAL COMMERCIAL Co.LTD.'},
	{id: '85', value: 'Mizuho Corporate Bank Ltd., Hanoi Branch.'},
	{id: '86', value: 'MIZUHO CORPORATE BANK, LTD chi nhanh HCM.'},
	{id: '87', value: 'NATEXIS BANQUES – POPULAIRES SUCCURSALE.'},
	{id: '88', value: 'NGAN HANG FIRST COMMERCIAL BANK HANOI.'},
	{id: '89', value: 'Ngan hang WOORI – Chi nhanh Tp HCM.'},
	{id: '91', value: 'NH MALAYAN BANKING BERHAD.'},
	{id: '92', value: 'NH CATHAY.'},
	{id: '93', value: 'NH China Construction Bank Corporation.'},
	{id: '94', value: 'NH Commonwealth Bank of Australia.'},
];

function useModalAddNew() {
	// Danh sách thiết bị.
	const optionsDevicePost = useSelector(selectorDevice);

	// Data from
	const [data, setData] = React.useState({
		customerId: "000000000",
		[typeName.accountName]: '', // Chủ thẻ
		[typeName.phoneNumber]: '', // Số điện thoại
		[typeName.cardNumber]: '', // 4 Số cuối thẻ
		[typeName.bankName]: optionsBankName[0].value, // Tên ngân hàng
		[typeName.limitCard]: 0, // Hạn mức
		[typeName.money]: 0, // Số tiền
		[typeName.devicePost]: optionsDevicePost.length && optionsDevicePost[0].devicePost || "", // Tên thiết bị
		[typeName.percentBank]: optionsDevicePost.length && optionsDevicePost[0].percentBank || "", // % Phí ngân hàng
		[typeName.percentCustomer]:optionsDevicePost.length && optionsDevicePost[0].percentCustomer || "", // % Phí thu khách
		[typeName.type]: provinceDataType[0], // Hình thức
		[typeName.paymentOption]: paymentOption[0], // Hình thức đáo
		[typeName.debit]: paymentDataStatus[0], // Trạng thái thanh toán
		[typeName.workTimestamp]: convertTimeStamp(), // Ngày làm
		[typeName.cardExpirationDate]: convertTimeStamp(), // Ngày đáo thẻ
		[typeName.extends]: 'ok', // Note
	});

	// Thông báo lỗi các trường
	const [messageError, setMessageError] = React.useState({
		[typeName.accountName]: '', // Chủ thẻ
		[typeName.phoneNumber]: '', // Số điện thoại
		[typeName.cardNumber]: '', // 4 Số cuối thẻ
		[typeName.bankName]: '', // Tên ngân hàng
		[typeName.limitCard]: '', // Hạn mức
		[typeName.money]: '', // Số tiền
		[typeName.devicePost]: '', // Tên thiết bị
		[typeName.percentBank]: '', // % Phí ngân hàng
		[typeName.percentCustomer]: '', // % Phí thu khách
		[typeName.type]: '',  // Hình thức
		[typeName.paymentOption]: '', // Hình thức đáo
		[typeName.debit]: '',  // Trạng thái thanh toán
		[typeName.workTimestamp]: '', // Ngày làm
		[typeName.cardExpirationDate]: '', // Ngày đáo thẻ
		[typeName.extends]: '', // Note
	});

	// Khi người dùng tìm kiếm tên, số ĐT, 4 số cuối
	const [dataSelectUser, setDataSelectUser] = React.useState({});

	// Khi người dùng select tên thiết bị
	const [dataSelectDevicePost, setDataSelectDevicePost] = React.useState(optionsDevicePost.length && optionsDevicePost[0] || "");

	const onChangeInput = (value, type) => {
		setData({ ...data, [typeName[type]]: value })
	};

	const onfocusInput = (type) => {
		setMessageError({ ...messageError, [typeName[type]]: '' })
	};

	// Todo QuanDX: chọn tên chủ thẻ.
	const onSelectAutoCompleteUser = (value, objItem) => {
		setDataSelectUser(objItem);

		// Update thông tin user
		setData({
			...data,
			[typeName.accountName]: objItem.accountName || '',
			[typeName.phoneNumber]: objItem.phoneNumber || '',
			[typeName.limitCard]: objItem.limitCard || '',
			[typeName.cardNumber]: objItem.cardNumber || '',
		});
	};

	// Todo QuanDX: chọn tên tiết bị.
	const onSelectDevicePost = (value, objItem) => {
		setDataSelectDevicePost(objItem);

		// Update thông tin user
		setData({
			...data,
			[typeName.devicePost]: objItem.devicePost || '',
			[typeName.percentBank]: objItem.percentBank || '',
			[typeName.percentCustomer]: objItem.percentCustomer || '',
		});
	};

	// Todo QuanDX: chọn tên ngân hàng.
	const onSelectBankName = (value, objItem) => {
		setData({
			...data,
			[typeName.bankName]: value,
		});
	};

	// Clear Data
	const onCleanData = () => {
		setDataSelectUser({
			[typeName.accountName]: '',
			[typeName.phoneNumber]: '',
			[typeName.limitCard]: '',
			[typeName.cardNumber]: '',
		});

		setData({
			...data,
			[typeName.accountName]: '', // Chủ thẻ
			[typeName.phoneNumber]: '', // Số điện thoại
			[typeName.cardNumber]: '', // 4 Số cuối thẻ
			[typeName.limitCard]: 0, // Hạn mức
			// [typeName.money]: 0, // Số tiền
			// [typeName.devicePost]: optionsDevicePost[0].devicePost, // Tên thiết bị
			// [typeName.percentBank]: optionsDevicePost[0].percentBank, // % Phí ngân hàng
			// [typeName.percentCustomer]: optionsDevicePost[0].percentCustomer, // % Phí thu khách
			// [typeName.type]: provinceDataType[0], // Hình thức
			// [typeName.paymentOption]: paymentOption[0], // Hình thức đáo
			// [typeName.debit]: paymentDataStatus[0], // Trạng thái thanh toán
			// [typeName.workTimestamp]: convertTimeStamp(), // Ngày làm
			[typeName.extends]: 'ok', // Note
		});
	};

	const { SUCCESS } = flagInput;

	const checkValidateAccountName = () => {
		// Tên chủ thẻ
		const { accountName } = data;
		if (!accountName) {
			return 'Tên chủ thẻ không được để trống!';
		}

		if(!validationName(accountName)) {
			return 'Tên chủ thẻ không đúng vui lòng kiểm tra lại!';
		}

		return SUCCESS;
	};

	const checkValidatePhoneNumber = () => {
		// Số điện thoại
		const { phoneNumber } = data;
		const phoneNumber_ = Number(phoneNumber);

		if (!phoneNumber_) {
			return 'Số điện thoại không đúng vui lòng kiểm tra lại!';
		}

		return SUCCESS;
	};

	const checkValidateCardNumber = () => {
		// 4 Số cuối thẻ
		const { cardNumber } = data;
		const cardNumber_ = Number(cardNumber);

		if (!cardNumber_) {
			return '4 Số cuối của thẻ không đúng vui lòng kiểm tra lại!';
		}

		if (cardNumber.length !== 4) {
			return '4 Số cuối của thẻ phải là 4 chữ số!';
		}

		return SUCCESS;
	};

	const checkValidateLimitCard = () => {
		// Hạn mức
		const { limitCard } = data;
		const limitCard_ = Number(limitCard);
		if (!limitCard_) {
			return 'Số hạn mức không đúng vui lòng kiểm tra lại!'
		}

		// const money_ = Number(money);
		// if (limitCard_ < money_) {
		// 	return 'Số tiền hạn mức phải lớn hơn số tiền làm cho khách!';
		// }

		return SUCCESS;
	};

	const checkValidateMoney = () => {
		// Số tiền
		const { limitCard, money } = data;
		const limitCard_ = Number(limitCard);
		const money_ = Number(money);
		if (!money_) {
			return 'Số tiền không đúng vui lòng kiểm tra lại!'
		}

		if (limitCard_ && money_ && limitCard_ < money_) {
			return 'Số tiền làm cho khách đã lớn hơn số tiền hạn mức!';
		}

		return SUCCESS;
	};

	const checkValidateDevicePost = () => {
		// Tên thiết bị
		return SUCCESS;
	};

	const checkValidateBankName = () => {
		// Tên Ngân hàng
		return SUCCESS;
	};

	const checkValidatePercentBank = () => {
		// % Phí ngân hàng
		const { percentBank } = data;
		const percentBank_ = Number(percentBank);

		if (!percentBank_) {
			return '% Phí ngân hàng không đúng vui lòng kiểm tra lại!'
		}

		if (!validationNumberDecimal(percentBank_)) {
			return '% Phí ngân hàng không đúng định dạng "1,2... hoặc 1" vui lòng kiểm tra lại!';
		}

		return SUCCESS;
	};

	const checkValidatePercentCustomer = () => {
		// % Phí thu khách
		const { percentBank, percentCustomer } = data;
		const percentBank_ = Number(percentBank);
		const percentCustomer_ = Number(percentCustomer);

		if (!percentCustomer_) {
			return '% Phí thu khách không đúng vui lòng kiểm tra lại!'
		}

		if (percentBank_ && percentCustomer_ && percentBank_ > percentCustomer_) {
			return '% Phí thu khách phải lớn hơn hoặc bằng % Phí ngân hàng vui lòng kiểm tra lại!'
		}

		if (!validationNumberDecimal(percentCustomer_)) {
			return '% Phí thu khách không đúng định dạng "1,2... hoặc 1" vui lòng kiểm tra lại!';
		}

		return SUCCESS;
	};

	const checkValidateType = () => {
		// Hình thức
		return SUCCESS;
	};

	const checkValidatePaymentOption = () => {
		// Hình thức đáo
		return SUCCESS;
	};

	const checkValidateDebit = () => {
		// Trạng thái thanh toán
		return SUCCESS;
	};

	const checkValidateWorkTimestamp = () => {
		// Ngày làm
		const { workTimestamp } = data;

		if (!workTimestamp) {
			return 'Ngày làm không được để trống!'
		}

		return SUCCESS;
	};

	const checkValidateCardExpirationDate = () => {
		// Ngày làm
		const { cardExpirationDate } = data;

		if (!cardExpirationDate) {
			return 'Ngày đáo thẻ không được để trống!'
		}

		return SUCCESS;
	};

	const checkValidateNote = () => {
		// Note
		return SUCCESS;
	};

	const checkValidateAll = () => {
		const messageErrors = {
			[typeName.accountName]: checkValidateAccountName(),
			[typeName.phoneNumber]: checkValidatePhoneNumber(),
			[typeName.cardNumber]: checkValidateCardNumber(),
			[typeName.bankName]: checkValidateBankName(),
			[typeName.limitCard]: checkValidateLimitCard(),
			[typeName.money]: checkValidateMoney(),
			[typeName.devicePost]: checkValidateDevicePost(),
			[typeName.percentBank]: checkValidatePercentBank(),
			[typeName.percentCustomer]: checkValidatePercentCustomer(),
			[typeName.type]: checkValidateType(),
			[typeName.paymentOption]: checkValidatePaymentOption(),
			[typeName.debit]: checkValidateDebit(),
			[typeName.workTimestamp]: checkValidateWorkTimestamp(),
			[typeName.cardExpirationDate]: checkValidateCardExpirationDate(),
			[typeName.extends]: checkValidateNote(),
		};

		setMessageError(messageErrors);

		return Object.values(messageErrors).every((message) => message === SUCCESS);
	};

	return({
	    data,
	    setData,
		onChangeInput,
		provinceDataType,
		paymentDataStatus,
		optionsDevicePost,
		optionsPercentBank,
		optionUser,
		optionUserPhoneNumber,
		optionUserCardNumber,
		dataSelectUser,
		onSelectAutoCompleteUser,
		onSelectDevicePost,
		dataSelectDevicePost,
		messageError,
		setMessageError,
		checkValidateAll,
		onfocusInput,
		paymentOption,
		onCleanData,
		optionsBankName,
		onSelectBankName,
	});
}

export default useModalAddNew;
