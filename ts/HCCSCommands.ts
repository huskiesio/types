/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {CommandSetStructure} from "@command-socket/core";
import {IHCAPIMessage, IHCAPIThread, IHCAPIUser} from "./objects";

export interface HCCSGlobalCommands extends CommandSetStructure {
	ping: {
		parameter: void;
		return: number;
	};
}

export interface HCCSServerCommands extends CommandSetStructure, HCCSGlobalCommands {
	"signUp start": {
		parameter: {
			email: string,
			password: string,
			userPublicKey: Buffer,
			devicePublicKey: Buffer,
			firstName: string,
			lastName: string,
			deviceName: string
		};
		return: void;
	};
	"signUp finish": {
		parameter: string;
		return: void;
	};
	"signIn start": {
		parameter: {username: string, password: string, deviceId: string, devicePublicKey: Buffer, needsUserPrivateKey: boolean};
		return: Buffer;
	};
	"signIn finish": {
		parameter: {signature: Buffer};
		return: void;
	};
	"user me": {
		parameter: void;
		return: IHCAPIUser;
	};
	"user me avatar get": {
		parameter: void;
		return: Buffer | undefined;
	};
	"user me avatar set": {
		parameter: Buffer;
		return: void;
	};
	"user me password": {
		parameter: {current: string, new: string};
		return: void;
	};
	"user search username": {
		parameter: string;
		return: IHCAPIUser | undefined;
	};
	"user search id": {
		parameter: string;
		return: IHCAPIUser | undefined;
	};
	"user search query": {
		parameter: string;
		return: IHCAPIUser[];
	};
	"chat send": {
		parameter: {threadId: string, payload: {[userId: string]: Buffer}};
		return: void;
	};
	"chat history me messages": {
		parameter: void;
		return: IHCAPIMessage[];
	};
	"chat history me threads": {
		parameter: void;
		return: IHCAPIThread[];
	};
	"chat history in": {
		parameter: void;
		return: IHCAPIMessage[];
	};
	"crypto user publicKey": {
		parameter: string;
		return: Buffer;
	};
	"crypto device publicKey": {
		parameter: string;
		return: Buffer;
	};
	"registration user privateKey": {
		parameter: {salt: Buffer, password: Buffer};
		return: void;
	};
	"registration user device publicKeys": {
		parameter: string;
		return: {[deviceId: string]: Buffer};
	};
}

export interface HCCSBotCommands extends CommandSetStructure, HCCSGlobalCommands {
	"me avatar": {
		parameter: Buffer;
		return: void;
	};
	"registration provideUserPrivateKey": {
		parameter: {newDevicePublicKey: Buffer, hashedPasswordProvided: Buffer, salt: Buffer};
		return: Buffer;
	};
	"chat message received": {
		parameter: {threadId: string, senderId: string, payload: Buffer, timestamp: number};
		return: void;
	};
	"chat message sent": {
		parameter: {threadId: string, payload: Buffer, timestamp: number};
		return: void;
	};
}
