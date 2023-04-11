import { NextApiRequest, NextApiResponse } from "next"

export default (request: NextApiRequest, response: NextApiResponse) => {
    const id = request.query;

    console.log(id);
    
    const users = [
        {id: 1, name: 'Diego'},
        {id: 2, name: 'Dani'},
        {id: 1, name: 'Rafa'},
    ]

    return response.json(users);
}
