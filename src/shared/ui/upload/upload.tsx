import React, { FC } from "react";
import { UploadProps } from "./upload.types";
import Icon from "../../icons";

const Upload: FC<UploadProps> = (props) => {
  const { file, setFile } = props;

  return (
    <div>
      <label>
        <input
          onChange={(e) => {
            if (e.target.files?.[0]) {
              const fr = new FileReader();
              fr.onload = () => {
                const fbase64 = fr.result; //файл в base64
                setFile("image", fbase64);
              };
              fr.readAsDataURL(e.target.files?.[0]);
            }
          }}
          type="file"
          className="block w-full text-sm text-slate-500 file:cursor-pointer file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-opacityBlue file:text-white
      hover:file:opacity-70
    "
        />
      </label>
    </div>
  );
};

export default Upload;
