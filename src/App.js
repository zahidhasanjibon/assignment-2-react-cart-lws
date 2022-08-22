import { Toaster } from 'react-hot-toast';
import { useSelector } from "react-redux";
import Cart from "./components/Cart";
import ProductsList from "./components/ProductsList";

export default function App() {
    const { allProducts, totalPrice } = useSelector((state) => state);


    

    return (
        <div className="bg-gray-50 h-full md:h-screen">
            <div className="grid place-items-center">
                <h1 className="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4">
                    Shopping Cart
                </h1>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
                    {allProducts.length > 0 &&
                        allProducts.map((item, i) => (
                            <ProductsList key={i} item={item} />
                        ))}
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
                    <Cart />
                    <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
                        <div className="flex justify-center items-center text-center">
                            <div className="text-xl font-semibold">
                                <p>Total Price</p>
                                <p className="text-5xl">{totalPrice}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Toaster />
            </div>
        </div>
    );
}
