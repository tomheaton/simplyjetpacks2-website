import type {NextApiRequest, NextApiResponse} from 'next';

type Data = {
    name: string
}

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
    res.status(200).json({name: 'Simply Jetpacks'})
}

export default handler;
