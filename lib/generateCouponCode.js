export const generateCouponCode = (title = '', expiryDate = '') => {
    if (!title || typeof title !== 'string') {
        throw new Error("Invalid title. Expected a non-empty string.");
    }

    if (!expiryDate || isNaN(new Date(expiryDate).getTime())) {
        throw new Error("Invalid expiryDate. Expected a valid date string (YYYY-MM-DD) or Date object.");
    }

    const formattedTitle = title.toUpperCase().replace(/\s+/g, '');
    const formattedExpiryDate = new Date(expiryDate).toISOString().slice(0, 10).split('-').reverse().join('');

    return `${formattedTitle}${formattedExpiryDate}`;
};
