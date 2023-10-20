import { Orbis } from '@orbisclub/orbis-sdk';
import {
  IConversation,
  IConversationOptions,
  IGetConversations,
  ILoginRes,
  ILogoutRes,
  IMessage,
  IMessageContent,
  ISendMessageContent
} from '../types';

export const orbis = new Orbis();

export const api = {
  connect_v2: (): Promise<ILoginRes> =>
    orbis.connect_v2({
      chain: 'ethereum',
      lit: true
    }),
  logout: (): Promise<ILogoutRes> => orbis.logout(),
  isConnected: (): Promise<ILoginRes> => orbis.isConnected(),
  getConversations: (
    params: IGetConversations
  ): Promise<{ data: IConversation[]; error?: any }> =>
    orbis.getConversations(params),
  createConversation: (
    params: IConversationOptions
  ): Promise<{
    doc: string;
    result: string;
    status: number;
  }> => orbis.createConversation(params),
  getConversation: (
    stream_id: string
    // error?: any
  ): Promise<{ data: IConversation; error: any }> =>
    orbis.getConversation(stream_id),
  getMessages: (
    conversation_id: string
    // error?: any
  ): Promise<{ data: IMessage[]; error: any }> =>
    orbis.getMessages(conversation_id),
  decryptMessage: (
    params: IMessageContent
  ): Promise<{ status: number; result: string }> =>
    orbis.decryptMessage(params),
  sendMessage: (content: ISendMessageContent, data: { [key: string]: any }) =>
    orbis.sendMessage(content, data)
};
