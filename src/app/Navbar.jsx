import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <a href="/">E-Commerce Store</a>
      </div>
      <ul className="flex space-x-4">
        <li>
          <a
            href="/"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/products.html"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Products
          </a>
        </li>
        <li>
          <a
            href="/cart.html"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Cart
          </a>
        </li>
        <li>
          <a
            href="/checkout.html"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Checkout
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
