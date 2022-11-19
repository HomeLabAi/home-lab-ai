import { store } from "../redux/stores/store.redux";
import { AddResult } from "ipfs-core-types/src/root";

const getIPFSUrlFromPath = ({ path }: { path: string }) => {
	return `ipfs://${path}`;
};

const getIPFSPath = (url: string) => {
	return url.replace("ipfs://", "");
};

const getIPFSClient = (ipfsUrl: string) => {
	const env = store.getState().environment;
	return ipfsUrl.replace("ipfs://", env.infura.DEDICATED_GATEWAY_SUBDOMAIN!);
};

const upload = (data: any): Promise<AddResult> => {
	const ipfs = store.getState().ipfsService!;
	return ipfs.add(data);
};

const download = async (url: string): Promise<Buffer[]> => {
	const ipfs = store.getState().ipfsService!;
	const downloadResult: AsyncIterable<Uint8Array> = ipfs.cat(getIPFSPath(url));

	const response: Uint8Array[] = [];
	for await (const part of downloadResult) {
		response.push(part);
	}

	return response.map((item) => Buffer.from(item));
};

const IPFS = {
	getIPFSUrlFromPath,
	getIPFSPath,
	getIPFSClient,
	upload,
	download,
};

export default IPFS;
