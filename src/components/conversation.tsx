import Age from "./age";
import { GenerateBtn } from "./generate";
import { Message } from "./generate";
export const Conversation = async ({ ticket }: { ticket: string }) => {
  const data = await fetch(
    `http://${process.env.DOMAIN}:8000/comments?ticket=${ticket}`,
    {
      cache: "no-store",
    }
  );
  const conversation = (await data.json()) as any[];
  const messages = conversation.map(
    ({ author, body }) =>
      ({
        role: author === "tek wellness" ? "assistant" : "user",
        content: body,
      } as Message)
  );
  return (
    <div className="message-background preview border-base-300 bg-base-100 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 undefined">
      <div className="w-screen">
        {conversation.map((message, index) => {
          return (
            <div
              className={`chat ${
                message.author === "tek wellness" ? "chat-end" : "chat-start"
              }`}
              key={index}
            >
              <div className="chat-header">{message.author}</div>
              <div className="chat-bubble">{message.body}</div>
              <time className="chat-footer text-xs opacity-50">
                <Age date={message.age} />
              </time>
            </div>
          );
        })}

        <GenerateBtn messages={messages} ticket={ticket}/>
      </div>
    </div>
  );
};
