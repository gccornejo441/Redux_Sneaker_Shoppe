/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ShoppingCartIcon } from "@heroicons/react/outline";

import { initiateCheckout } from '../helpers/checkout';
import { connect } from "react-redux";
import Image from "next/image";
import RemoveFromCart from "../helpers/RemoveFromCart";

const ProductDisplay = (props) => {

  const lineItems = props.data.cart.map(item => {
    return {
        price: item.id,
            quantity: item.quantity
      }
  })

  return (
  <section>
    <button
      type="button"
      role="link"
      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-500 text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
      onClick={() => initiateCheckout({lineItems})}
    >
      Checkout
    </button>
  </section>
  )
};

function Modal(props) {
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef();

  const cartItems = props.cart.map((item) => {
    return (
      <div>
        <ul>
          <li class="flex flex-col">
            <h2 class="font-bold text-indigo-500">{item.title}</h2>
            <Image src={item.image} alt={item.title} height={200} width={100} />
            <p class="text-green-600 text-2xl">${item.price}</p>
            <p class="text-indigo-500">Qty: {item.quantity}</p>
          </li>
        </ul>
        <RemoveFromCart data={item.id} />
      </div>
    );
  });

  return (
    <Transition.Root show={props.data} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        open={open}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ShoppingCartIcon
                      className="h-6 w-6 text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-indigo-900"
                    >
                      Shopping Cart
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">{cartItems}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-indigo-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <ProductDisplay data={props}/>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={props.handleClose}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Modal);
