const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce delay-700"></div>
        <div className="w-4 h-4 rounded-full bg-blue-900 animate-bounce delay-300"></div>
        <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce delay-700"></div>
      </div>
    </div>
  );
};

export default Loading;
