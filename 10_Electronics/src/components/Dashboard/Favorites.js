import { Link } from "react-router-dom";
import { Header } from "./Header";

export const Favorites = () => {
    const favorites = [
  {
    id: 1,
    title: 'Set of two badge identity cards',
    price: 8,
    image: 'assets/img/shop/marketplace/01.jpg',
    seller: 'Fireby',
    avatar: 'assets/img/shop/marketplace/avatars/04.png',
    category: 'Mockups',
    sales: 17
  },
  {
    id: 2,
    title: 'Smart watches series 9 mockup',
    price: 15,
    image: 'assets/img/shop/marketplace/02.jpg',
    seller: 'MD Studio',
    avatar: 'assets/img/shop/marketplace/avatars/03.png',
    category: 'Mockups',
    sales: 132
  },
  {
    id: 3,
    title: '3D box mockup bold rebrand',
    price: 16,
    image: 'assets/img/shop/marketplace/03.jpg',
    seller: 'Magic FS',
    avatar: 'assets/img/shop/marketplace/avatars/02.png',
    category: 'Mockups',
    sales: 56
  },
  {
    id: 4,
    title: 'Smartphone mockups for UI designs',
    price: 18,
    image: 'assets/img/shop/marketplace/06.jpg',
    seller: 'MD Studio',
    avatar: 'assets/img/shop/marketplace/avatars/03.png',
    category: 'Mockups',
    sales: 152
  },
  {
    id: 5,
    title: 'iPhone 15 pro mockups',
    price: 19,
    image: 'assets/img/shop/marketplace/08.jpg',
    seller: 'Fireby',
    avatar: 'assets/img/shop/marketplace/avatars/04.png',
    category: 'Mockups',
    sales: 47
  },
  {
    id: 6,
    title: 'Falling gift cards mockup',
    price: 9,
    image: 'assets/img/shop/marketplace/04.jpg',
    seller: 'Magic FS',
    avatar: 'assets/img/shop/marketplace/avatars/02.png',
    category: 'Mockups',
    sales: 34
  }
];
  return (
    <main class="content-wrapper">
      <div class="container pt-4 pt-lg-5 pb-5">
        <div class="row pt-sm-2 pt-md-3 pt-lg-0 pb-2 pb-sm-3 pb-md-4 pb-lg-5">
            <Header/>
            <div className="col-lg-9 pt-2 pt-xl-3">
  <div className="d-flex align-items-center justify-content-between gap-3 pb-3 mb-2 mb-md-3">
    <h1 className="h2 mb-0">Favorites</h1>
    <div
      style={{
        width: "170px",
      }}>
      <select
        aria-label="Period select"
        className="form-select rounded-pill"
        data-select='{                  "classNames": {                    "containerInner": ["form-select", "rounded-pill"]                  },                  "removeItemButton": false                }'>
        <option value="All">All products</option>
        <option value="Vectors">Vectors</option>
        <option value="Mockups">Mockups</option>
        <option value="Photos">Photos</option>
        <option value="3D">3D</option>
        <option value="AI images">AI images</option>
        <option value="Templates">Templates</option>
      </select>
    </div>
  </div>
  <div className="row row-cols-2 row-cols-md-3 g-3 g-sm-4 g-lg-3 g-xl-4">
    {favorites.map((item)=>{
      return   (<div className="col" key={item.id}>
      <div className="card h-100 animate-underline hover-effect-scale rounded-4 overflow-hidden">
        <div className="card-img-top position-relative bg-body-tertiary overflow-hidden">
          <Link
            className="ratio d-block hover-effect-target"
            href="shop-product-marketplace.html"
            style={{
              "--cz-aspect-ratio": "calc(220 / 304 * 100%)",
            }}>
            <img alt="" src={item.image} />
          </Link>
          <div className="position-absolute top-0 end-0 z-2 hover-effect-target pt-1 pt-sm-0 pe-1 pe-sm-0 mt-2 mt-sm-3 me-2 me-sm-3">
            <button
              aria-label="Add to wishlist"
              className="btn btn-sm btn-icon btn-light text-danger bg-light border-0 rounded-circle animate-pulse"
              type="button">
              <i className="bi bi-heart-fill animate-target fs-sm" />
            </button>
          </div>
        </div>
        <div className="card-body p-3">
          <div className="d-flex min-w-0 justify-content-between gap-2 gap-sm-3 mb-2">
            <h3 className="nav min-w-0 mb-0">
              <Link
                className="nav-link text-truncate p-0"
                href="shop-product-marketplace.html">
                <span className="text-truncate animate-target">
                 {item.title}
                </span>
              </Link>
            </h3>
            <div className="h6 mb-0">${item.price}</div>
          </div>
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
            <div className="nav align-items-center gap-1 fs-xs">
              <Link className="nav-link fs-xs text-body gap-1 p-0" href="#!">
                <div
                  className="flex-shrink-0 border rounded-circle"
                  style={{
                    width: "22px",
                  }}>
                  <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
                    <img
                      alt=""
                      src={item.avatar}
                    />
                  </div>
                </div>
                {item.seller}
              </Link>
              <div className="text-body-secondary">in</div>
              <Link className="nav-link fs-xs text-body p-0" href="#!">
                {item.category}
              </Link>
            </div>
            <div className="fs-xs text-body-secondary">{item.sales}</div>
          </div>
        </div>
      </div>
    </div>)
    })
    }
  
  </div>
</div>;

           </div>
      </div>
    </main>
  );
};
