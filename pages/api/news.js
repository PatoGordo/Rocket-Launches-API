const fetch = require('node-fetch')
import cors from '../../lib/cors'

export default async function News(req, res){
	await cors(req, res)
	
	const apiBase = await fetch('https://www.spaceflightnewsapi.net/api/v2/articles?_limit=5')
	const json = await apiBase.json()
	
	res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')

	res.json(json)
}