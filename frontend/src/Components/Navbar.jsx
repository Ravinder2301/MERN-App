import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link as ScrollLink } from "react-scroll";
import logo from "../Images/logo.svg";
import HeroSection from "../Pages/HeroSection";
import { Link as RouterLink } from "react-router-dom";
import MenuItems from "../Pages/Menu";
import Footer from "../Pages/Footer";
import SetInterval from "../Pages/SetInterval";
import ContactUs from "../Pages/ContactUs";
import Badge from "@mui/material/Badge";
import { FaShoppingCart } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import { IoMdClose } from "react-icons/io";
import Table from "react-bootstrap/esm/Table";
import { useDispatch, useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDeleteSweep } from "react-icons/md";
import "./style.css";
import { DLT } from "../redux/actions/action";

const Navbar = () => {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  axios.defaults.withCredentials = true;
  const [price, setPrice] = useState(0);
  console.log(price);

  const dispatch = useDispatch();
  const getData = useSelector((state) => state.cartReducer.carts);
  console.log(getData);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    axios
      .get("http://localhost:7000")
      .then((res) => {
        if (res.data.Status === "Success") {
          console.log(res.data.Status);
          setAuth(true);
          setName(res.data.name);
        } else {
          setAuth(false);
          setMessage(res.data.Error);
          console.log(res.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = () => {
    axios
      .get("http://localhost:7000/logout")
      .then((res) => {
        location.reload(true);
        toast.success("Successfully logout!");
      })
      .catch((err) => console.log(err));
  };

  const dlt = (id) => {
    dispatch(DLT(id));
  };

  const total = () => {
    let price = 0;
    getData.map((e) => {
      price = e.price * e.qnty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [getData]);

  return (
    <div>
      <nav className="relative flex p-3 items-center justify-between bg-gradient-to-r from-[#36b477] to-[#d3dcdd]">
        <div className="text-white">
          <img src={logo} height={"70"} width="200" alt="" />
        </div>
        <ul className="hidden sm:flex gap-6">
          <ScrollLink
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Home
          </ScrollLink>
          {auth && (
            <ScrollLink
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer	"
            >
              Menu
            </ScrollLink>
          )}
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer	"
          >
            About Us
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer	"
          >
            Contact Us
          </ScrollLink>
        </ul>
        {auth ? (
          <div className="gap-3 justify-center items-center hidden sm:flex">
            <Badge
              badgeContent={getData.length}
              color="secondary"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <FaShoppingCart className="text-2xl" />
            </Badge>
            <ScrollLink
              className="hidden sm:block px-4 py-2 bg-slate-700 text-white rounded cursor-pointer"
              onClick={handleDelete}
            >
              Logout
            </ScrollLink>
          </div>
        ) : (
          <RouterLink
            to="/login"
            className="hidden sm:block px-4 py-2 bg-slate-700 text-white rounded"
          >
            Login/Signup
          </RouterLink>
        )}
        <div className="flex gap-2 justify-center items-center sm:hidden">
          <Badge
            badgeContent={getData.length}
            color="secondary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <FaShoppingCart className="text-2xl" />
          </Badge>
          <RouterLink
            className="sm:hidden text-3xl relative"
            onClick={() => setShow(!show)}
          >
            <GiHamburgerMenu />
          </RouterLink>
        </div>

        {/* Cart Items */}
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getData.length ? (
            <div className="sm:px-2" style={{ maxWidth: "90vw" }}>
              <Table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Restaurant Name</th>
                  </tr>
                </thead>
                <tbody>
                  {getData.map((e) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <RouterLink
                              to={`/cart/${e.id}`}
                              onClick={handleClose}
                            >
                              <img
                                src={e.imgdata}
                                style={{ width: "5rem", height: "5rem" }}
                                alt=""
                              />
                            </RouterLink>
                          </td>
                          <td>
                            <p>{e.rname}</p>
                            <p>Price : ₹ {e.price}</p>
                            <p>Quantity : ₹ {e.qnty}</p>
                            <p className="mt-2">
                              <MdDeleteSweep
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                                onClick={() => dlt(e.id)}
                              />
                            </p>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                  <p className="text-center">Total : ₹ {price}</p>
                </tbody>
              </Table>
            </div>
          ) : (
            <div className="relative py-3 px-6 flex justify-center items-center gap-2">
              <IoMdClose
                className="absolute top-0 right-2 text-xl text-gray-600"
                onClick={handleClose}
              />
              <p className="text-xl mt-2">Your cart is empty </p>
              <img
                className="w-10 "
                src="https://cdn-icons-png.flaticon.com/512/2762/2762885.png"
                alt=""
              />
            </div>
          )}
        </Menu>
      </nav>

      {/* HeroSection */}
      <HeroSection auth={auth} />
      {auth && <MenuItems />}
      <SetInterval />
      <Footer />
      <ContactUs />

      {/* Mobile Navigation */}
      {show && (
        <div className="absolute sm:hidden top-20 flex flex-col items-center justify-center gap-2 right-2 left-2 rounded p-4 bg-gray-200">
          <ul className="flex flex-col gap-3 text-center">
            <ScrollLink
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
              onClick={() => setShow(!show)}
            >
              Home
            </ScrollLink>
            {auth && (
              <ScrollLink
                to="menu"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={() => setShow(!show)}
              >
                Menu
              </ScrollLink>
            )}
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
              onClick={() => setShow(!show)}
            >
              About Us
            </ScrollLink>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
              onClick={() => setShow(!show)}
            >
              Contact Us
            </ScrollLink>
          </ul>
          {auth ? (
            <RouterLink
              to="/logout"
              className="px-4 py-2  bg-yellow-700 text-white rounded"
            >
              Logout
            </RouterLink>
          ) : (
            <RouterLink
              to="/login"
              className="px-4 py-2  bg-yellow-700 text-white rounded"
            >
              Login/Signup
            </RouterLink>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
