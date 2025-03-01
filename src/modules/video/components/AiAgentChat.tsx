"use client";

import { useChat } from "@ai-sdk/react";
import { Button, Input } from "@heroui/react";

type AiAgentChatProps = {
  videoId: string;
};

export const AiAgentChat = ({ videoId }: AiAgentChatProps) => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    maxSteps: 5,
    body: {
      videoId,
    },
  });

  return (
    <div className="flex flex-col h-full">
      <div className="hidden lg:block px-4 pb-3 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800">AI Agent</h2>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="space-y-6">
          {messages.length === 0 && (
            <div className="felx items-center justify-center h-full min-h-[200px]">
              <div className="text-center space-y-2">
                <h3 className="text-lg font-medium text-gray-700">
                  Welcome to AI Agent Chat
                </h3>
                <p className="text-sm text-gray-500">
                  Ask any question about your video!
                </p>
              </div>
            </div>
          )}
          {messages.map((m) => (
            <div key={m.id}>
              <p>{m.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-100 p-4 bg-white">
        <div className="space-y-3">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              variant="flat"
              type="text"
              classNames={{
                inputWrapper:
                  "flex-1 px-4 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              }}
              value={input}
              onChange={handleInputChange}
              placeholder="Enter a question..."
            />
            <Button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
