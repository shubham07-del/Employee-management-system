import React from "react";

const Header = (props) => {

  const logOut = () => {
    localStorage.removeItem("loggedIn")
    props.setUser('')
  };


  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-medium text-white">
        Hi <br /> <span className="text-3xl font-semibold">{props.data?.name || "Admin"}</span> 🎉
      </h1>
      <button
        onClick={() => {
          logOut();
        }}
        className="px-6 py-3 text-xl text-white font-medium cursor-pointer active:scale-95 bg-red-500 rounded-xl"
      >
        Log out
      </button>
    </div>
  );
};

export default Header;
