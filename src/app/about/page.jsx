import React from "react";
import Image from "next/image";
import Webshop from "../../assets/webshop.png";
import Logo from "../../assets/logoTokoKami1.png";

const page = () => {
  return (
    <>
      <div className="text-center text-xl mt-10 mb-10 lg:text-2xl">About Us</div>

      <div className="flex flex-col lg:flex-row sm:items-center ">
        <Image
          src={Logo}
          width={500}
          height={500}
          className="flex w-[500px] h-[142px] object-contain p-10 items-center transition-all lg:scale-150 lg:mx-56 "
        />

        <div className="bg-gray-300 w-2 h-auto rounded-full "></div>
        <p className="text-xs p-4 text-justify sm:text-xl">
          Selamat datang di{" "}
          <span className=" p-1 rounded-xl">
            Toko<span className="text-cyan-400">Kami</span>
          </span>{" "}
          , destinasi belanja online yang memadukan teknologi dan fashion untuk
          memenuhi kebutuhan pria dan wanita modern. Kami bangga menjadi tempat
          di mana fashion bertemu dengan inovasi, dan kami berkomitmen untuk
          memberikan pengalaman belanja yang tak terlupakan kepada pelanggan
          kami.
          <Image
            src={Webshop}
            alt="image"
            className="w-5/6 m-5 mx-auto sm:w-1/2 transition-all"
          />
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
