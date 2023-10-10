import { toast } from "react-toastify";

const SingleColor = ({ color, index }) => {
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${color.hex}`);
        toast.success("Color copied to clipboard");
      } catch (error) {
        toast.error("Failed to copy color");
      }
    } else {
      toast.error("Clipboard access not available");
    }
  };
  return (
    <article
      style={{ backgroundColor: `#${color.hex}` }}
      className={index > 10 ? "color color-light" : "color"}
      onClick={saveToClipboard}
    >
      <p className="percent-value">{color.weight}%</p>
      <p className="color-value"> #{color.hex} </p>
    </article>
  );
};
export default SingleColor;
