import React, { useEffect, useState } from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Contacts from "./Contacts";
import Events from "./Events";
import Food from "./Food";
import Venue from "./Venue";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useNavigate, useParams } from "react-router-dom";
import Selected from "./Selected";
import CardList from "./CardList";
import CardItem from "./CardItem";
import { useDispatch } from "react-redux";
import { selecteditems } from "../../redux/selectedstore";
import BASE_URL from "../../utills/api-utill";
const EventInfo = () => {
  const dispatch=useDispatch()
  const navigate = useNavigate();
  const params = useParams();
  const [items, setitems] = useState();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/proposal/${params.id}`)
      .then((res) => {
        setitems(res.data.proposal);
        console.log(res.data.proposal);
      })
      .catch((err) => console.log(err));
  }, []);
  

  const selectbtn = () => {
    const token=localStorage.getItem("token")
    const user=jwtDecode(token)
    const id=user.user.id
    console.log(params.id);
    const p_id = params.id;
    axios.put(`http://localhost:5000/update/${id}`,{
      "selected":items
    }).then((res)=>{
      dispatch(selecteditems(res.data.data.selected))
    }).catch((err)=> console.log(err))
    navigate("/user/proposals")
  };

  return (
    <div>
      {items ? (
        <>
          <div className="col1">
            <div className="event-data">
              {" "}
              <span className="col1-proposals">Proposals</span>{" "}
              <span className="col1-icon"></span>{" "}
              <span className="col1-contract">Jordan Contract</span>
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
                <Card1 items={items} />
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
                <Contacts />
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
