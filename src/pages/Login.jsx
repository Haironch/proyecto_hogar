import axios from "axios";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  username: yup.string().required("Igrese nombre de usuario"),
  password: yup.string().required("Igrese su contraseña"),
});

const colors = {
  primary: "#8AC926",
  secondary: "#ffffff",
  fontfamily: "'Chakra Petch', sans-serif",
};

const HomeWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.primary};
  color: ${colors.secondary};
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

  input {
    width: 100%;
    height: 100%;
  }
`;
const Button = styled.button`
  width: 100px;
  height: 44px;
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
    // const { data } = await axios.get("/api/getting");
    console.log(data);
    // if (data.status_code === 200) {
    //   navigate("/admin");
    // } else {
    //   alert("NO SE LOGRO INGRESAR");
    // }
  };

  return (
    <HomeWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="user-logo">
          <i className="fa-solid fa-user-tie"></i>
        </div>
        <InputContainer>
          <input {...register("username")} placeholder="Ingrese su usuario" />
          {errors.username && <p>{errors.username.message}</p>}
        </InputContainer>
        <InputContainer>
          <input
            {...register("password")}
            type="password"
            placeholder="Ingrese su ontraseña..."
          />
          {errors.username && <p>{errors.username.message}</p>}
        </InputContainer>
        <InputContainer>
          <Button>Ingresar</Button>
        </InputContainer>
      </Form>
    </HomeWrapper>
  );
}

export default Home;
