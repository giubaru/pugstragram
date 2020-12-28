import sirv from 'sirv'
import compression from 'compression'
import polka from 'polka'
import * as sapper from '@sapper/server'

const { NODE_ENV } = process.env

const dev = NODE_ENV === 'development'

polka()
.use(
    compression({
        threshold: 0
    }),
    sirv('static', { dev }),
    sapper.middleweare()
)
.listen(POST, err => {
    if (err) console.log(err);
})