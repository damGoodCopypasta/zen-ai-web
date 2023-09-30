"use client";
import { useState, useRef } from "react";
import { GenerateBtn } from "./generate";
import { Message } from "./generate";
export const CustomMessage = () => {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLTextAreaElement>(null);

  const message = {
    role: "user",
    content: ref.current?.value || "",
  } as Message;

  return (
    <div className={`collapse  border-base-300 ${show && "border"}`}>
      <input
        type="checkbox"
        className="peer"
        onClick={() => setShow((state) => !state)}
      />
      <div
        className={`collapse-title ${
          show &&
          "message-background preview border-base-300 bg-base-100 rounded-b-box rounded-tr-box"
        }`}
      >
        <span className={`btn ${show ? "btn-ghost" : "btn-primary"}`}>
          CUSTOM_MESSAGE
        </span>
      </div>
      <div
        className={`collapse-content ${
          show &&
          "message-background preview border-base-300 bg-base-100 rounded-b-box rounded-tr-box"
        }`}
      >
        <textarea
          ref={ref}
          className="textarea textarea-bordered w-full"
          placeholder="Hi! I have a question..."
        ></textarea>
        <GenerateBtn messages={[message]} canCopy={false}/>
      </div>
    </div>
  );
};
