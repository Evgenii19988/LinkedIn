import React, { FC } from "react";
import { UploadProps } from "./upload.types";
import Icon from "../../icons";

const Upload: FC<UploadProps> = (props) => {
  const {} = props;

  return (
    <div>
      <label>
        <input
          type="file"
          className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-[#3456FFBF] file:text-[#FFFFFF]
      hover:file:opacity-70 cursor-pointer
    "
        />
      </label>
    </div>
  );
};

export default Upload;
