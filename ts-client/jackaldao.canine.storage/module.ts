// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgCancelContract } from "./types/storage/tx";
import { MsgDeleteProofs } from "./types/storage/tx";
import { MsgSignContract } from "./types/storage/tx";
import { MsgItem } from "./types/storage/tx";
import { MsgBuyStorage } from "./types/storage/tx";
import { MsgInitMiner } from "./types/storage/tx";
import { MsgPostContract } from "./types/storage/tx";
import { MsgUpdateContracts } from "./types/storage/tx";
import { MsgSetMinerTotalspace } from "./types/storage/tx";
import { MsgDeleteActiveDeals } from "./types/storage/tx";
import { MsgUpdateMiners } from "./types/storage/tx";
import { MsgSetMinerIp } from "./types/storage/tx";
import { MsgCreateProofs } from "./types/storage/tx";
import { MsgCreateContracts } from "./types/storage/tx";
import { MsgDeleteContracts } from "./types/storage/tx";
import { MsgPostproof } from "./types/storage/tx";
import { MsgCreateMiners } from "./types/storage/tx";
import { MsgUpdateActiveDeals } from "./types/storage/tx";
import { MsgUpdateProofs } from "./types/storage/tx";
import { MsgDeleteMiners } from "./types/storage/tx";
import { MsgCreateActiveDeals } from "./types/storage/tx";


export { MsgCancelContract, MsgDeleteProofs, MsgSignContract, MsgItem, MsgBuyStorage, MsgInitMiner, MsgPostContract, MsgUpdateContracts, MsgSetMinerTotalspace, MsgDeleteActiveDeals, MsgUpdateMiners, MsgSetMinerIp, MsgCreateProofs, MsgCreateContracts, MsgDeleteContracts, MsgPostproof, MsgCreateMiners, MsgUpdateActiveDeals, MsgUpdateProofs, MsgDeleteMiners, MsgCreateActiveDeals };

type sendMsgCancelContractParams = {
  value: MsgCancelContract,
  fee?: StdFee,
  memo?: string
};

type sendMsgDeleteProofsParams = {
  value: MsgDeleteProofs,
  fee?: StdFee,
  memo?: string
};

type sendMsgSignContractParams = {
  value: MsgSignContract,
  fee?: StdFee,
  memo?: string
};

type sendMsgItemParams = {
  value: MsgItem,
  fee?: StdFee,
  memo?: string
};

type sendMsgBuyStorageParams = {
  value: MsgBuyStorage,
  fee?: StdFee,
  memo?: string
};

type sendMsgInitMinerParams = {
  value: MsgInitMiner,
  fee?: StdFee,
  memo?: string
};

