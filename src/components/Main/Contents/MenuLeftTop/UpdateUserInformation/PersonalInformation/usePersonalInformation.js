import React from 'react';

// Base
import { flagInput } from "../../../../../Base/Regex/FlagInput";

function usePersonalInformation() {
	const [dataPersonal, setDataPersonal] = React.useState({
		FullName: '',
		DateBirth: '',
		Sex: '',
		Phone: '',
		Email: '',
		Extend: '',
	});

	const { TYPE_PHONE, TYPE_EMAIL, TYPE_DATE_BIRTH, TYPE_FULL_NAME, TYPE_SEX, TYPE_EXTEND } = flagInput;


    return {
		dataPersonal,
		setDataPersonal
    };
}

export default usePersonalInformation;
