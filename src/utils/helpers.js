export const getUser  = () =>{
    let user = localStorage.getItem("User")
    return JSON.parse(user)
}

export const setUser  = (userData) =>{
    let user = JSON.stringify(userData) 
    localStorage.setItem("User",user)
    
}