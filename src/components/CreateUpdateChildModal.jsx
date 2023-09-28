import axios from "axios";
import { useContext } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from 'react-toastify';

import GamesContext from "../context/games/Context";

const schema = yup.object({
  name: yup.string().required("Ingrese el nombre del niño por favor."),
  lastname: yup.string().required("Ingrese el apellido del niño por favor."),
  age: yup.string().required("Ingrese la edad del niño por favor."),
  disabilityGrade: yup.string().required("Ingrese las observaciones del niño."),
});

const CreateUpdateChildModalWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);

  .close-icon {
    position: absolute;
    top: 56px;
    right: 56px;
    color: red;
    font-size: 36px;
    cursor: pointer;
  }
`;
const Content = styled.div`
    padding: 56px 24px;
    width: auto;
    background-color: black;

    .form-title {
        text-align: center;
        margin-bottom: 32px;
    }
`;

// form
const Form = styled.form`
  width: 500px;
  height: auto;
  border: 1px solid gray;
  padding: 24px;

  .user-logo {
    text-align: center;
    width: 100%;
    font-size: 128px;
  }
`;
const InputContainer = styled.div`
  margin: 24px 0;
  margin-bottom: 48px;
  width: 100%;
  height: auto;

  input {
    width: 100%;
    height: 28px;
  }
`;
const Button = styled.button`
  width: 100px;
  height: 44px;
`;

function CreateUpdateChildModal({ setShowModal }) {
  const  { getChilds } = useContext(GamesContext)

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (formdata) => {
   const { data } = await axios.post("/api/child", formdata) 
   if (data.status_code === 200) {
      getChilds();
      toast(data.message)
   } else {
      toast.error(data.message)
   }
  };

  return (
    <CreateUpdateChildModalWrapper>
      <div className="close-icon" onClick={() => setShowModal(false)}>
        <i className="fa-solid fa-times"></i>
      </div>
      
      <Content>
      <h1 className="form-title">Agregar información de niño</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="user-logo">
          <i className="fa-solid fa-user-tie"></i>
        </div>
        <InputContainer>
          <input {...register("name")} placeholder="Ingrese nombre del niño" />
          {errors.name && <p>{errors.name.message}</p>}
        </InputContainer>
        <InputContainer>
          <input {...register("lastname")} placeholder="Ingrese nombre del niño" />
          {errors.lastname && <p>{errors.lastname.message}</p>}
        </InputContainer>
        <InputContainer>
          <input
            {...register("age")}
            type="number"
            placeholder="Ingrese edad del niño.."
          />
          {errors.age && <p>{errors.age.message}</p>}
        </InputContainer>
        <InputContainer>
          <input
            {...register("disabilityGrade")}
            placeholder="Ingrese observaciones o grado de"
          />
          {errors.observations && <p>{errors.observations.message}</p>}
        </InputContainer>
        <InputContainer>
          <Button>Agregar niño</Button>
        </InputContainer>
      </Form>
      </Content>
    </CreateUpdateChildModalWrapper>
  );
}

export default CreateUpdateChildModal;
