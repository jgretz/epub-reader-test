import fs from 'fs';
import path from 'path';

export default (req, res) => {
  const filePath = path.join(__dirname, '../../books', `${req.query.name}.epub`);

  if (!fs.existsSync(filePath)) {
    res.status(404).send('Requested book does not exist.');
    return;
  }

  res.sendFile(filePath);
};
