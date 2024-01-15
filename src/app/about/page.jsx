import React from "react";
import Image from "next/image";
import Webshop from "../../assets/webshop.png";

const page = () => {
  return (
    <>
      <div className="text-center text-3xl mt-10 mb-10">About Us</div>

      <div className="flex flex-row  ">
        <h1 className="mt-56 text-9xl bg-blue-300 text-center mb-auto my-auto mx-auto p-9 rounded-r-full mr-2">
          Toko<span className="text-white">Kami</span>
        </h1>

        <div className="bg-gray-300 w-2 h-auto rounded-full "></div>
        <p className="text-xl p-4 text-justify">
          Selamat datang di{" "}
          <span className="bg-blue-400 p-1 rounded-xl">
            Toko<span className="text-white">Kami</span>
          </span>{" "}
          , destinasi belanja online yang memadukan teknologi dan fashion untuk
          memenuhi kebutuhan pria dan wanita modern. Kami bangga menjadi tempat
          di mana fashion bertemu dengan inovasi, dan kami berkomitmen untuk
          memberikan pengalaman belanja yang tak terlupakan kepada pelanggan
          kami.
          <Image src={Webshop} alt="image" className="w-3/6 m-5 mx-auto" />
          <p className="mt-5 text-justify">
            Di TokoKami, kami menyadari bahwa gaya bukan hanya tentang
            penampilan, tetapi juga tentang cara kita berinteraksi dengan dunia.
            Seiring dengan koleksi fashion terkini untuk pria dan wanita, kami
            juga menawarkan rangkaian produk elektronik terkemuka untuk memenuhi
            kebutuhan teknologi Anda.
          </p>
        </p>
      </div>
    </>
  );
};

export default page;
