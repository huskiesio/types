/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

export type IHCAPICurried<T extends { [key: string]: any }> = { [K in keyof T]: () => T[K] };

export interface IHCAPIBase {
	id: string;
	updatedAt: number;
	createdAt: number;
}

export interface IHCAPIUser extends IHCAPIBase{
	firstName: string;
	lastName: string;
	username: string;
	publicKey: Buffer;
}

export interface IHCAPIThread extends IHCAPIBase {
	name: string;
	description: string;
	memberIds: string[];
}

export interface IHCAPIMessage extends IHCAPIBase {
	senderId: string;
	threadId: string;
	payload: Buffer;
}

export interface IHCAPIDevice extends IHCAPIBase {
	userId: string;
	name: string;
	publicKey: Buffer;
}

export interface IHCAPIDirectoryContact extends IHCAPIBase {
	firstName: string;
	lastName: string;
	username: string;
}