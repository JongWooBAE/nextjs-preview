import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [imageSrc, setImageSrc] = useState<any>("");

  const handleImgUpload = (e) => {
    let files = [...e.target.files];

    encodeFileToBase64(e.target.files[0]);
  };

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();

    reader.readAsDataURL(fileBlob);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  return (
    <div>
      <h2 className="text-center mt-5">이미지 미리보기</h2>
      <div className="mt-5 mx-4"> {imageSrc && <img src={imageSrc} alt="preview-img" />}</div>
      <input
        id="fileSelect"
        type="file"
        accept="image/*"
        capture="environment"
        className="border-0 absolute overflow-hidden h-[1px] p-0 whitespace-nowrap w-[1px]"
        onChange={(e) => handleImgUpload(e)}
      />
      <label
        htmlFor="fileSelect"
        className="fixed left-[10vw] bottom-[15vw] max-w-[80%] h-[12vw] pt-[2vw] border border-none rounded-[12vw] w-[100%] text-white bg-[#EA5856] font-normal text-[6vw] text-center"
      >이미지 선택</label>
    </div>
  );
};

export default Home;
