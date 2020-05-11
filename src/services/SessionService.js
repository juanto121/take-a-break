import axios from 'axios'

const BREAK_API_URL = 'https://2i9n0ifyi6.execute-api.us-east-2.amazonaws.com/prod'

class BreakService {
    static async upsertSession({email, started = true, completed = false}) {
        const session = await axios({
            url: `${BREAK_API_URL}/sessions`,
            method: 'put',
            data: {email, started, completed}
        })
        return session
    }

    static async getTodayRoutine() {
        try {
            const routine = await axios({
                url: `${BREAK_API_URL}/routines`,
                method: 'get'
            })
            return routine.data
        } catch(err) {
            console.error(err)
            return null
        }
    }

    static async getUserSessions(email) {
        try {
            const sessions = await axios({
                url: `${BREAK_API_URL}/sessions/${email}`,
                method: 'get'
            })
            return sessions
        } catch(err) {
            console.error(err)
            return null
        }
    }

}

export default BreakService
