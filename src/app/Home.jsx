
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="p-8">
        <h1 className="text-4xl font-bold">Welcome to Our eCommerce Store</h1>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border p-4">
            <h2 className="text-2xl">Product 1</h2>
            <p>$20</p>
            <a href="/products/product1.html" className="text-blue-500">View Details</a>
          </div>
          <div className="border p-4">
            <h2 className="text-2xl">Product 2</h2>
            <p>$30</p>
            <a href="/products/product2.html" className="text-blue-500">View Details</a>
          </div>
          <div className="border p-4">
            <h2 className="text-2xl">Product 3</h2>
            <p>$40</p>
            <a href="/products/product3.html" className="text-blue-500">View Details</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
