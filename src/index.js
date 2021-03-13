module.exports = function check(str, bracketsConfig) {
    // your solution
    let bracketsConfigObj = {};

    bracketsConfig.forEach((element) => {
        bracketsConfigObj[element[0]] = element[1];
    });

    const openingArr = Object.keys(bracketsConfigObj);
    const closingArr = Object.values(bracketsConfigObj);
    const stackArr = [];

    for (let element of str) {
        if (
            openingArr.indexOf(element) !== -1 &&
            closingArr.indexOf(element) !== -1 &&
            stackArr.indexOf(element) === -1
        ) {
            stackArr.push(element);
        } else if (
            openingArr.indexOf(element) !== -1 &&
            closingArr.indexOf(element) === -1
        ) {
            stackArr.push(element);
        } else {
            let lastOpening = stackArr.pop();

            if (bracketsConfigObj[lastOpening] !== element) {
                return false;
            }
        }
    }

    if (stackArr.length !== 0) {
        return false;
    }
    return true;
};
