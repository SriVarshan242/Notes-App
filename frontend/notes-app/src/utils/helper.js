export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
};
export const getInitials = (name) => {
    if (!name) return "";
    
    const words = name.trim().split(/\s+/); // Split by spaces and remove extra spaces
    const initials = words.map(word => word[0].toUpperCase()).join("");
    
    return initials;
};
