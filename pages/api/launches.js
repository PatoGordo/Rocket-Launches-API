const fetch = require('node-fetch')

export default async function Launches(req, res){
	const apiBase = await fetch('https://fdo.rocketlaunch.live/json/launches/next/5')
	const json = await apiBase.json()

	res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')

	res.json({
		result: json.result
	})
}