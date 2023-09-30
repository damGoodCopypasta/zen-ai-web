"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";

const handleClick = () => {
  const modal = document.getElementById("my_modal_1");
  if (modal) {
    (modal as any).showModal();
  }
};

export const Modal = ({
  ticket,
  html_body,
  onSubmit,
}: {
  ticket: string;
  html_body: () => string;
  onSubmit: () => void;
}) => {
  const router = useRouter();

  const handler = () => {
    fetch(`/ticket/api/reply/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ticket, html_body: html_body() }),
    })
      .then((res) => res.json())
      .then(() => {
        onSubmit()
        router.refresh();
      });
  };

  return (
    <>
      <button className="btn btn-success  m-4 mb-0" onClick={handleClick}>
        SEND_MESSAGE
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">CONFIRM_ACTION_SEND_MESSAGE</h3>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
              <button className="btn btn-success ml-2" onClick={handler}>
                SEND
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
