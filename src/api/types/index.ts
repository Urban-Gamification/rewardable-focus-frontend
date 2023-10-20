export interface ILoginRes {
  status: number;
  did: string;
  result: string;
  details: {
    did: string;
    profile: {
      pfp: string;
      username: string;
      description: string;
    };
  };
}

export interface ILogoutRes {
  status: number;
  result: string;
}

export interface IProfileRes {
  did: string;
  profile: {
    username: string;
    description: string;
    pfp: string;
  };
  encrypted_email: {
    encryptedString: string;
    encryptedSymmetricKey: string;
    accessControlConditions: string;
  };
  count_followers: number;
  count_following: number;
  last_activity_timestamp: number;
}

export interface IUpdateProfileRes {
  status: number;
  doc: string;
  result: string;
}

export interface ISetEmailRes {
  status: number;
  doc: string;
  result: string;
  encryptedEmail: {
    encryptedString: string;
    encryptedSymmetricKey: string;
    accessControlConditions: string;
  };
}

export interface IGetConversations {
  did: string;
  context: string;
}

export interface IConversationOptions {
  recipients: string[];
  name?: string;
  description?: string;
  context?: string;
}

export interface IConversation {
  content: {
    name: string;
    context: string;
  };
  context: string;
  details: {
    creator: string;
  };
  recipients: string[];
  stream_id: string;
}

export interface ProfilesByUsername {
  result: number;
  data: IProfileRes[];
  error: string | null;
}

export interface IMessageContent {
  conversation_id: string;
  encryptedMessage: {
    encryptedString: string;
    encryptedSymmetricKey: string;
    // accessControlConditions: '[]';
  };
}

export interface IMessage {
  stream_id: string;
  conversation_id: string;
  creator: string;
  content: IMessageContent;
  creator_details: {
    did: string;
    profile: {
      username: string;
      pfp: string;
    };
  };
}

export interface ISendMessageContent {
  conversation_id: string;
  body: string;
}
