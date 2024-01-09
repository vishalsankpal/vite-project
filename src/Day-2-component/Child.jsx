const Child = ({ onSelectLanguage }) => {
  const handler = () => {
    onSelectLanguage("changedddd");
  };
  return <div onClick={handler}>abc</div>;
};

export default Child;
