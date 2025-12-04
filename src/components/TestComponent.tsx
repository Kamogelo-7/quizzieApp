import { useEffect, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import Layout from "../layout";
import "./styles.css";

const isLoading: boolean = true;
const data: string = "example@gmail.com";

type UserProps = {
  children: ReactNode;
};

const User = ({ children }: UserProps) => {
  return <div>{children}</div>;
};

const TraditionPropUser = ({
  userName,
  text,
}: {
  userName: string;
  text: string;
}) => {
  return (
    <div>
      <h3>{userName}</h3>
      <p>{text}</p>
    </div>
  );
};

export default function TestComponent() {
  const paragrahRef = useRef<HTMLParagraphElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log(`Welp buddy Paragraph has changed in the Dom`);

    if (paragrahRef.current)
      console.log("Paragraph mounted:", paragrahRef.current);
  }, []);

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    if (confirm("Press the button") == true) {
      alert("Message Sent");
    } else {
      alert(
        `uhmmmm... You canceled? just for that got yo url lo lol:${location.href}!!`
      );
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <div className="App">
      {isLoading ? (
        <h2>Start editing to see some magic happen!</h2>
      ) : (
        <p ref={paragrahRef}>Hello: {data || null} </p>
      )}

      <User>
        <h1>Hello</h1>
        <p onClick={handleOpen}>
          This works more convient than props but all things have their bad
          sides
        </p>
      </User>

      <form action="/" onSubmit={handleSubmit}>
        <label>Contact</label>
        <input type="text" placeholder="type" />
        <button type="submit">Submit</button>
      </form>

      <TraditionPropUser userName="Saul" text="hello" />

      <Layout />
    </div>
  );
}
