export default function validation(userdata, errors, setErrors) {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  if (!userdata.username) {
    setErrors({
      ...errors,
      username: "Complete éste campo",
    });
  } else if (userdata.username.length > 35) {
    setErrors({
      ...errors,
      username: "El usuario no debe superar los 35 caracteres",
    });
  } else if (!regexEmail.test(userdata.username)) {
    setErrors({
      ...errors,
      username: "El usuario debe ser un email",
    });
  } else {
    setErrors({
      ...errors,
      username: "",
    });
  }

  if (userdata.password < 6 && userdata.password > 10) {
    setErrors({
      ...errors,
      password: "La contraseña debe tener entre 6 y 10 caracteres",
    });
  } else if (!/\d/.test(userdata.password)) {
    setErrors({
      ...errors,
      password: "La contraseña debe copntener al menos un numero",
    });
  } else {
    setErrors({
      ...errors,
      password: "",
    });
  }
}
