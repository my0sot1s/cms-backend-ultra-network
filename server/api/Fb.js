import request from 'request'
import Promise from 'promise'
const router = require("express").Router()

// https://graph.facebook.com/oauth/access_token?client_id=125391211209683&client_secret=8c36675ad46eca0e3f85ae2469a9d82c&grant_type=client_credentials
const access_token = "125391211209683|oCDtzfS1snnja0vN0fyYQE7uFeo"
let url = `https://graph.facebook.com/v2.9/`

async function getInfor(_body) {
    const promises = function (id) {
        return new Promise(function (resolve, reject) {
            var link = `${url}${id}?fields=id,name,gender,about,birthday,link,picture,email&type=large&access_token=${access_token}`
            request(link, (err2, res2, body2) => {
                if (!err2 && res2 && res2.statusCode === 200) {
                    resolve(JSON.parse(body2, null, 2))
                } else {
                    reject(err2)
                }
            })
        })
    }
    let arr = []
    const len = _body.data.length
    for (var i = 0; i < len; i++) {
        const ii = await promises(_body.data[i].id)
        arr.push(ii)
    }
    return arr;

}
router.get('/fb', function (req, res) {
    res.sendFile("..")
})
// https://graph.facebook.com/v2.9/1632062990381722/members?limit=10&access_token=125391211209683|oCDtzfS1snnja0vN0fyYQE7uFeo
router.get('/fb/:id', function (req, res) {
    let limit = Number(req.query.limit) || 5
    let id = Number(req.params.id)
    request(`${url}${id}/members?limit=${limit}&access_token=${access_token}`, function (error, response, body) {
        if (!error && response && response.statusCode === 200) {
            const _body = JSON.parse(body)

            // see at:https://developers.facebook.com/docs/graph-api/reference/user/ 

            getInfor(_body).then(array => {
                res.json(array)
            }).catch(err => {
                res.send({ err })
            })
        } else
            res.send({ error })
    });
})

export default router