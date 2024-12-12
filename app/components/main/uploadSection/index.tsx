import React, { FC, PropsWithChildren } from "react";
import UploadForm from "./upload-form";
import UploadInfoCards from "./upload-info-cards";

const UploadSection: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className="grid grid-cols-uploadAreaFractionMobile lg:grid-cols-uploadAreaFractionDesktop items-center justify-center">
      <UploadForm />
      <UploadInfoCards />
    </section>
  );
};

export default UploadSection;
