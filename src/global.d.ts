declare global {
  interface Window {
    appChatClient?: (
      config: { chatId: string },
      options: {
        host: HTMLElement | null;
        injectStyles?: string;
      }
    ) => Promise<{ api: { open: () => void } }>;
  }
}

export {};
