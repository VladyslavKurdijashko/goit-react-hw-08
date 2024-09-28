import { Bars } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Bars height="80" width="80" color="#3498db" ariaLabel="bars-loading" />
    </div>
  );
};

export default Loader;
