import Link from "next/link";
import Age from "./age";

export interface Ticket {
  id: number;
  email: string;
  name: string;
  status: Status;
  age: string;
  subject: string;
}

export enum Status {
  New = "new",
  Open = "open",
}


const getInitials = (name: string) => {
  const [first, last] = name.split(" ");
  return `${first[0]}${last ? last[0] : ""}`;
};

export const Table = async () => {
  // test suspense by waiting here
  const data = await fetch("http://127.0.0.1:8000/tickets", {
    cache: "no-store",
  });
  const tickets = (await data.json()) as Ticket[];

  return (
    <div className="overflow-x-auto w-full">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th className="hidden md:block">Name</th>
            <th>Ticket</th>
            <th>Age</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {tickets.map(({ id, name, email, status, subject, age }) => {
            return (
              <tr key={id}>
                <td className="hidden md:block">
                  <div className="flex items-center space-x-3">
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content w-12 h-12 mask mask-square">
                        <span className="text-xl">{getInitials(name)}</span>
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{name}</div>
                      <div className="text-sm opacity-50">{email}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {subject}
                  <br />
                  <span className="badge badge-ghost badge-sm">{status}</span>
                </td>
                <td>
                 <Age date={age} />
                </td>
                <th>
                  <Link className="btn btn-ghost btn-xs" href={`/ticket/${id}`}>
                    VIEW
                  </Link>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
