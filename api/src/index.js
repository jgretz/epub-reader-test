import nodeBits from 'node-bits';
import nodeBitsExpress from 'node-bits-express';
import nodeBitsCode from 'node-bits-code';

nodeBits([
  nodeBitsExpress({
    port: 4004,
  }),
  nodeBitsCode({
    path: `${__dirname}`,
  }),
]);