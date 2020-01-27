export default (data, id) => {
    const formData = new FormData();
    formData.append("id", id)
    for (let prop in data) {
        if (prop === 'old_password') continue;
        if (prop === 'user') {
            formData.append("email", data[prop].value);
            continue;
        }
        formData.append(prop, data[prop].value)
    }
    return formData;
}