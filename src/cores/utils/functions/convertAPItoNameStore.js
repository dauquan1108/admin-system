function convertAPItoNameStore(str) {
    const upperCaseStr = str.charAt(0).toUpperCase() + str.slice(1);
    return [upperCaseStr, `Has${upperCaseStr}`];
}

export default convertAPItoNameStore;