import * as http from 'http';
import { AddressInfo } from 'net';

const server = http.createServer((req, res) => {
  res.write('hi');
  res.end();
});

server.listen(0, 'localhost', function() {
  const adress = server.address() as AddressInfo;

  console.log('Port', adress.port);
});
