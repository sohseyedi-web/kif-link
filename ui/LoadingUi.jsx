import React from "react";

const LoadingUi = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="rounded-full h-16 w-16 bg-violet-800 dark:bg-blue-200 animate-ping"></div>
    </div>
  );
};

export default LoadingUi;
