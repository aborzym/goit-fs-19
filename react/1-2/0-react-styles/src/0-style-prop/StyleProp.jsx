// style prop & object, conditional rendering, switch variant, object variant

import { randomElement } from "../utils";

const styles = {
  title: {
    color: "red",
  },
};

// const pColor = (success) => (success ? "limegreen" : "crimson");
const pColor = (success) => {
  if (success) return "limegreen";
  return "crimson";
};

const variantStyles = (variant) => {
  switch (variant) {
    case "primary":
      return { color: "limegreen" };
    case "secondary":
      return { color: "orange" };
    case "info":
      return { color: "dodgerblue" };
    case "danger":
      return { color: "crimson" };
    case "warning":
      return { color: "goldenrod" };
    default:
      // return { color: "limegreen" };
      throw new Error(`Invalid variant of "${variant}"`);
  }
};
// const availableVariants = [
//   "primary",
//   "secondary",
//   "info",
//   "danger",
//   "warning",
//   // "none",
// ];

const variants = {
  primary: { color: "limegreen" },
  secondary: { color: "orange" },
  info: { color: "dodgerblue" },
  danger: { color: "crimson" },
  warning: { color: "goldenrod" },
};

const availableVariants = Object.keys(variants);

export const StyleProp = () => {
  const { title } = styles;

  const isSuccess = Math.random() > 0.5;
  const color = isSuccess ? "limegreen" : "crimson";

  // const variant = "secondary";
  const variant = randomElement(availableVariants);

  // if (variant === "danger")
  //   return <h1 style={{ color: "crimson" }}>Danger!</h1>;

  return (
    <main>
      <p>{isSuccess.toString()}</p>
      {/* <div>
        <h1 style={styles.title}>Style Prop in React - {color}</h1>
        <h1 style={title}>Style Prop in React - {pColor(isSuccess)}</h1>
        <h1 style={title}>Style Prop in React</h1>
      </div> */}

      {/* <p
        style={{
          fontSize: "24px",
          color: isSuccess ? "limegreen" : "crimson",
          // color,
          // color: pColor(isSuccess),
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        quae quas delectus similique consectetur quis nisi iure corrupti
        voluptas corporis sunt, laboriosam rem beatae culpa veniam possimus?
        Quas, soluta animi.
      </p> */}

      {/* <div>
        {isSuccess ? (
          <p style={{ color: "limegreen" }}>Success</p>
        ) : (
          <p style={{ color: "crimson" }}>Failure</p>
        )}
      </div> */}

      <div>
        <h1>Variant - {variant}</h1>
        <p style={variantStyles(variant)}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
          molestiae maiores adipisci nemo! Modi aut suscipit, quidem veritatis
          quas saepe laborum est voluptatibus ex distinctio, reprehenderit ab
          inventore numquam doloribus.
        </p>
        <p style={variants[variant]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          mollitia fugit, perferendis recusandae in corporis aperiam aliquid
          voluptatum modi, iste et cum doloribus. Et omnis pariatur eaque
          assumenda aliquid quis?
        </p>
      </div>
    </main>
  );
};
