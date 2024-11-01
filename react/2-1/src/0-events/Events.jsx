/* Events & Callbacks & Reference */

const Buttons = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="row border">
      <button onClick={handleClick} role="button">
        Click me!
      </button>

      <button onClick={() => handleClick()} role="button">
        Click me as well!
      </button>

      <button onClick={() => console.log("Button clicked!")} role="button">
        Click me too!
      </button>
    </div>
  );
};

const Form = ({ formType = "Login" }) => {
  const handleSubmit = () => {
    console.log("Now you see me, now you don't!");
  };

  const handleEvent = (event) => {
    event.preventDefault();

    console.log("You found me 😄");

    const form = event.target;
    const email = form.elements["email"].value.trim();
    const password = form.elements["password"].value.trim();

    console.log(`[${formType}] Sending to server: `, { email, password });
  };

  return (
    <form
      className="col border"
      onSubmit={(event) => handleEvent(event)}
      autoComplete="off"
    >
      <h2>{formType}</h2>

      <label>
        Email:
        <input type="email" name="email" required />
      </label>

      <label>
        Password:
        <input type="password" name="password" required />
      </label>

      <button type="submit">{formType}</button>
    </form>
  );
};

export const Events = () => {
  console.log("user@user.com");

  return (
    <main className="col wide-gap">
      <h1>Events</h1>

      <Buttons />

      <Form formType="Login" />
      <Form formType="Register" />
    </main>
  );
};
