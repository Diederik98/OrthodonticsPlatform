import * as Yup from 'yup';

export const validationEmailArray = Yup.object().shape({
    email: Yup.array()
        .transform(function (value, originalValue) {
            if (this.isType(value) && value !== null) {
                return value;
            }
            return originalValue ? originalValue.split(/[\s,]+/) : [];
        })
        .of(Yup.string().email(({value}) => `${value} is not a valid email`)),
});


