// import { CID } from 'multiformats/cid';
// import { create, IPFSHTTPClient } from 'kubo-rpc-client'

export const add = (a: number, b: number): number => {
    return a + b;
};

// export async function getIPFSContentID(ipfs: IPFSHTTPClient, content: string) {
//     const cid = await ipfs.dag.put(content, { storeCodec: 'dag-cbor', hashAlg: 'sha2-256' });
//     return cid.toString();
// }

// export async function getIPFSDataFromContentID(ipfs: IPFSHTTPClient, cidStr: string) {
//     const cid = CID.parse(cidStr);
//     const result = await ipfs.dag.get(cid);
//     return result;
// }