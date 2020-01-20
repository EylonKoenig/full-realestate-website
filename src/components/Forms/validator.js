export const field = ({ name, value = '', isRequired = false, minLength = 0, pattern = '', checklist }) => {
    const settings = {
        name,
        value,
        errors: [],
        validations: {}
    }

    if (isRequired) {
        settings.validations.required = true;
    }
    if (minLength) {
        settings.validations.minLength = minLength;
    }
    if (pattern) {
        settings.validations.pattern = pattern;
    }
    if (checklist) {
        settings.validations.checklist = checklist
    }

    return settings;
}

export default (name, value, validations) => {
    const errors = [];
    const convertedName = name.split("_").join(" ")
    if (validations.required && required(value)) {
        errors.push(`${convertedName} is required`);
    }

    if (validations.minLength && minLength(value, validations.minLength)) {
        errors.push(`${convertedName} should be no less than ${validations.minLength} characters`);
    }

    if (validations.pattern && pattern(value, validations.pattern)) {
        errors.push(`${convertedName} invalid`);
    }
    if (validations.checklist && checkinlist(value, validations.checklist.list, validations.checklist.status)) {
        console.log(checkinlist(value, validations.checklist.list, validations.checklist.status))
        errors.push(` invalid`);
    }

    return errors;
}

const required = value => !value;

const minLength = (value, min) => value.length < min;

const pattern = (value, pattern) => !pattern.test(value);

const checkinlist = function(value, list, status) {
    const isInclude = list.includes(value);
    if (status) {
        return isInclude
    } else {
        return !isInclude
    }

}