/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 12/27/2022.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */


const dataFakeHasInvoice = {
	HasInvoice: {
		total: 16,
		count: 16,
		itemIds: ["1", "2" , "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"]
	}
};

const dataFakeInvoice = {
	Invoice: {
		"1": {
			data: {
				key: "1",
				device: "Thiết bị 1", // Post làm
				workTime: "24/12/2022", // Ngày làm
				accountName: "An Giang", // Chủ thẻ
				cardNumber: "1", // Số thẻ
				amountOfMoney: "100,000,000 vnđ", // Số tiền
				bankingFee: "1,32", // % Phí ngân hàng
				bankFees: "300,000 vnđ", // Phí ngân hàng
				customerCharge: "1.8", // % Phí thu khác
				fees: "620,000 vnđ", // Phí thu
				interestRate: "320,000 vnđ", // Lãi
				note: "Đã xác nhận",
				tag: ["Đáo"]
			}
		},
		"2": {
			data: {
				key: "2",
				device: "Thiết bị 2",
				workTime: "24/12/2022",
				accountName: "Bà rịa – Vũng tàu",
				cardNumber: "2",
				amountOfMoney: "80,000,000 vnđ",
				bankingFee: "1,32",
				bankFees: "300,000 vnđ",
				customerCharge: "1.8",
				fees: "560,000 vnđ",
				interestRate: "260,000 vnđ",
				note: "Đã xác nhận",
				tag: ["Đáo"]
			}
		},
		"3": {
			data: {
				key: "3",
				device: 'Thiết bị 3',
				workTime: '23/12/2022',
				accountName: "Bắc Giang",
				cardNumber: '3',
				amountOfMoney: '10,000,000 vnđ',
				bankingFee: '1,32',
				bankFees: '300,000 vnđ',
				customerCharge: '1.8',
				fees: '490,000 vnđ',
				interestRate: '190,000 vnđ',
				note: 'Đã xác nhận đáo',
				tag: ["Đáo"],
			}
		},
		"4": {
			data: {
				key: "4",
				device: 'Thiết bị 4',
				workTime: '24/12/2022',
				accountName: "Bắc Kạn",
				cardNumber: '4',
				amountOfMoney: '90,000,000 vnđ',
				bankingFee: '1,32',
				bankFees: '200,000 vnđ',
				customerCharge: '1.8',
				fees: '400,000 vnđ',
				interestRate: '200,000 vnđ',
				note: 'Đã xác nhận đáo',
				tag: ["Đáo"],
			}
		},
		"5": {
			data: {
				key: "5",
				device: 'Thiết bị 5',
				workTime: '21/12/2022',
				accountName: "Bạc Liêu",
				cardNumber: '5',
				amountOfMoney: '70,000,000 vnđ',
				bankingFee: '1,32',
				bankFees: '330,000 vnđ',
				customerCharge: '1.8',
				fees: '660,000 vnđ',
				interestRate: '330,000 vnđ',
				note: 'Xác nhận đáo',
				tag: ["Rút tiền"],
			}
		},
		"6": {
			data: {
				key: "6",
				device: 'Thiết bị 6',
				workTime: '23/12/2022',
				accountName: "Bắc Ninh",
				cardNumber: '6',
				amountOfMoney: '60,000,000 vnđ',
				bankingFee: '1,32',
				bankFees: '290,000 vnđ',
				customerCharge: '1.8',
				fees: '500,000 vnđ',
				interestRate: '110,000 vnđ',
				note: 'Đã xác nhận đáo',
				tag: ["Rút tiền"],
			}
		},
		"7": {
			data: {
				key: "7",
				device: 'Thiết bị 7',
				workTime: '22/12/2022',
				accountName: "Bến Tre",
				cardNumber: '7',
				amountOfMoney: '50,000,000 vnđ',
				bankingFee: '1,32',
				bankFees: '350,000 vnđ',
				customerCharge: '1.8',
				fees: '560,000 vnđ',
				interestRate: '210,000 vnđ',
				note: 'Đã xác nhận đáo',
				tag: ["Rút tiền"],
			}
		},
		"8": {
			data: {
				key: "8",
				device: 'Thiết bị 8',
				workTime: '24/12/2022',
				accountName: "Bình Định",
				cardNumber: '8',
				amountOfMoney: '140,000,000 vnđ',
				bankingFee: '1,32',
				bankFees: '200,000 vnđ',
				customerCharge: '1.8',
				fees: '450,000 vnđ',
				interestRate: '250,000 vnđ',
				note: 'Xác nhận đáo',
				tag: ["Đáo"],
			}
		},
		"9": {
			data: {
				key: "9",
				device: 'Thiết bị 9',
				workTime: '24/12/2022',
				accountName: "Cà Mau",
				cardNumber: '9',
				amountOfMoney: '35,000,000 vnđ',
				bankingFee: '1,32',
				bankFees: '360,000 vnđ',
				customerCharge: '1.8',
				fees: '630,000 vnđ',
				interestRate: '230,000 vnđ',
				note: 'Đã xác nhận đáo',
				tag: ["Đáo"],
			}
		},
		"10": {
			data: {
				key: "10",
				device: 'Thiết bị 10',
				workTime: '24/12/2022',
				accountName: "Cần Thơ",
				cardNumber: '10',
				amountOfMoney: '30,000,000 vnđ',
				bankingFee: '1,32',
				bankFees: '300,000 vnđ',
				customerCharge: '1.8',
				fees: '630,000 vnđ',
				interestRate: '330,000 vnđ',
				note: 'Ok đã đáo',
				tag: ["Rút tiền"],
			}
		},
		"11": {
			data: {
				key: "11",
				device: 'Thiết bị 11',
				workTime: '24/12/2022',
				accountName: "Hải Phòng",
				cardNumber: '11',
				amountOfMoney: '33,000,000 vnđ',
				bankingFee: '1,32',
				bankFees: '320,000 vnđ',
				customerCharge: '1.8',
				fees: '540,000 vnđ',
				interestRate: '220,000 vnđ',
				note: 'Đã xác nhận đáo',
				tag: ["Đáo"],
			}
		},
		"12": {
			data:
				{
					key: "12",
					device: 'Thiết bị 12',
					workTime: '24/12/2022',
					accountName: "Hậu Giang",
					cardNumber: '12',
					amountOfMoney: '35,000,000 vnđ',
					bankingFee: '1,32',
					bankFees: '380,000 vnđ',
					customerCharge: '1.8',
					fees: '580,000 vnđ',
					interestRate: '200,000 vnđ',
					note: 'Đã xác nhận đáo',
					tag: ["Đáo"],
				}
				},
		"13": {
			data: {
				key: "13",
				device: 'Thiết bị 13',
				workTime: '24/12/2022',
				accountName: "Thành phố Hồ Chí Minh",
				cardNumber: '13',
				amountOfMoney: '4,000,000 vnđ',
				bankingFee: '1,32',
				bankFees: '390,000 vnđ',
				customerCharge: '1.8',
				fees: '590,000 vnđ',
				interestRate: '200,000 vnđ',
				note: 'Xác nhận đáo',
				tag: ["Rút tiền"],
			}
		},
		"14": {
			data: {
				key: "14",
				device: 'Thiết bị 14',
				workTime: '24/12/2022',
				accountName: "Lâm Đồng",
				cardNumber: '14',
				amountOfMoney: '90,000,000 vnđ',
				bankingFee: '1,32',
				bankFees: '400,000 vnđ',
				customerCharge: '1.8',
				fees: '800,000 vnđ',
				interestRate: '400,000 vnđ',
				note: 'Đã xác nhận đáo',
				tag: ["Đáo"],
			}
		},
		"15": {
			data: {
				key: "15",
				device: 'Thiết bị 15',
				workTime: '24/12/2022',
				accountName: "Kon Tum",
				cardNumber: '15',
				amountOfMoney: '50,000,000 vnđ',
				bankingFee: '1,32',
				bankFees: '230,000 vnđ',
				customerCharge: '1.8',
				fees: '400,000 vnđ',
				interestRate: '170,000 vnđ',
				note: 'Xác nhận đáo',
				tag: ["Rút tiền"],
			}
		},
		"16": {
			data: {
				key: "16",
				device: 'Thiết bị 16',
				workTime: '24/12/2022',
				accountName: "Hòa Bình",
				cardNumber: '16',
				amountOfMoney: '20,000,000 vnđ',
				bankingFee: '1,32',
				bankFees: '20,000 vnđ',
				customerCharge: '1.8',
				fees: '30,000 vnđ',
				interestRate: '10,000 vnđ',
				note: 'Xác nhận đáo',
				tag: ["Đáo"],
			}
		}
	}
};

