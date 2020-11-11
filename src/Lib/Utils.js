export const  numberFormat = (value, currency) =>
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
    }).format(value);