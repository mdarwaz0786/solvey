import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import banner from '../../assets/banner.png';
import "./Style.css";

const productData = [
  {
    category: "HEAMATINICS",
    products: [
      {
        id: 1,
        name: "CIBIFER TABLETS",
        image: "/product/feromom.jpeg",
      },
    ],
  },
  {
    category: "FOLATE WITH DHA & IODINE",
    products: [
      {
        id: 1,
        name: "DEARFOL",
        image: "/product/dearfol.jpeg",
      },
    ],
  },
  {
    category: "CALCIUM SUPPLEMENTATION",
    products: [
      {
        id: 1,
        name: "ROZICAL HD",
        image: "/product/rozicalhd.jpeg",
      },
      {
        id: 2,
        name: "ROZICAL PLUS",
        image: "/product/rozicalplus.jpeg",
      },
      {
        id: 3,
        name: "ROZICAL GOLD",
        image: "/product/rozicalgold.jpeg",
      },
    ],
  },
  {
    category: "SUPPLEMENT FOR PCOS, PCOD & INFERTILITY DUE TO PCOS",
    products: [
      {
        id: 1,
        name: "FUROVAL - L",
        image: "/product/furoval.jpeg",
      },
    ],
  },
  {
    category: "MALE INFERTILITY SUPPLEMENT",
    products: [
      {
        id: 1,
        name: "FERTIVEY GOLD",
        image: "/product/fertiveygold.jpeg",
      },
    ],
  },
  {
    category: "MULTIVITAMIN+ MULTI MINIRAL+  ANTIOXIDANTS+ AMINO ACIDS TABLETS +  NATURAL EXTRACTS",
    products: [
      {
        id: 1,
        name: "MULTISOL 11",
        image: "/product/multisol11.jpeg",
      },
    ],
  },
  {
    category: "MULTIVITAMIN SYRUP & MULTIVITAMIN SUGAR FREE SYRUP",
    products: [
      {
        id: 1,
        name: "MULTISOL - AM",
        image: "/product/multisolam.jpeg",
      },
      {
        id: 2,
        name: "MULTISOL - SF",
        image: "/product/multisolsf.jpeg",
      },
    ],
  },
];

const ProductListPage = () => {
  return (
    <>
      <Navbar />
      <Banner src={banner} height='auto' />
      <div className="container-fluid py-5">
        {productData?.map((cat, index) => (
          <div key={index} className="mb-5">
            {/* Category Title */}
            <div className="text-center mb-4" style={{ background: "#f1f9f9" }}>
              <h5 className="fw-normal p-2">{cat?.category}</h5>
            </div>
            {/* Products Grid */}
            <div className="row justify-content-center g-4">
              {cat?.products?.map((product) => (
                <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 col-12 text-center">
                  <div className="product-card p-3 h-100">
                    {/* Product Image */}
                    <div className="mb-3">
                      <img
                        src={product?.image}
                        alt={product?.name}
                        className="img-fluid product-img"
                      />
                    </div>
                    {/* Product Name */}
                    <h6 className="product-title">
                      {product?.name}
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ProductListPage;
