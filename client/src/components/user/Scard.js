import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardItem from "./CardItem";
import BASE_URL from "../../utills/api-utill";
import { getCurrentUser, setCurrentUser } from "../../utills/storage-utills";
import { deleteditems } from "../../redux/selectedstore";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
const Scard = ({ items }) => {
  const { list } = useSelector((state) => state.selected);
  const dispatch = useDispatch();
  const [sitem, setsitems] = useState([]);
  const [del, setdel] = useState();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/proposal/${items}`)
      .then((res) => {
        setsitems([res.data.proposal]);
      })
      .catch((err) => alert(err.message));
  }, []);

  const delteselect = (id,name) => {
    axios
      .put(`${BASE_URL}/delete-list/${getCurrentUser()._id}`, {
        selected: id,
      })
      .then((res) => {
        if(res.status === 200){
         toast.info(`${name} removed from selected`,{
            position:"bottom-right"
        }) 
       
        }
        dispatch(deleteditems(res.data.data.selected));
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="scard-list">
      {sitem?.map((item) => {
        return (
          <div className="cardslist">
            <CardItem
              key={item?._id}
              id={item?._id}
              imageSrc={item?.images[0]}
              title={item?.eventName}
              price={item?.budget}
              locatioin={item?.placeOfEvent}
            />
            <div className="del-icon" onClick={() => delteselect(item?._id,item?.eventName)}>
              <ion-icon name="trash-outline"></ion-icon>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Scard;
