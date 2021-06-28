require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid narrow fortune stone strike rival magic history give kite army general'; 
let testAccounts = [
"0xb3023765b763478af1742ee96eadaab47bb15a4bb53c3fb599baff80042ae937",
"0x816b0c4aedb379e6c3386fe45445d32a2163a899abe229657322f67644779ed6",
"0xf999ef4ece6f7aa4b26b3b0c4da085871d57523dd647536d6fa5e3dbee5babd9",
"0x803a397640b79f41f185b8d78d137e9b3e2be24844986b946cb3257f8fe9c794",
"0x099e8dd492fd0980be92c1f45df3def0e184bcf628635aae4a012155c42ae47f",
"0xa947db85369ee1f47a068c8d1c03effa6719d325a25024945815370f976d860f",
"0xbd35c6fbc8b2f752bb3c6d8a9b645ace424d9baaa6f21998293156066c2ffb1c",
"0x882cd424736512490d2de5ea025bee9aa2bc15946001852ea656921bc5f44af1",
"0x5d238f7fdba1147b2901a0fee2058814d5e2b9629c30723a5a1013e52a58eeb0",
"0xb927adc03977e258ee70f48136012fcd5ab98ff9b70ea3880e2f36ad9e981a7e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

