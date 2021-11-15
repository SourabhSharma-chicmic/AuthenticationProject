const { useState } = require("react");

const FormDataUse = () => {
  const [formValues, setFormdata] = useState({
    name: "",
    img: "",
    age: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    if (name == "img") {
      const reader = new FileReader();

      reader.onload = () => {
        setFormdata({ ...formValues, [name]: reader.result });
      };

      reader.readAsDataURL(e.target.files[0]);
      // setFormdata({...formValues, [name] : e.target.files})
    } else {
      setFormdata({ ...formValues, [name]: value });
    }
  };

  const PostDataHander =  () => {
    // console.log(for)
    const formData = new FormData();
    formData.append("name", formValues.name);
    formData.append("salary", formValues.img);
    formData.append("age", formValues.age);
    console.log(formData);
    try {
      fetch("https://61922ce9aeab5c0017105e0c.mockapi.io/UserData", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formValues);

    PostDataHander();
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input onChange={onChangeHandler} type="text" name="name" />
        <br />
        <input onChange={onChangeHandler} type="text" name="age" />
        <br />
        <input onChange={onChangeHandler} multiple type="file" name="img" />
        <br />
        <button type="submit">Submit</button>
      </form>{" "}
    </>
  );
};

export default FormDataUse;
