import nodeBits from 'node-bits';
import nodeBitsExpress, {cors, bodyParser, accessControl} from 'node-bits-express';
import nodeBitsCode from 'node-bits-code';
import nodeBitsSpa from 'node-bits-spa';

import express from 'express';
import path from 'path';

nodeBits([
  nodeBitsExpress({
    port: 4004,
    configurations: [
      accessControl(),
      cors(),
      bodyParser({}),

      app => {
        app.use('/books', express.static(path.join(__dirname, 'books')));
      },
    ],
  }),
  nodeBitsCode({
    path: `${__dirname}`,
  }),
  nodeBitsSpa({path: `${__dirname}/site`}),
]);
