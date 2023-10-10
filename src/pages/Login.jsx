import axios from "axios";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

import { toast } from "react-toastify";

const schema = yup.object({
  name: yup.string().required("Ingrese nombre por favor"),
  password: yup.string().required("Ingrese su contraseña por favor"),
});

///ESTILOS----------------------------------------------------------

const colors = [
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
];
const colors_themes = {
  primary: "#8AC926",
  secondary: "#003566",
  primaryHover: "#0077B6",
  texto: "#0582CA",
  fontfamily: "'Chakra Petch', sans-serif",
};

const HomeWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${colors_themes.primary};
  color: ${colors_themes.secondary};
`;
const Form = styled.form`
  width: 500px;
  height: 400px;
  padding: 24px;

  .user-logo {
    text-align: center;
    width: 100%;
    font-size: 128px;
  }
`;
const InputContainer = styled.div`
  margin: 24px 0;
  width: 100%;
  height: 28px;
  color: ${colors_themes.texto};

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
    console.log(data);
    if (data.status_code === 200) {
      localStorage.setItem("user_token", JSON.stringify(data.token))
      localStorage.setItem("user_data", JSON.stringify(data.user_data))
      navigate("/admin");
    } else {
      toast.warning("Datos inválidos")
    }
  };

  return (
    <HomeWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="user-logo">
          <i className="fa-solid fa-user-tie"></i>
        </div>
        <InputContainer className="w-full flex flex-row flex-wrap gap-4">
          <Input
            color={"success"}
            {...register("name")}
            placeholder="Ingrese su usuario"
          />
          {errors.username && <p>{errors.username.message}</p>}
        </InputContainer>
        <InputContainer>
          <Input
            color={"success"}
            {...register("password")}
            type="password"
            placeholder="Ingrese su ontraseña..."
          />
          {errors.username && <p>{errors.username.message}</p>}
        </InputContainer>
        <InputContainer>
          <Button type="submit" color="primary" variant="ghost" radius="full" size="lg">
            Ingresar
          </Button>
        </InputContainer>
      </Form>
    </HomeWrapper>
  );
}

export default Home;
