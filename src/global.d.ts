declare global {
  interface Window {
    appChatClient?: (
      config: { chatId: string },
      options: {
        host: HTMLElement | null;
        injectStyles?: string;
      }
    ) => void;
  }
}

export {};
