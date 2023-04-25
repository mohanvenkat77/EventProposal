import React, { useState, useEffect } from "react";
import CardList from "./CardList";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../utills/api-utill";
import { getCurrentUser, getToken } from "../../utills/storage-utills";
import Scard from "./Scard";
import { useSelector } from "react-redux";

const User = () => {
  const { list } = useSelector((state) => state.selected);

  const navigate = useNavigate();
  const [items, setitems] = useState();
  const [selectedList, setSelectedList] = useState([]);

  useEffect(() => {
    if (!getToken() || !getCurrentUser().isUser) return navigate("/");
    axios
      .get(`${BASE_URL}/proposal`)
      .then((res) => {
        setitems(res.data.proposals);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  useEffect(() => {
    setSelectedList(getCurrentUser().selected);
  }, [list])

  return (
    <div>
      <div>
        <img className="headerimg" src={"/party2x.jpg"} alt="name" />
      </div>
      {selectedList.length > 0 ? (
        <>
          <div className="selcteddiv">
            {" "}
            <span className="selectedtext">Selected</span>
          </div>
          <div className="slistmain">
            {selectedList.map((lis) => (
              <div className="slist">
                <Scard items={lis} />
              </div>
            ))}
          </div>
        </>
      ) : null}
      <div className="proposals">
        <p>Proposals</p>
      </div>
      <div className="eventlists">
        {items ? <CardList items={items} /> : null}
      </div>
    </div>
  );
};

export default User;
