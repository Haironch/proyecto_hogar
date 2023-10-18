import axios from "axios";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

import { toast } from "react-toastify";

import logo from "/public/hermano-pedro-hogar-logo.jpeg"

const schema = yup.object({
  name: yup.string().required("Ingrese su nombre por favor"),
  password: yup.string().required("Ingrese su contraseña por favor"),
});

const HomeWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const Form = styled.form`

  .user-logo {
    text-align: center;
    width: 100%;
    font-size: 128px;
  }
`;
const InputContainer = styled.div`
  margin: 24px 0;
  width: 100%;

  input {
    width: 100%;
    height: 100%;
  }
`;

function Home() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (formdata) => {
    const { data } = await axios.post("/api/login", formdata);
    if (data.status_code === 200) {
      localStorage.setItem("user_token", JSON.stringify(data.token))
      localStorage.setItem("user_data", JSON.stringify(data.user_data))
      navigate("/admin");
    } else {
      toast.warning("Datos inválidos")
    }
  };

  return (
    <HomeWrapper className=" bg-bg ">
      <Form className=" w-[500px] h-auto " onSubmit={handleSubmit(onSubmit)}>
        <div className="user-logo">
          <img src={logo} className=" rounded-[10px] " alt="Hermano Pedro Hogar" />
        </div>
        <InputContainer>
          <Input
            color={"success"}
            {...register("name")}
            placeholder="Ingrese su nombre"
          />
          {errors.name && <p className=" text-red-600 ">{errors.name.message}</p>}
        </InputContainer>
        <InputContainer>
          <Input
            color={"success"}
            {...register("password")}
            type="password"
            placeholder="Ingrese su contraseña"
          />
          {errors.password && <p className=" text-red-600 ">{errors.password.message}</p>}
        </InputContainer>
        <InputContainer>
          <Button type="submit" color="primary" className=" " variant="ghost" radius="full" size="lg">
            Ingresar
          </Button>
        </InputContainer>
      </Form>
    </HomeWrapper>
  );
}

export default Home;
