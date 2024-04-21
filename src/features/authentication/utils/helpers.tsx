const logout = (): void => {
    const tokenAuth = localStorage.getItem("tokenAuth");
    if (tokenAuth) {
        localStorage.removeItem("tokenAuth");
    }
};

export { logout };
