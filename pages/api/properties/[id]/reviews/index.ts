import { NextApiRequest, NextApiResponse } from 'next';
import { review } from '@/constants';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    const Reviews = review[id] || [];
    return res.status;
  }
}