const listDataInvoice = [];

const dataProcessingInvoice = (data) => {
	const { Invoice } = data;
	if (Object.keys(Invoice).length) {
		for (const property in Invoice) {
			if (Invoice.hasOwnProperty(property)) {
				const itemInvoice = Invoice[property].data;
				listDataInvoice.push(itemInvoice);
			}
		}
	}
};

dataProcessingInvoice(dataFakeInvoice);

const listDataTransaction = {
	data: {
		HasTransaction: {
			total: 79,
			count: 5,
			itemIds: [
				"63fb308112fdbd0008e1761b",
				"63fae575adf5dc00085aeb0c",
				"63fae4bcadf5dc00085aeb09",
				"63fb0f2772e0ea0008fb4d08",
				"63fae7e29549b20008d934f6"
			]
		},

		Transaction: {
			"63fb308112fdbd0008e1761b": {
				userId: "admin",
				companyId: "00000",
				money: 100000,
				extends: "ok",
				type: "Rút tiền",
				percentCustomer: 1.5,
				percentBank: 1.4,
				workTimestamp: 1677517200000,
				timestamp: 1677406302493,
				_id: "63fb308112fdbd0008e1761b",
				devicePost: "Thiết bị 1",
				customerId: "000000000",
				version: "v.0.0.0"
			},
			"63fae575adf5dc00085aeb0c": {
				userId: "admin",
				companyId: "00000",
				money: 100000,
				extends: "ok ",
				type: "Rút tiền",
				percentCustomer: 1.4,
				percentBank: 1.2,
				workTimestamp: 1677344400000,
				timestamp: 1677386939476,
				_id: "63fae575adf5dc00085aeb0c",
				devicePost: "Thiết bị 1",
				customerId: "000000000",
				version: "v.0.0.0"
			},
			"63fae4bcadf5dc00085aeb09": {
				userId: "admin",
				companyId: "00000",
				money: 10000,
				extends: "ok",
				type: "Rút tiền",
				percentCustomer: 1.4,
				percentBank: 1.2,
				workTimestamp: 1677344400000,
				timestamp: 1677386939476,
				_id: "63fae4bcadf5dc00085aeb09",
				devicePost: "Thiết bị 1",
				customerId: "000000000",
				version: "v.0.0.0"
			},
			"63fb0f2772e0ea0008fb4d08": {
				userId: "admin",
				companyId: "00000",
				money: 10000,
				extends: "ok",
				type: "Rút tiền",
				percentCustomer: 1.4,
				percentBank: 1.2,
				workTimestamp: 1677344400000,
				timestamp: 1677397799051,
				_id: "63fb0f2772e0ea0008fb4d08",
				devicePost: "Thiết bị 1",
				customerId: "000000000",
				version: "v.0.0.0"
			},
			"63fae7e29549b20008d934f6": {
				userId: "admin",
				companyId: "00000",
				money: 100000,
				extends: "ok",
				type: "Rút tiền",
				percentCustomer: 1.4,
				percentBank: 1.2,
				workTimestamp: 1677344400000,
				timestamp: 1677387745992,
				_id: "63fae7e29549b20008d934f6",
				devicePost: "Thiết bị 1",
				customerId: "000000000",
				version: "v.0.0.0"
			}
		}
	}
}

