import React, { useEffect, useState } from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Contacts from "./Contacts";
import Events from "./Events";
import Food from "./Food";
import Venue from "./Venue";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import BASE_URL, { singleVendor_api } from "../../utills/api-utill";
import { getCurrentUser, setCurrentUser } from "../../utills/storage-utills";
import { selecteditems } from "../../redux/selectedstore";
const EventInfo = () => {
  const { list } = useSelector((state) => state.selected);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [items, setitems] = useState();
  const [vendor, setvendor] = useState();
  useEffect(() => {
    axios
      .get(`${BASE_URL}/proposal/${params.id}`)
      .then((res) => {
        setitems(res.data.proposal);
        console.log("proposal",res.data.proposal);

        singleVendor_api(res.data.proposal.vendorId)
          .then((res) => {
            setvendor(res.data.vendor);
          })
          .catch((err) => alert(err.message));
      })
      .catch((err) => alert(err.message));
  }, []);

  const selectbtn = () => {
    axios
      .put(`${BASE_URL}/update/${getCurrentUser()._id}`, {
        selected: items,
      })
      .then((res) => {
        console.log("res",res);
        if(res.status===200){
           toast.info(`${items.eventName} is added to proposals`,{
            position:"bottom-right"
        }) 
        }
        dispatch(selecteditems(res.data.data.selected));
      })
      .catch((err) => alert(err.message));
    navigate("/user/proposals");
  };

  return (
    <div>
      {items ? (
        <>
          <div className="col1">
            <div className="event-data">
              {" "}
              <span className="col1-proposals"><button className=" proposal-btn" onClick={()=> navigate(-1)}><span className="proposal-text">Proposals</span></button></span>{" "}
              <span className="col1-icon">{"<"}</span>{" "}
              <span className="col1-contract">{vendor?.name}</span>
            </div>
            <div>
              <button className="btn select-btn" onClick={selectbtn}>
                {" "}
                <span className="btn-text">select</span>
              </button>
            </div>
          </div>

          <div className="eventPage">
            <div className="row1">
              <div className="card1">
                <Card1 items={items} vendor={vendor} />
              </div>
              <div className="card2">
                <Card2 items={items} />
              </div>
            </div>
            <div className="row2">
              <div>
                <Venue items={items} />
              </div>
              <div className="contacts">
                <Contacts vendor={vendor} />
              </div>
            </div>
            <div className="row3">
              <div className="foodPrefernces">
                <Food items={items} />
              </div>
              <div className="events">
                <Events items={items} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default EventInfo;
