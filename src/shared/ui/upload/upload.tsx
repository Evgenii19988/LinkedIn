import React, { FC } from "react";
import { UploadProps } from "./upload.types";
import Icon from "../../icons";

const Upload: FC<UploadProps> = (props) => {
  const {} = props;

  return (
    <div>
      <input type="file" />
    </div>
  );
};

export default Upload;
