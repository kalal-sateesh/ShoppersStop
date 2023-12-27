export const backgroundHoC = (Component) => {
  //New Component
  const NewComponent = (prop) => {
    return (
      <div
      // className="mt-4 mb-4 d-inline-block p-4 border border-2 text-black"
      // style={{ backgroundColor: bgColor }}
      >
        <Component {...prop} />
      </div>
    );
  };
  return NewComponent;
};
