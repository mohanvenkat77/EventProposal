import React, { useState, useEffect, useContext } from "react";
import CardList from "./CardList";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BASE_URL, { allSelectedProposal_api } from "../../utills/api-utill";
import { getCurrentUser, getToken } from "../../utills/storage-utills";
import Scard from "./Scard";
import { UserSelectedProposal } from "../../contexts/UserContext";
import PaginationCard from "./PaginationCard";
const User = () => {

  const {selectedList, onChangeList} = useContext(UserSelectedProposal);

  const navigate = useNavigate();
  const [items, setitems] = useState();
  const [pageitems,setPageitems]=useState()
console.log(items);
  useEffect(() => {
    if (!getToken() || !getCurrentUser().isUser) return navigate("/");
    
    allSelectedProposal_api(getCurrentUser()._id)
    .then(res => {
      if(res.status === "Success") {
        onChangeList(res.proposals);
      } else alert(res.message);
    })
    .catch(err => alert(err.message));

    axios
      .get(`${BASE_URL}/proposal`)
      .then((res) => {
        setitems(res.data.proposals);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);



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
                <Scard item={lis} />
              </div>
            ))}
          </div>
        </>
      ) : null}
      <div className="proposals">
        <p>Proposals</p>
      </div>
      {/* <div className="eventlists"> */}
      <div className="pagination">
        <PaginationCard items={items} pageitemss={setPageitems}/>
      {/* </div> */}
      </div>
    </div>
  );
};

export default User;
