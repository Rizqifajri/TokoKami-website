import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white py-8 mt-10 w-full">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h2 className="text-lg font-semibold mb-4">Tentang Kami</h2>
              <p>Informasi tentang TokoKami dan sejarah kami.</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Pelanggan</h2>
              <ul>
                <li>Ketentuan Penggunaan</li>
                <li>Kebijakan Privasi</li>
                <li>FAQ</li>
                <li>Kontak</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Ikuti Kami</h2>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Lokasi Kami</h2>
              <p>Jalan Contoh No. 123, Kota, Negara</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} TokoKami. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
