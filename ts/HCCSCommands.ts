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
		parameter: boolean;
		return: number;
	};
}

export interface HCCSServerCommands extends CommandSetStructure, HCCSGlobalCommands {
	"signUp start": {
		parameter: {
			email: string,
			password: string,
			userPublicKey: string,
			devicePublicKey: string,
			firstName: string,
			lastName: string,
			deviceName: string
		};
		return: string;
	};
	"signUp finish": {
		parameter: {code: string, token: string};
		return: string;
	};
	"signIn start": {
		parameter: {username: string, password: string, deviceId: string, devicePublicKey?: string, needsUserPrivateKey?: boolean};
		return: string;
	};
	"signIn finish": {
		parameter: {signature: string};
		return: boolean;
	};
	"user me": {
		parameter: boolean;
		return: IHCAPIUser;
	};
	"user me avatar get": {
		parameter: void;
		return: string | undefined;
	};
	"user me avatar set": {
		parameter: string;
		return: void;
	};
	"user me password": {
		parameter: {current: string, new: string};
		return: boolean;
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
	"chat thread keys": {
		parameter: string;
		return: {[userId: string]: string};
	};
	"chat send": {
		parameter: {threadId: string, payload: {[userId: string]: string}};
		return: boolean;
	};
	"chat thread create": {
		parameter: {members: string[], name: string, description: string};
		return: string;
	};
	"chat thread": {
		parameter: string;
		return: IHCAPIThread | undefined;
	};
	"chat thread member add": {
		parameter: {threadId: string, userId: string};
		return: boolean
	};
	"chat thread member remove": {
		parameter: {threadId: string, userId: string};
		return: boolean;
	};
	"chat thread my": {
		parameter: boolean;
		return: IHCAPIThread[];
	};
	"chat history": {
		parameter: {messageId: string, relativeHistory: number},
		return: IHCAPIMessage[];
	};
	"crypto user publicKey": {
		parameter: string;
		return: string | undefined;
	};
	"crypto device publicKey": {
		parameter: string;
		return: string | undefined;
	};
	"registration user privateKey": {
		parameter: {salt: string, password: string};
		return: boolean;
	};
	"registration user device publicKeys": {
		parameter: string;
		return: {[deviceId: string]: string};
	};
}

export interface HCCSBotCommands extends CommandSetStructure, HCCSGlobalCommands {
	"me avatar": {
		parameter: string;
		return: boolean;
	};
	"registration provideUserPrivateKey": {
		parameter: {newDevicePublicKey: string, hashedPasswordProvided: string, salt: string};
		return: string;
	};
	"chat message received": {
		parameter: {threadId: string, senderId: string, payload: string, timestamp: number};
		return: boolean;
	};
	"chat message sent": {
		parameter: {threadId: string, payload: string, timestamp: number};
		return: boolean;
	};
	"thread updated": {
		parameter: string;
		return: boolean;
	};
}
