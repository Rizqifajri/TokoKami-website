// CheckoutModal.js
import React from "react";
import { useRouter } from "next/navigation";
import CartPage from "@/app/cart/page";


const CheckoutModal = ({ isOpen, handleClose, totalItems, totalPrice, selectedItems , cartItems }) => {
  const router = useRouter();
  

  const handleWhatsAppOrder = () => {
    const whatsappNumber = "6281389553776";

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=Halo,%20saya%20mau%20membeli%20${totalItems}%20barang:%20%0A${checkOutItem}%20dengan%20total%20harga%20$${totalPrice}`;
    window.open(whatsappURL, "_blank");
  };
  
  const checkOutItem = cartItems
    .filter((cartItem) => selectedItems.includes(cartItem.id))
    .map((cartItem) => (
      cartItem.title  
    )
      
    );
  console.log(checkOutItem);

  return (
    isOpen && (
      <div className="modal-overlay text-center backdrop-blur z-[1100] ">
        <div className="modal max-w-lg ">
          <h2 className="text-3xl font-bold mb-10 ">Order Summary</h2>
          <div className="">
            <p className="bg-blue-200 rounded-sm p-2 text-xl mb-3 ">
              Total Items: {totalItems}
            </p>
            <p className="truncate overflow-hidden ">{checkOutItem}</p>
            <p className="bg-green-300 rounded-sm p-2 text-xl">
              Total Price: ${totalPrice}
            </p>
          </div>
          <div className="flex flex-col mt-10 ">
            <button
              className="text-xl text-white rounded-md p-2  bg-green-700 hover:bg-green-400 transition-all "
              onClick={handleWhatsAppOrder}>
              Order via WhatsApp{" "}
            </button>
            <button
              className="text-white bg-black hover:bg-gray-500 rounded-md p-2 mt-2 transition-all"
              onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
        <style jsx>{`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.3); /* Transparan hitam */
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .modal {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
        `}</style>
      </div>
    )
  );
};

export default CheckoutModal;
