// Write your solution in this file!
const employee = {
    name: 'juancho',
    streetAddress: 'pa verdebriar'
}

console.log(employee.name);

/*function updateEmployeeWithKeyAndValue(object, key, value) {
    const newEmployee = { ...object };
    newEmployee[key] = value;
    return newEmployee;
}*/

// following method is more concise
function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(object, key) {
    // const newObj = Object.assign({}, object)
    const newEmployee = { ...object };
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}