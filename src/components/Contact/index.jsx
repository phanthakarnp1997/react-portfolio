import "./index.scss";
import React from "react";
import withLoader from "../../utils/withLoader";
import AnimateText from "../AnimateText";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

function Contact() {
  let schema = object({
    name: string().required(),
    email: string().email().required(),
    subject: string().required(),
    message: string().required(),
  });
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {},
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

  const handleSave = (formValues) => {
    console.log(formValues);
  };
  return (
    <>
      <div className="container contact-page">
        <h1>
          <AnimateText
            idx={1}
            letterClass="text-animate-hover"
            text="Contact Me"
          />
        </h1>
        <div className="form-container">
          <form onSubmit={handleSubmit(handleSave)}>
            <div>
              <input
                type="text"
                {...register("name", { required: true })}
                autoComplete={"new-password"}
                placeholder="Name"
              />
              <div className="validate-message">{errors.name?.message}</div>
            </div>
            <div>
              <input
                {...register("email")}
                type="text"
                autoComplete={"new-password"}
                placeholder="Email"
              />
              <div className="validate-message">{errors.email?.message}</div>
            </div>
            <div>
              <input
                {...register("subject")}
                type="text"
                autoComplete={"new-password"}
                placeholder="Subject"
              />
              <div className="validate-message">{errors.subject?.message}</div>
            </div>
            <div>
              <textarea
                {...register("message")}
                type="text"
                placeholder="Message"
              />
              <div className="validate-message">{errors.message?.message}</div>
            </div>
            <div>
              <input type="submit" value="Send"></input>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default withLoader(Contact);
