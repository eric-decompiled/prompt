import ClipboardJS from "clipboard";

const initClipboard = () => {
  const clipboard = new ClipboardJS(".gatsby-code-button");
  clipboard.on("success", (e) => {
    e.clearSelection();
  });
};

export default initClipboard;

