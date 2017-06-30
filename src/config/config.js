import Env from './env'

const ajaxUrl = Env === 'development'
  ? 'http://127.0.0.1:8888'
  : Env === 'production'
  ? 'https://www.url.com'
  : 'https://debug.url.com'

let config = {
  api: ajaxUrl
}
export default config
