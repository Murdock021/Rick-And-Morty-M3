import { useState } from "react";
import style from "./form.module.css";
import validation from "./validation";

const Form = ({ login }) => {
  const [userdata, setUserdata] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUserdata({
      ...userdata,
      [e.target.name]: e.target.value,
    });

    validation(
      {
        ...userdata,
        [e.target.name]: e.target.value,
      },
      errors,
      setErrors
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    login(userdata);
  };

  const handleError = () => {
    alert("Todavia estamos trabajando en ello, pronto estará disponible");
  };

  return (
    <div className={style.bigdiv}>
      <div className={style.contFoto}>
        <div className={style.logo}></div>
      </div>
      <section className={style.section}>
        <div className={style.form_box}>
          <div className={style.form_value}>
            <form onSubmit={submitHandler}>
              <h2>Login</h2>
              <div className={style.inputbox}>
                <span>✉</span>
                <input
                  type="text"
                  name="email"
                  value={userdata.email}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="email">Username</label>
              </div>

              <div className={style.inputbox}>
                <span>⊗</span>
                <input
                  type="password"
                  name="password"
                  value={userdata.pass}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className={style.forget}>
                <label htmlFor="">
                  <input type="checkbox" />
                  Remember me.
                  <span onClick={handleError}>Forget Password</span>
                </label>
              </div>
              <button type="submit">Log in</button>
              <div className={style.register}>
                <p>
                  Don't have a account.
                  <span onClick={handleError}>Register</span>
                </p>
              </div>
            </form>
          </div>
        </div>
        {errors.email && (
          <p
            style={{
              color: "red",
              fontSize: "1rem",
              borderBottom: "solid red 1px",
              marginTop: "5px",
            }}
          >
            {errors.email}
          </p>
        )}
        {errors.password && (
          <p
            style={{
              color: "red",
              fontSize: "1.1rem",
              borderBottom: "solid red 1px",
              marginTop: "5px",
            }}
          >
            {errors.password}
          </p>
        )}
      </section>
    </div>
  );
};
export default Form;
