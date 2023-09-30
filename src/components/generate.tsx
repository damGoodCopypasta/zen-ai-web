// client component
"use client";

import React, { useState, useRef } from "react";
export type Message = { role: "user" | "assistant"; content: string };
export const GenerateBtn = ({
  messages,
  canCopy = true,
}: {
  messages: Message[];
  canCopy?: boolean;
}) => {
  const [data, setData] = useState<null | {
    data: {
      message: string;
    };
  }>(null);

  const [showToast, setShowToast] = useState(false);

  //   show toast for 3 seconds then set to false again
  const toggleToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const [isLoading, setLoading] = useState<null | Boolean>(null);
  const messageRef = useRef<HTMLElement>(null);
  const handler = () => {
    // setLoading(false);
    // setData({ data: { message: "hello" } });
    // return;
    setLoading(true);
    fetch(`/ticket/api/generate/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages }),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  };
  const message = data?.data.message;

  const copyRefText = () => {
    toggleToast();
    if (messageRef.current) {
      const text = messageRef.current.innerText;
      navigator.clipboard.writeText(text);
    }
  };

  return (
    <>
      {(isLoading === null || (message && !canCopy)) && (
        <div className="w-full flex justify-end">
          <button onClick={() => handler()} className="btn m-4 mb-0">
            GENERATE_RESPONSE
          </button>
        </div>
      )}
      {isLoading !== null && (
        <>
          <div className="chat chat-end ">
            <div className="chat-header">Zen-AI</div>
            <div className="chat-bubble chat-bubble-primary">
              {isLoading ? (
                <span className="loading loading-dots loading-sm"></span>
              ) : (
                <span className="whitespace-pre-line" ref={messageRef}>
                  {message}
                </span>
              )}
            </div>
          </div>
          {message && canCopy && (
            <div className="w-full flex justify-end">
              <button
                onClick={copyRefText}
                className="btn btn-secondary m-4 mb-0"
              >
                COPY_RESPONSE
              </button>
            </div>
          )}
          {showToast && (
            <div className="toast toast-end">
              <div className="alert alert-info">
                <span>MESSAGE_COPIED</span>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};
