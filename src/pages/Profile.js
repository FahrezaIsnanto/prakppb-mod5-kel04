import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import CardProfile from "../component/CardProfile";
import "./Profile.css";

export default function Profile() {
  const [data, setData] = useState([]);
  const githubUsernameList = [
    "FahrezaIsnanto","hasan0512","donnyridwan"
  ];  
  
  useEffect(()=>{
    const githubDataTemp = [];
    async function fetchData() {
      for(let i=0;i<githubUsernameList.length;i++){
        await axios
        .get("https://api.github.com/users/" + githubUsernameList[i])
        .then((res) => {
          githubDataTemp.push(res.data)
        })
        .catch((err) => {
          throw `gagal ${err.message}`; 
        });
      }
    }
  
    fetchData()
      .then(
        ()=> setData(githubDataTemp)
      )
      .catch(err=>alert(err));
  },[]);


    return (
      <>      
        <div className="containerTitle">
          <h1 className="textTitle">Anggota Kelompok</h1>
        </div>
        <div className="containerProfileContent">
       {data.map((item) => (
          <Fragment key={item.id}>
            <CardProfile
              avatar={item.avatar_url}
              username={item.login}
              email={item.email}
              name={item.name}
              blog={item.blog}
            />
          </Fragment>
        ))}
          
        </div>
      </>

    );
  }
  