type sendMsgPostContractParams = {
  value: MsgPostContract,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateContractsParams = {
  value: MsgUpdateContracts,
  fee?: StdFee,
  memo?: string
};

type sendMsgSetMinerTotalspaceParams = {
  value: MsgSetMinerTotalspace,
  fee?: StdFee,
  memo?: string
};

type sendMsgDeleteActiveDealsParams = {
  value: MsgDeleteActiveDeals,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateMinersParams = {
  value: MsgUpdateMiners,
  fee?: StdFee,
  memo?: string
};

type sendMsgSetMinerIpParams = {
  value: MsgSetMinerIp,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreateProofsParams = {
  value: MsgCreateProofs,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreateContractsParams = {
  value: MsgCreateContracts,
  fee?: StdFee,
  memo?: string
};

type sendMsgDeleteContractsParams = {
  value: MsgDeleteContracts,
  fee?: StdFee,
  memo?: string
};

type sendMsgPostproofParams = {
  value: MsgPostproof,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreateMinersParams = {
  value: MsgCreateMiners,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateActiveDealsParams = {
  value: MsgUpdateActiveDeals,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateProofsParams = {
  value: MsgUpdateProofs,
  fee?: StdFee,
  memo?: string
};

type sendMsgDeleteMinersParams = {
  value: MsgDeleteMiners,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreateActiveDealsParams = {
  value: MsgCreateActiveDeals,
  fee?: StdFee,
  memo?: string
};


type msgCancelContractParams = {
  value: MsgCancelContract,
};

type msgDeleteProofsParams = {
  value: MsgDeleteProofs,
};

type msgSignContractParams = {
  value: MsgSignContract,
};

type msgItemParams = {
  value: MsgItem,
};

type msgBuyStorageParams = {
  value: MsgBuyStorage,
};

type msgInitMinerParams = {
  value: MsgInitMiner,
};

type msgPostContractParams = {
  value: MsgPostContract,
};

type msgUpdateContractsParams = {
  value: MsgUpdateContracts,
};

type msgSetMinerTotalspaceParams = {
  value: MsgSetMinerTotalspace,
};

type msgDeleteActiveDealsParams = {
  value: MsgDeleteActiveDeals,
};

type msgUpdateMinersParams = {
  value: MsgUpdateMiners,
};

type msgSetMinerIpParams = {
  value: MsgSetMinerIp,
};

type msgCreateProofsParams = {
  value: MsgCreateProofs,
};

type msgCreateContractsParams = {
  value: MsgCreateContracts,
};

type msgDeleteContractsParams = {
  value: MsgDeleteContracts,
};

type msgPostproofParams = {
  value: MsgPostproof,
};

type msgCreateMinersParams = {
  value: MsgCreateMiners,
};

type msgUpdateActiveDealsParams = {
  value: MsgUpdateActiveDeals,
};

type msgUpdateProofsParams = {
  value: MsgUpdateProofs,
};

type msgDeleteMinersParams = {
  value: MsgDeleteMiners,
};

type msgCreateActiveDealsParams = {
  value: MsgCreateActiveDeals,
};


export const registry = new Registry(msgTypes);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgCancelContract({ value, fee, memo }: sendMsgCancelContractParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCancelContract: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCancelContract({ value: MsgCancelContract.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCancelContract: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDeleteProofs({ value, fee, memo }: sendMsgDeleteProofsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDeleteProofs: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDeleteProofs({ value: MsgDeleteProofs.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDeleteProofs: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgSignContract({ value, fee, memo }: sendMsgSignContractParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgSignContract: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgSignContract({ value: MsgSignContract.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgSignContract: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgItem({ value, fee, memo }: sendMsgItemParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgItem: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgItem({ value: MsgItem.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgItem: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgBuyStorage({ value, fee, memo }: sendMsgBuyStorageParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgBuyStorage: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgBuyStorage({ value: MsgBuyStorage.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgBuyStorage: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgInitMiner({ value, fee, memo }: sendMsgInitMinerParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgInitMiner: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgInitMiner({ value: MsgInitMiner.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgInitMiner: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgPostContract({ value, fee, memo }: sendMsgPostContractParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgPostContract: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgPostContract({ value: MsgPostContract.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgPostContract: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateContracts({ value, fee, memo }: sendMsgUpdateContractsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateContracts: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateContracts({ value: MsgUpdateContracts.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateContracts: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgSetMinerTotalspace({ value, fee, memo }: sendMsgSetMinerTotalspaceParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgSetMinerTotalspace: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgSetMinerTotalspace({ value: MsgSetMinerTotalspace.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgSetMinerTotalspace: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDeleteActiveDeals({ value, fee, memo }: sendMsgDeleteActiveDealsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDeleteActiveDeals: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDeleteActiveDeals({ value: MsgDeleteActiveDeals.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDeleteActiveDeals: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateMiners({ value, fee, memo }: sendMsgUpdateMinersParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateMiners: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateMiners({ value: MsgUpdateMiners.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateMiners: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgSetMinerIp({ value, fee, memo }: sendMsgSetMinerIpParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgSetMinerIp: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgSetMinerIp({ value: MsgSetMinerIp.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgSetMinerIp: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreateProofs({ value, fee, memo }: sendMsgCreateProofsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateProofs: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateProofs({ value: MsgCreateProofs.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateProofs: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreateContracts({ value, fee, memo }: sendMsgCreateContractsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateContracts: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateContracts({ value: MsgCreateContracts.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateContracts: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDeleteContracts({ value, fee, memo }: sendMsgDeleteContractsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDeleteContracts: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDeleteContracts({ value: MsgDeleteContracts.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDeleteContracts: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgPostproof({ value, fee, memo }: sendMsgPostproofParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgPostproof: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgPostproof({ value: MsgPostproof.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgPostproof: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreateMiners({ value, fee, memo }: sendMsgCreateMinersParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateMiners: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateMiners({ value: MsgCreateMiners.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateMiners: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateActiveDeals({ value, fee, memo }: sendMsgUpdateActiveDealsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateActiveDeals: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateActiveDeals({ value: MsgUpdateActiveDeals.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateActiveDeals: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateProofs({ value, fee, memo }: sendMsgUpdateProofsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateProofs: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateProofs({ value: MsgUpdateProofs.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateProofs: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDeleteMiners({ value, fee, memo }: sendMsgDeleteMinersParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDeleteMiners: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDeleteMiners({ value: MsgDeleteMiners.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDeleteMiners: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreateActiveDeals({ value, fee, memo }: sendMsgCreateActiveDealsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateActiveDeals: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateActiveDeals({ value: MsgCreateActiveDeals.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateActiveDeals: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgCancelContract({ value }: msgCancelContractParams): EncodeObject {
			try {
				return { typeUrl: "/jackaldao.canine.storage.MsgCancelContract", value: MsgCancelContract.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCancelContract: Could not create message: ' + e.message)
			}
		},
		
		msgDeleteProofs({ value }: msgDeleteProofsParams): EncodeObject {
			try {
				return { typeUrl: "/jackaldao.canine.storage.MsgDeleteProofs", value: MsgDeleteProofs.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDeleteProofs: Could not create message: ' + e.message)
			}
		},
		
		msgSignContract({ value }: msgSignContractParams): EncodeObject {
			try {
				return { typeUrl: "/jackaldao.canine.storage.MsgSignContract", value: MsgSignContract.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgSignContract: Could not create message: ' + e.message)
			}
		},
		
		msgItem({ value }: msgItemParams): EncodeObject {
			try {
				return { typeUrl: "/jackaldao.canine.storage.MsgItem", value: MsgItem.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgItem: Could not create message: ' + e.message)
			}
		},
		
		msgBuyStorage({ value }: msgBuyStorageParams): EncodeObject {
			try {
				return { typeUrl: "/jackaldao.canine.storage.MsgBuyStorage", value: MsgBuyStorage.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgBuyStorage: Could not create message: ' + e.message)
			}
		},
		
		msgInitMiner({ value }: msgInitMinerParams): EncodeObject {
			try {
				return { typeUrl: "/jackaldao.canine.storage.MsgInitMiner", value: MsgInitMiner.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgInitMiner: Could not create message: ' + e.message)
			}
		},
		
		msgPostContract({ value }: msgPostContractParams): EncodeObject {
			try {
				return { typeUrl: "/jackaldao.canine.storage.MsgPostContract", value: MsgPostContract.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgPostContract: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateContracts({ value }: msgUpdateContractsParams): EncodeObject {
			try {
				return { typeUrl: "/jackaldao.canine.storage.MsgUpdateContracts", value: MsgUpdateContracts.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateContracts: Could not create message: ' + e.message)
			}
		},
		
		msgSetMinerTotalspace({ value }: msgSetMinerTotalspaceParams): EncodeObject {
			try {
				return { typeUrl: "/jackaldao.canine.storage.MsgSetMinerTotalspace", value: MsgSetMinerTotalspace.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgSetMinerTotalspace: Could not create message: ' + e.message)
			}
		},
		
		msgDeleteActiveDeals({ value }: msgDeleteActiveDealsParams): EncodeObject {
			try {
				return { typeUrl: "/jackaldao.canine.storage.MsgDeleteActiveDeals", value: MsgDeleteActiveDeals.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDeleteActiveDeals: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateMiners({ value }: msgUpdateMinersParams): EncodeObject {
			try {
				return { typeUrl: "/jackaldao.canine.storage.MsgUpdateMiners", value: MsgUpdateMiners.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateMiners: Could not create message: ' + e.message)
			}
		},
		
		msgSetMinerIp({ value }: msgSetMinerIpParams): EncodeObject {
			try {
				return { typeUrl: "/jackaldao.canine.storage.MsgSetMinerIp", value: MsgSetMinerIp.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgSetMinerIp: Could not create message: ' + e.message)
			}
		},
		
		msgCreateProofs({ value }: msgCreateProofsParams): EncodeObject {
			try {
				return { typeUrl: "/jackaldao.canine.storage.MsgCreateProofs", value: MsgCreateProofs.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateProofs: Could not create message: ' + e.message)
			}
		},
		
		msgCreateContracts({ value }: msgCreateContractsParams): EncodeObject {
			try {
				return { typeUrl: "/jackaldao.canine.storage.MsgCreateContracts", value: MsgCreateContracts.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateContracts: Could not create message: ' + e.message)
			}
		},
		
		msgDeleteContracts({ value }: msgDeleteContractsParams): EncodeObject {
			try {
				return { typeUrl: "/jackaldao.canine.storage.MsgDeleteContracts", value: MsgDeleteContracts.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDeleteContracts: Could not create message: ' + e.message)
			}
		},
		
		msgPostproof({ value }: msgPostproofParams): EncodeObject {
			try {
				return { typeUrl: "/jackaldao.canine.storage.MsgPostproof", value: MsgPostproof.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgPostproof: Could not create message: ' + e.message)
			}
		},
		
		msgCreateMiners({ value }: msgCreateMinersParams): EncodeObject {
			try {
				return { typeUrl: "/jackaldao.canine.storage.MsgCreateMiners", value: MsgCreateMiners.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateMiners: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateActiveDeals({ value }: msgUpdateActiveDealsParams): EncodeObject {
			try {
				return { typeUrl: "/jackaldao.canine.storage.MsgUpdateActiveDeals", value: MsgUpdateActiveDeals.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateActiveDeals: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateProofs({ value }: msgUpdateProofsParams): EncodeObject {
			try {
				return { typeUrl: "/jackaldao.canine.storage.MsgUpdateProofs", value: MsgUpdateProofs.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateProofs: Could not create message: ' + e.message)
			}
		},
		
		msgDeleteMiners({ value }: msgDeleteMinersParams): EncodeObject {
			try {
				return { typeUrl: "/jackaldao.canine.storage.MsgDeleteMiners", value: MsgDeleteMiners.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDeleteMiners: Could not create message: ' + e.message)
			}
		},
		
		msgCreateActiveDeals({ value }: msgCreateActiveDealsParams): EncodeObject {
			try {
				return { typeUrl: "/jackaldao.canine.storage.MsgCreateActiveDeals", value: MsgCreateActiveDeals.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateActiveDeals: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	
	public registry: Array<[string, GeneratedType]>;

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });
		this.tx = txClient({ signer: client.signer, addr: client.env.rpcURL, prefix: client.env.prefix ?? "cosmos" });
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			JackaldaoCanineStorage: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;