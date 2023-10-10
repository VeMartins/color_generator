import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";
import Form from "./components/Form";
import ColorList from "./components/ColorList";
import { useState } from "react";
const App = () => {
  const newColors = new Values("#520e53").all(10);
  const [colors, setColors] = useState(newColors);
  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
    console.log(color);
  };

  return (
    <main>
      {" "}
      <h2>Color Generator</h2>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
