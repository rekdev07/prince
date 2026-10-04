type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

type Response = {
	ok: boolean
	error?: string
	result?: object
}

async function fetcher(url: string, method: Method, body: object) {
	const response: Response = {
		ok: false,
	}

	try {
		const request = await fetch(url, {
			method: method,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		})

		response.ok = request.ok

		if (!response.ok) {
			response.error = 'There was a network error, try again later.'
			console.log('Here')
		}

		response.result = await request.json()
	} catch (e) {
		response.ok = false
		response.error = `There was a network error, try again later. ${e}`
	}

	return response
}

export default fetcher
