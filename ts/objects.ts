/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

export type IHCAPICurried<T extends { [key: string]: any }> = { [K in keyof T]: () => T[K] };

export interface IHCAPIUser {
	firstName: string;
	lastName: string;
	username: string;
	publicKey: Buffer;
}

export interface IHCAPIThread {
	name: string;
	description: string;
	memberIds: string[];
}

export interface IHCAPIMessage {
	senderId: string;
	threadId: string;
	payload: Buffer;
}

export interface IHCAPIDevice {
	userId: string;
	name: string;
	publicKey: Buffer;
}

export interface IHCAPIDirectoryContact {
	firstName: string;
	lastName: string;
	username: string;
}