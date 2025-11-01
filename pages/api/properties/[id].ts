import { NextApiRequest, NextApiResponse } from 'next';
import { PROPERTYLISTINGSAMPLE } from '@/constants';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.id === id);

  if (!property) {
    return res.status(404).json({ message: 'Property not found' });
  }

  return res.status(200).json(property);
}
