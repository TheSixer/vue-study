import Util from '@/libs/util'

export const login = data => Util.http.get('/api/login?userName=' + data.userName + '&password=' + data.password, {})
