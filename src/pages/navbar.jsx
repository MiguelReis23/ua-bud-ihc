import React, { useState } from "react";
import { Dropdown, DropdownItem} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthEurope,
  faSignOutAlt,
  faTimes,
  faUser,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-bootstrap";
import Link from "next/link";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("PT");
  const [show, setShow] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    console.log("User logged out");
    handleClose();
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleCountryChange = (countryCode) => {
    setCountry(countryCode);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <span className="font-semibold text-xl tracking-tight">BUD</span>
        <div className="ml-6 relative">
          <input
            type="text"
            className="h-10 pl-2 pr-8 rounded-full text-sm text-black focus:outline-none"
            placeholder="Search Articles..."
            value={search}
            onChange={handleSearchChange}
          />
          <button type="submit" className="absolute right-0 top-0 mt-2 mr-2">
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56.966 56.966"
            >
              <path d="M55.146 51.887L41.588 37.786c3.486-4.144 5.396-9.358 5.396-14.786 0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c5.428 0 10.642-1.909 14.786-5.396l13.557 14.101c.571.593 1.339.92 2.162.92.826 0 1.586-.324 2.162-.92C56.255 54.057 56.255 52.48 55.146 51.887z M23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17S14.61 6 23.984 6z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="flex items-center">
        <Link href="/myTickets">
          <div className="border-black shadow-5 py-1 px-2 mr-2 flex items-center justify-center cursor-pointer text-black bg-white">
            <FontAwesomeIcon icon={faClockRotateLeft} className="mr-1" />
            MY TICKETS
          </div>
        </Link>
        <Link href="/newTicket">
          <div className="border-black py-1 px-2 mr-2 flex items-center justify-center cursor-pointer text-white bg-black">
            + NEW TICKETS
          </div>
        </Link>
        <Link href="/profile">
          <FontAwesomeIcon
            icon={faUser}
            size="lg"
            color="black"
            className="mr-2"
          />
        </Link>
        <FontAwesomeIcon
          icon={faSignOutAlt}
          size="lg"
          color="black"
          className="mr-2"
          onClick={handleShow}
        />
        <Modal
          show={show}
          onHide={handleClose}
          centered
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-500 text-white rounded-lg w-1/3 h-1/3"
        >
          <Modal.Header closeButton>
            <div className="mb-12 w-full text-center">
              <Modal.Title className="text-3xl">
                Are you sure you want to logout?
              </Modal.Title>
            </div>
          </Modal.Header>
          <Modal.Footer>
            <div className="flex justify-end w-full mt-5">
              <FontAwesomeIcon
                icon={faTimes}
                size="2x"
                className="mr-10 cursor-pointer"
                onClick={handleClose}
              />
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size="2x"
                className="mr-16 cursor-pointer"
                onClick={handleLogout}
              />
            </div>
          </Modal.Footer>
        </Modal>
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <FontAwesomeIcon icon={faEarthEurope} color="black" />
          {country}{" "}
        </Dropdown.Toggle>
        <Dropdown.Menu className="border-black bg-white">
          <DropdownItem
            className="block text-black"
            onClick={() => handleCountryChange("PT")}
            href="#/PT"
          >
            Português
          </DropdownItem>
          <DropdownItem
            className="block text-black"
            onClick={() => handleCountryChange("EN")}
            href="#/EN"
          >
            English
          </DropdownItem>
          <DropdownItem
            className="block text-black"
            onClick={() => handleCountryChange("ES")}
            href="#/ES"
           >
            Español
          </DropdownItem>
        </Dropdown.Menu>
      </Dropdown>
      </div>
    </nav>
  );
}