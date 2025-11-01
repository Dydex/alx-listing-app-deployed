import { NextApiRequest, NextApiResponse } from 'next';
import { PROPERTYLISTINGSAMPLE } from '@/constants';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json(PROPERTYLISTINGSAMPLE);
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
