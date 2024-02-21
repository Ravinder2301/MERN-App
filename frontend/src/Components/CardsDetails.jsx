import React, { useEffect, useState } from "react";
// import Table from "react-bootstrap/Table";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT, ADD, REMOVE } from '../redux/actions/action'
import { MdDeleteSweep } from "react-icons/md";
import './style.css'

const CardsDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  console.log(id);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getData = useSelector((state) => state.cartReducer.carts);
  console.log(getData);

  const compare = () => {
    let compareData = getData.filter((e) => {
      return e.id == id;
    });
    setData(compareData);
  };

  useEffect(() => {
    compare();
  }, [id]);

  const dlt = (id) => {
    dispatch(DLT(id))
    navigate('/');
  }

  const send = (e) => {
    console.log(e);
    dispatch(ADD(e));
  }

  const remove = (e) => {
    // console.log(e);
    dispatch(REMOVE(e));
  }

  return (
    <div className="pt-10  px-4 bg-gradient-to-l from-[#77dcab] to-[#d3dcdd] min-h-screen">
      <Link to='/' className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded">Back</Link>
      <h2 className="text-center text-2xl font-bold">Items Details Page</h2>
      <section className="mt-8">
        <div className="iteamsdetails bg-white p-4 rounded">
          {data.map((e) => {
            return (
              <>
                <div className="items_img">
                  <img
                    src={e.imgdata}
                    alt=""
                  />
                </div>
                <div className="details">
                  <table>
                    <tr>
                      <td>
                        <p>
                          <strong>Restaurant</strong> : {e.rname}
                        </p>
                        <p className="mt-2">
                          <strong>Price</strong> : ₹ {e.price}
                        </p>
                        <p className="mt-2">
                          <strong>Dishes</strong> : {e.address}
                        </p>
                        <p className="mt-2">
                          <strong>Total</strong> : ₹ {e.price * e.qnty}
                        </p>
                        <div className='mt-5 flex items-center justify-between px-2' style={{width:100, cursor:"pointer", background:"#ddd", color:"#111"}}>
                          <span style={{fontSize:24}} onClick={e.qnty <=1 ? () => dlt(e.id) : () => remove(e)}>-</span>
                          <span style={{fontSize:24}}>{e.qnty}</span>
                          <span style={{fontSize:24}} onClick={() => send(e)}>+</span>
                        </div>
                      </td>
                      <td>
                        <p className="mt-2">
                          <strong>Rating</strong> :{" "}
                          <span
                            style={{
                              background: "green",
                              color: "#fff",
                              padding: "2px 5px",
                              borderRadius: "5px",
                            }}
                          >
                            {e.rating} ★
                          </span>
                        </p>
                        <p className="mt-2">
                          <strong>Order Review</strong> : {e.somedata}
                        </p>
                        <p className="mt-2">
                          <strong>Remove</strong> :
                          <MdDeleteSweep style={{
                              color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                            onClick={() => dlt(e.id)}/>
                        </p>
                      </td>
                    </tr>
                  </table>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default CardsDetails;
