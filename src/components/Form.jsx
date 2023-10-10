import { useState } from "react";

const Form = ({ addColor }) => {
  const [color, setColor] = useState("#520e53");

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <article className="container">
      <form onSubmit={handleSubmit} className="color-form">
        <input
          type="color"
          name="color"
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <input
          type="text"
          name="text"
          id="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#520e53"
        />
        <button className="btn" type="submit" style={{ background: color }}>
          Submit
        </button>
      </form>
    </article>
  );
};
export default Form;
