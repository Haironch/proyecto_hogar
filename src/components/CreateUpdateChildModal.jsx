import axios from "axios";
import styled from "styled-components";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { Button, ButtonGroup } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

import GamesContext from "../context/games/Context";

const schema = yup.object({
  name: yup.string().required("Ingrese el nombre del niño por favor."),
  lastname: yup.string().required("Ingrese el apellido del niño por favor."),
  age: yup.string().required("Ingrese la edad del niño por favor."),
  disabilityGrade: yup.string().required("Ingrese las observaciones del niño."),
});

const colors_theme = {
  primary: "#8AC926",
  secondary: "#003566",
  primaryHover: "#0077B6",
  texto: "#0582CA",
  fontfamily: "'Chakra Petch', sans-serif",
};

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
  color: ${colors_theme.text};

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
  width: auto;
  background-color: #81b29a;
  border-radius: 20px;

  .form-title {
    text-align: center;
  }
`;

// form
const Form = styled.form`
  width: 500px;
  padding: 5px;

  .user-logo {
    text-align: center;
    width: 100%;
    font-size: 128px;
  }
`;
const InputContainer = styled.div`
  margin-bottom: 18px;
  width: 100%;
  height: auto;

  input {
    width: 100%;
    height: 28px;
  }
`;

function CreateUpdateChildModal({ setShowModal, state, child }) {
  const { getChilds, getChildByID } = useContext(GamesContext);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { childId } = useParams();

  const onSubmit = async (formdata) => {
    if (state === "CREATE") {
      const { data } = await axios.post("/api/child", formdata);
      if (data.status_code === 200) {
        getChilds();
        toast(data.message);
      } else {
        toast.error(data.message);
      }
    } else {
      // Update child
      const { data } = await axios.put(`/api/child/${childId}`, formdata);
      if (data.status_code === 200) {
        getChildByID(childId);
        setShowModal(false);
        toast(data.message);
      } else {
        toast.error(data.message);
      }
    }
    reset();
  };

  return (
    <CreateUpdateChildModalWrapper onClick={() => setShowModal(false)}>
      <Content
        onClick={(e) => e.stopPropagation()}
        className=" px-[24px] pt-[32px] h-auto "
      >
        <h1 className="form-title text-3xl text-primary ">
          {state === "CREATE"
            ? "Agregar información del niño"
            : "Actualizar información del niño"}
        </h1>
        <Form onSubmit={handleSubmit(onSubmit)} className=" h-auto text-dark ">
          <div className="user-logo text-navbar ">
            <i className="fa-solid fa-child-reaching"></i>
          </div>
          <InputContainer>
            <Input
              {...register("name")}
              placeholder="Ingrese nombre del niño"
              defaultValue={state === "CREATE" ? "" : child.name}
            />
            {errors.name && (
              <p className=" text-red-600 ">{errors.name.message}</p>
            )}
          </InputContainer>
          <InputContainer>
            <Input
              {...register("lastname")}
              placeholder="Ingrese apellido del niño"
              defaultValue={state === "CREATE" ? "" : child.lastname}
            />
            {errors.lastname && (
              <p className=" text-red-600 ">{errors.lastname.message}</p>
            )}
          </InputContainer>
          <InputContainer>
            <Input
              {...register("age")}
              type="number"
              placeholder="Ingrese edad del niño"
              defaultValue={state === "CREATE" ? "" : child.age}
            />
            {errors.age && (
              <p className=" text-red-600 ">{errors.age.message}</p>
            )}
          </InputContainer>
          <InputContainer className=" mb-8 ">
            <Input
              {...register("disabilityGrade")}
              placeholder="Ingrese observaciones del niño"
              defaultValue={state === "CREATE" ? "" : child.disabilityGrade}
            />
            {errors.disabilityGrade && (
              <p className=" text-red-600 ">{errors.disabilityGrade.message}</p>
            )}
          </InputContainer>
          <InputContainer className=" flex justify-between mt-8 text-white ">
            <Button
              type="submit"
              className=" text-white bg-primary "
              radius="full"
              size="lg"
            >
              {state === "CREATE" ? (
                <p>
                  Agregar niño <i className=" fa-solid fa-plus "></i>
                </p>
              ) : (
                <p>
                  Actualizar niño <i className=" fa-solid fa-arrows-rotate"></i>
                </p>
              )}
            </Button>
            <Button
              type="button"
              className=" text-white bg-Red "
              radius="full"
              size="lg"
              onClick={() => setShowModal(false)}
            >
              Cancelar <i className=" fa-solid fa-times "></i>
            </Button>
          </InputContainer>
        </Form>
      </Content>
    </CreateUpdateChildModalWrapper>
  );
}

export default CreateUpdateChildModal;
