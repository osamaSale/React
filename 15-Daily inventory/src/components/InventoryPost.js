import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addItem, fetchItems } from "../redux/api/inventory";

export const InventoryPost = ({}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [item_name, setItem_name] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [sell, setSell] = useState(0);
  const [assets, setAssets] = useState(0);
  const [deportation, setDeportation] = useState(0);
  const [output, setOutput] = useState(0);
  const handleSubmit = () => {
    setLoading(true);
    const data = {
      item_name: item_name,
      quantity: quantity,
      sell: quantity,
      assets: assets,
      deportation: deportation,
      output: output,
    };
    console.log(data);
    dispatch(addItem(data)).then((res) => {
      if (res.payload === undefined) {
       return
      }else{
        dispatch(fetchItems());
        navigate('/')
      }
   
    });
    setLoading(false);
  };
  return (
    <div className="main-content-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-8 col-12">
            <div className="py-6 p-md-6 p-lg-10">
              <div className="mb-6">
                <h2 className="mb-0">Add Product</h2>
              </div>
              <div>
                <div className="row mb-2">
                  <div className="col-md mb-2">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control border"
                      placeholder="Item Name"
                      onChange={(e) => setItem_name(e.target.value)}
                      value={item_name}
                    />
                  </div>
                  <div className="col">
                    <label className="form-label">Quantity</label>
                    <input
                      type="text"
                      className="form-control border"
                      placeholder="Quantity"
                      onChange={(e) => setQuantity(e.target.value)}
                      value={quantity}
                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md mb-2">
                    <label className="form-label">Sell</label>
                    <input
                      type="text"
                      className="form-control border"
                      placeholder="Sell"
                      onChange={(e) => setSell(e.target.value)}
                      value={sell}
                    />
                  </div>
                  <div className="col">
                    <label className="form-label">Assets</label>
                    <input
                      type="text"
                      className="form-control border"
                      placeholder="Assets"
                      onChange={(e) => setAssets(e.target.value)}
                      value={assets}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md mb-2">
                    <label className="form-label">Deportation</label>
                    <input
                      type="text"
                      className="form-control border"
                      placeholder="Deportation"
                      onChange={(e) => setDeportation(e.target.value)}
                      value={deportation}
                    />
                  </div>
                  <div className="col">
                    <label className="form-label">Output</label>
                    <input
                      type="text"
                      className="form-control border"
                      placeholder="Output"
                      onChange={(e) => setOutput(e.target.value)}
                      value={output}
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col">
                    <div className="hstack gap-3">
                      <button
                        className="btn btn-primary"
                        onClick={handleSubmit}
                      >
                        {!loading && (
                          <span className="indicator-label"> Save Details</span>
                        )}
                        {loading && (
                          <span className="indicator-progress">
                            Please wait...
                            <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                          </span>
                        )}
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="my-10 border" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
