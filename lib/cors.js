import Cors from 'cors'
import initMiddleware from './init-middleware'

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)
export default cors