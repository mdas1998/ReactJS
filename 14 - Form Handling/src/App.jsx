import { useState } from "react";
import { useForm } from "react-hook-form";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };
  const onSubmit = async (data) => {
    await delay(2); // simulating network delay
    console.log(data);
    if (data.username != "micheal") {
      setError("myform", { message: "Username or Password is Invalid..." });
    }
    if(data.username == "rohan") {
      setError("blockedUser", {message: "Your account is bocked!"})
    }
    let r = await fetch("http://localhost:3000/", {method: 'POST', body: JSON.stringify(data), headers: {
    "Content-Type": "application/json",   
  },})
    let res = await r.text()
    console.log(data, res)
  };
  return (
    <>
      {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          {/* <input {...register("username", {required: true, minLength: 4, maxLength: 10})} type="text" placeholder='username'/>
          {errors.username && <div>There is some error in username</div>} */}
          <input
            {...register("username", {
              required: { value: true, message: "Username is required" },
              minLength: { value: 4, message: "Minimum Length should be 4" },
              maxLength: { value: 8, message: "Maximum length should be 8" },
            })}
            type="text"
            placeholder="username"
          />
          <br />
          {errors.username && errors.username.message}
          <br />
          <input
            {...register("password", {
              minLength: {
                value: 8,
                message: "Minimum password length should be 8",
              },
              required: { value: true, message: "Password is required" },
            })}
            type="password"
            placeholder="password"
          />
          <br />
          {errors.password && errors.password.message}
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />
          <br />
          {errors.myform && errors.myform.message}
          {errors.blockedUser && errors.blockedUser.message}
        </form>
      </div>
    </>
  );
}

export default App;
