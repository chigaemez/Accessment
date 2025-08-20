import { useEffect } from "react";
import Best_selling from "../Components/Home/Best_selling"
import Features from "../Components/Home/Features"
import Home from "../Components/Home/Home"
import { usePopupStore } from "../Stores/PopupStore";


const Home_index = () => {
    const { isOpen } = usePopupStore();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto"; 
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <>
      <Home />
      <Features/>
      <Best_selling/>
    </>
  )
}

export default Home_index
