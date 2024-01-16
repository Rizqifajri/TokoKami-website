import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white py-8 mt-10 w-full">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ml-5">
            <div>
              <h2 className="text-sm lg:text-lg font-semibold mb-4">
                Tentang Kami
              </h2>
              <p className="text-sm">
                Informasi tentang TokoKami dan sejarah kami.
              </p>
            </div>
            <div>
              <h2 className="text-sm lg:text-lg font-semibold mb-4">
                Pelanggan
              </h2>
              <ul className="text-xs lg:text-sm">
                <li>Ketentuan Penggunaan</li>
                <li>Kebijakan Privasi</li>
                <li>FAQ</li>
                <li>Kontak</li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm lg:text-lg font-semibold mb-4">
                Ikuti Kami
              </h2>
              <ul className="text-xs lg:text-sm">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm lg:text-lg font-semibold mb-4">
                Lokasi Kami
              </h2>
              <p className="text-xs lg:text-sm">Jalan Contoh No. 123, Kota, Negara</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} TokoKami. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
