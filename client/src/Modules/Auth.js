class Auth {
    static authenticateUser() {
      localStorage.setItem('user',{name : "Dummy"});      
    }

    static isUserAuthenticated() {
      if(localStorage.getItem('user') !== null){    
        return true 
      }
      return false
    }
    static deauthenticateUser() {
      localStorage.removeItem('user');
    }
  
  }
  
  export default Auth;