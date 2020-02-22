/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {CommandSetStructure} from "@command-socket/core";

export interface HCCSGlobalCommands extends CommandSetStructure {
	ping: {
		params: void;
		return: number;
	};
}

type HCBot = {};
type HCUser = {};

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
		return: HCBot;
	};
	"user me": {
		params: void;
		return: HCUser;
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
		return: HCUser;
	};
	"user search id": {
		params: string;
		return: HCUser;
	};
	"user search query": {
		params: string;
		return: HCUser[];
	};
	"chat send": {
		params: {threadId: string, }
	}
}

export interface HCCSBotCommands extends CommandSetStructure, HCCSGlobalCommands {

}