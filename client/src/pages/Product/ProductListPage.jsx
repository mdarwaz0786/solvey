import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Style.css";
import Video from "../../components/Video/Video";

const productData = [
  {
    category: "HEAMATINICS",
    products: [
      {
        id: 1,
        name: "FEROMOM",
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
        name: "ROZICAL-HD",
        image: "/product/rozicalhd.jpeg",
      },
      {
        id: 2,
        name: "ROZICAL-PLUS",
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
        name: "FUROVAL-L",
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
    category: "NATURAL EXTRACTS + MULTIVITAMIN + MULTI MINIRAL +  ANTIOXIDANTS + AMINO ACIDS TABLETS",
    products: [
      {
        id: 1,
        name: "MULTISOL-11",
        image: "/product/multisol11.jpeg",
      },
    ],
  },
  {
    category: "MULTIVITAMIN SYRUP & MULTIVITAMIN SUGAR FREE SYRUP",
    products: [
      {
        id: 1,
        name: "MULTISOL-AM",
        image: "/product/multisolam.jpeg",
      },
      {
        id: 2,
        name: "MULTISOL-SF",
        image: "/product/multisolsf.jpeg",
      },
    ],
  },
  {
    category: "PLATELETS BOOSTER",
    products: [
      {
        id: 1,
        name: "PLATISOL",
        image: "/product/platisol.jpeg",
      },
    ],
  },
  {
    category: "COCONUT WATER SACHET",
    products: [
      {
        id: 1,
        name: "COCOSOL",
        image: "/product/cocosol.jpeg",
      },
    ],
  },
  {
    category: "PCOS SUPPLEMENT",
    products: [
      {
        id: 1,
        name: "PCO-BEST",
        image: "/product/pcobest.jpeg",
      },
    ],
  },
];

const ProductListPage = () => {
  return (
    <>
      <Navbar />
      <Video src="/solvey/product.mp4" height="400px" />
      <div className="container-fluid">
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
