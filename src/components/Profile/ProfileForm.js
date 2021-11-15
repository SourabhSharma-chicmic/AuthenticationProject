import { useRef ,useContext } from "react";
import classes from "./ProfileForm.module.css";
import { IdTokenn } from "../ContextAPI/IdToken";
import { useHistory } from "react-router-dom";

const ProfileForm = () => {

  const history = useHistory();
  const passwordRef = useRef();

  const [idToken, setIdToken] = useContext(IdTokenn)

  const submitHandler = (e) => {
    e.preventDefault();
     let url = 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD9PMUJE_899hywkB9GyCiIviZFDhC7ueg'
    fetch(url , {
      method:'POST',
      body: JSON.stringify({
        idToken :idToken.id,
        password: passwordRef.current.value,
        returnSecureToken :true
      }) ,
      headers:{
        'Content-Type':'application/json'
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            throw new Error(data.error.message);
          });
        }
      })
      .then((data) => {
        console.log('passowrd changed' ,data);
        history.replace('/auth')
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input ref={passwordRef} type="password" id="new-password" />
      </div>
      <div className={classes.action}>
        <button type='submit'>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
