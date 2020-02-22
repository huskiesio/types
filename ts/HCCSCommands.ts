/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {CommandSetStructure} from "@command-socket/core";

export interface IHCUser {
	firstName: string;
	lastName: string;
	username: string;
	publicKey: Buffer;
}

export interface IHCThread {
	name: string;
	description: string;
	memberIds: string[];
}

export interface IHCMessage {
	senderId: string;
	threadId: string;
	payload: string;
}

export interface IHCDevice {
	userId: string;
	name: string;
	publicKey: Buffer;
}

export interface IHCDirectoryContact {
	firstName: string;
	lastName: string;
	username: string;
}

export interface HCCSGlobalCommands extends CommandSetStructure {
	ping: {
		params: void;
		return: number;
	};
}

export interface HCCSServerCommands extends CommandSetStructure, HCCSGlobalCommands {
	"signUp start": {
		params: {email: string, password: string, userPublicKey: string, devicePublicKey: string};
		return: void;
	};
	"signUp finish": {
		params: {username: string, code: number};
		return: void;
	};
	"signIn": {
		params: {username: string, password: string};
		return: void;
	};
	"user me": {
		params: void;
		return: IHCUser;
	};
	"user me avatar get": {
		params: void;
		return: Buffer;
	};
	"user me avatar set": {
		params: Buffer;
		return: void;
	};
	"user me password": {
		params: {current: string, new: string};
		return: void;
	};
	"user search username": {
		params: string;
		return: IHCUser;
	};
	"user search id": {
		params: string;
		return: IHCUser;
	};
	"user search query": {
		params: string;
		return: IHCUser[];
	};
	"chat send": {
		params: {threadId: string, payload: {[userId: string]: Buffer}};
		return: void;
	};
	"chat history me": {
		params: void;
		return: IHCMessage[];
	};
	"chat history in": {
		params: string;
		return: IHCMessage[];
	};
	"crypto user publicKey": {
		params: string;
		return: Buffer;
	};
	"crypto device publicKey": {
		params: string;
		return: Buffer;
	};
	"registration user privateKey": {
		params: {salt: Buffer, password: Buffer};
		return: void;
	};
	"registration user device publicKeys": {
		params: string;
		return: {[deviceId: string]: Buffer};
	};
}

export interface HCCSBotCommands extends CommandSetStructure, HCCSGlobalCommands {
	"me avatar": {
		params: Buffer;
		return: void;
	};
	"registration provideUserPrivateKey": {
		params: {newDevicePublicKey: Buffer, hashedPasswordProvided: Buffer, salt: Buffer};
		return: Buffer;
	};
	"chat message received": {
		params: {threadId: string, senderId: string, payload: Buffer, timestamp: number};
		return: void;
	};
	"chat message sent": {
		params: {threadId: string, payload: Buffer, timestamp: number};
		return: void;
	};
}
