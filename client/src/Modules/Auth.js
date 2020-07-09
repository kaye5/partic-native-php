class Auth {
    static authenticateUser(token) {
      localStorage.setItem('user',token);
    }

    static isUserAuthenticated() {
      try {
        let token = localStorage.getItem('user')
        if(!token)
          return false
        return true
      } catch (error) {
          return false
      }      
    }
    static deauthenticateUser() {
      localStorage.removeItem('user');
    }
  
  }
  
  export default Auth;