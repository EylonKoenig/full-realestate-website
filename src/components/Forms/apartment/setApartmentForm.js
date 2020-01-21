export default (data, userId, images, cities) => {
    const formData = new FormData();
    formData.append('user_id', userId)
    for (let prop in data) {
        if (prop === 'country' || prop === 'for_sale' || prop === 'for_rent') continue;
        if (prop === 'city') {
            const findId = (city) => city.name === data[prop];
            const index = cities.findIndex(findId)
            formData.append("city_id", cities[index].id)
            continue;
        }
        formData.append(prop, data[prop])
    }
    if (data.for_sale && data.for_rent) {
        formData.append("sale_status", "both")
    } else if (data.for_sale) {
        formData.append("sale_status", "sale")
    } else {
        formData.append("sale_status", "rent")
    }
    if (images) {
        for (let image in images) {
            formData.append("images", images[image]);
        }
    }
    return formData;
}