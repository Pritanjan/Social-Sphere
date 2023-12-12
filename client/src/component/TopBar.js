import React from "react";
import { TbSocial } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import { useForm } from "react-hook-form";
import TextInput from "./TextInput";
import { BsMoon, BsSunFill } from "react-icons/bs";
import {IoMdNotificationsOutline} from "react-icons/io";
import {SetTheme} from "../redux/theme";
import Logout from '../redux/userSlice';

const TopBar = () => {
  const { theme } = useSelector((state) => state.theme);
  // const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const handleTheme = () => {
    const themeValue = theme === "light" ? "dark" : "light";

    dispatch(SetTheme(themeValue));
  };

  const handeleSearch = async (data) => {};

  return (
    <div className="topbar w-full flex items-center justify-between py-3 md:py-6 px-4 bg-primary">
      <Link to="/" className="fles gap-2 items-center">
        <div className="p-1 md:p-2 bg-[#065ad8] rounded text-white">
          <TbSocial />
        </div>
        <span className="text-xl md:text-2xl text-[#065ad8] fornt-semifold">
          ShareFun
        </span>
      </Link>

      <form
        className="md:flex items-center justify-center"
        // className="hidden md:flex items-center justify-center"
        onSubmit={handleSubmit(handeleSearch)}
      >
        <TextInput
          placeholder="Search..."
          styles="w-[18rem] lg:w-[38rem] rounded-1-full py-3"
          register={register("search")}
        />
        <CustomButton
          title="Search"
          type="submit"
          containerStyles="bg-[#0444a4] text-white px-6 py-2.5 mt-2 rounded-r-full"
        />
      </form>
      {/* icons */}
      <div className="flex gap-4 items-center text-ascent-1 text-md md:text-x1">
        <button onClick={() => handleTheme()}>
          {theme ? <BsMoon /> : <BsSunFill />}
        </button>
        {/* <div className="hidden lg:flex"> */}
        <div className="lg:flex">
          <IoMdNotificationsOutline />
        </div>

        <div>
            <CustomButton
                onClick={() => dispatch(Logout())}
                title='Log Out'
                containerStyles='text-sm text-ascent-1 px-4 md:px-6 py-1 md:py-2 border border-[#666] rounded-full' 
            />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
