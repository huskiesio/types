/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {CommandSetStructure} from "@command-socket/core";
import {IHCAPIMessage, IHCAPIUser} from "./objects";

export interface HCCSGlobalCommands extends CommandSetStructure {
	ping: {
		parameter: void;
		return: number;
		name: "";
	};
}

export interface HCCSServerCommands extends CommandSetStructure, HCCSGlobalCommands {
	"signUp start": {
		parameter: {email: string, password: string, userPublicKey: string, devicePublicKey: string};
		return: void;
		name: "";
	};
	"signUp finish": {
		parameter: {username: string, code: number};
		return: void;
		name: "";
	};
	"signIn": {
		parameter: {username: string, password: string};
		return: void;
		name: "";
	};
	"user me": {
		parameter: void;
		return: IHCAPIUser;
		name: "";
	};
	"user me avatar get": {
		parameter: void;
		return: Buffer;
		name: "";
	};
	"user me avatar set": {
		parameter: Buffer;
		return: void;
		name: "";
	};
	"user me password": {
		parameter: {current: string, new: string};
		return: void;
		name: "";
	};
	"user search username": {
		parameter: string;
		return: IHCAPIUser;
		name: "";
	};
	"user search id": {
		parameter: string;
		return: IHCAPIUser;
		name: "";
	};
	"user search query": {
		parameter: string;
		return: IHCAPIUser[];
		name: "";
	};
	"chat send": {
		parameter: {threadId: string, payload: {[userId: string]: Buffer}};
		return: void;
		name: "";
	};
	"chat history me": {
		parameter: void;
		return: IHCAPIMessage[];
		name: "";
	};
	"chat history in": {
		parameter: string;
		return: IHCAPIMessage[];
		name: "";
	};
	"crypto user publicKey": {
		parameter: string;
		return: Buffer;
		name: "";
	};
	"crypto device publicKey": {
		parameter: string;
		return: Buffer;
		name: "";
	};
	"registration user privateKey": {
		parameter: {salt: Buffer, password: Buffer};
		return: void;
		name: "";
	};
	"registration user device publicKeys": {
		parameter: string;
		return: {[deviceId: string]: Buffer};
		name: "";
	};
}

export interface HCCSBotCommands extends CommandSetStructure, HCCSGlobalCommands {
	"me avatar": {
		parameter: Buffer;
		return: void;
		name: "";
	};
	"registration provideUserPrivateKey": {
		parameter: {newDevicePublicKey: Buffer, hashedPasswordProvided: Buffer, salt: Buffer};
		return: Buffer;
		name: "";
	};
	"chat message received": {
		parameter: {threadId: string, senderId: string, payload: Buffer, timestamp: number};
		return: void;
		name: "";
	};
	"chat message sent": {
		parameter: {threadId: string, payload: Buffer, timestamp: number};
		return: void;
		name: "";
	};
}
