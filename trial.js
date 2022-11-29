const ipfsClient = require('ipfs-http-client');

const projectId = '2IBb5XxOwdDQ4jwYGOxlPgmBDR3';
const projectSecret = '61df2961ce041fcca0f7fb81f90f1b9a';
const auth =
    'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const client = ipfsClient.create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
});

client.pin.add('QmeGAVddnBSnKc1DLE7DLV9uuTqo5F7QbaveTjr45JUdQn').then((res) => {
    console.log(res);
});