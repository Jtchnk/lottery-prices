import base from "./base"
import production from "./production"
import staging from "./staging"
const envConfig = {
    staging:staging,
    production:production
}
const stage = process.env.REACT_APP_STAGE
const configs = {...base, ...envConfig[stage]}
export default configs