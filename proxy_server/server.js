var http = require('http'),
    httpProxy = require('http-proxy');

httpProxy.createProxyServer({target:'https://practical-patient-market.solana-mainnet.discover.quiknode.pro/6c7ec62487b31cda67f728f3f5e9ec01da1d1166/', changeOrigin:true}).listen(8899);
console.log("listening on: 8899");