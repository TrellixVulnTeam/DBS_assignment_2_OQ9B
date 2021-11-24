

const setUser = data => {

    window.sessionStorage.setItem("user", JSON.stringify(data));
}

const getUser = () => {
    return JSON.parse(window.sessionStorage.getItem("user"));
}

const logout = () => {

    
    window.sessionStorage.clear();
}

const getUserID = () => {
    return getUser().id;
}


export {setUser, getUser, logout, getUserID};