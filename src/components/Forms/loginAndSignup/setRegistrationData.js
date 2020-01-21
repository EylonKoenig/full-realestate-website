export default (data) => {
    let result = {};
    for (let prop in data) {
        if (prop === 'user') {
            result.email = data[prop].value
            continue;
        }
        result[prop] = data[prop].value;
    }
    return result
}