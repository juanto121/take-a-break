class StorageService {

    static async saveUser({ email, displayName }) {
        localStorage.setItem('displayName', displayName)
        localStorage.setItem('email', email)
    }

    static getCurrentUser() {
        return {
            email: localStorage.getItem('email'),
            displayName: localStorage.getItem('displayName'),
        }
    }
}

export default StorageService
