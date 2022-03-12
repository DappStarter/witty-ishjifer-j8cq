require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture story rifle payment essay grid clog metal genre'; 
let testAccounts = [
"0x29cdb5ef2cfad0a00c5f3235c32bc1bc813220727b24104b2e5778dae3d9547b",
"0x681bd278b75f67217f50500a07e071ad8b087947330218fd2a898cb6525d29b0",
"0xd23f7a9d38ed93f02e9ac140a981bc5fa77f2a6ee548f6954891bc04040c728f",
"0x64530735943fe7428c220e1d43b13a11f24bd38b69f414528d16a5e3920fbe41",
"0xf3d89f9d2ee0c4b1682063b178460784a1fe005b16485d149160ce4cd89b3ea1",
"0x039d7298eaef9e4293dfc069029999741d5021be42649a69b31e1ae4024c5364",
"0x3925feb4cb3f81362c92a0104fc8b49ee9b1ad28dbaa1a2949853ec8a5d4f6d2",
"0x112e8b678ede768e4c357ba3c3a22c276c7c051a5429f1b708e7f3b47c02c6a0",
"0x9b8dcad6f4590f3af241277437d9aca07f4c357ebab0dd40debbfbd1888ac894",
"0x9efd05558a330df6dabff8af7744bde68a058dea6432bb728ff8c42f18b621b1"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


