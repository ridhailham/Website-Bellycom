import ReactLoading from "react-loading";

const LoadingPage = () => {
  return (
    <div className="bg-white min-h-screen min-w-[100vw] flex items-center justify-center mx-auto">
      <ReactLoading
        type="spinningBubbles"
        color="#ff4800"
        height={150}
        width={90}
      />
    </div>
  );
};

export default LoadingPage;