// {
// 	companyId:"00000",
// 	customerId: "000000000",
// 	devicePost: "Thiết bị 1", // ======> Tên thiết bị
// 	extends:"ok", // =====> Note
// 	key: "63fb308112fdbd0008e1761b",
// 	money: 100000, // ========> Số tiền nhận từ khách
// 	percentBank: 1.4, // =======> % Phí ngân hàng
// 	percentCustomer: 1.5,// =====>  % thu khách
// 	timestamp: 1677406302493, // thời gian nhân viên nhập lên hệ thống
// 	type: "Rút tiền". // =====> Hình thức
// 	userId: "admin",
// 	version: "v.0.0.0",
// 	workTimestamp: 1677517200000, // thời gian khách hàng đến giao dịch
// 	_id : "63fb308112fdbd0008e1761b"
// }


const listDataTransactionFake = [];

const dataTransaction = (list) => {
	const { data } = list
	const { Transaction } = data;
	if (Object.keys(Transaction).length) {
		for (const property in Transaction) {
			if (Transaction.hasOwnProperty(property)) {
				const itemInvoice = Transaction[property];
					// gán giá trị cũ vào thuộc tính mới
					itemInvoice.key = itemInvoice._id;
					// xóa thuộc tính mới
					delete itemInvoice._id;
				listDataTransactionFake.push(itemInvoice);
			}
		}
	}
};

dataTransaction(listDataTransaction);


export { dataFakeHasInvoice, dataFakeInvoice, listDataInvoice, listDataTransactionFake };

