import axios from 'axios'

const BREAK_API_URL = 'https://853tszi6z4.execute-api.us-east-2.amazonaws.com/prod'

class BreakService {
    static async startSession({email, started = true, completed = false}) {
        const session = await axios({
            url: `${BREAK_API_URL}/sessions/start`,
            method: 'put',
            data: {email, started, completed}
        })
        return session
    }

    static async completeSession({email, started = true, completed = false}) {
        const session = await axios({
            url: `${BREAK_API_URL}/sessions/complete`,
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
            debugger
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
            return sessions.data
        } catch(err) {
            console.error(err)
            return null
        }
    }

}

export default BreakService
