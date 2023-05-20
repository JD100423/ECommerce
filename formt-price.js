export const formatPrice = (num) => {
    return new Intl.NumberFormat("RD", {
        style: "currency",
        currency: "DOP",
    }).format(num);
};