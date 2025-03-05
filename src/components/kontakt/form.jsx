import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Navn skal være mindst 2 tegn")
    .required("Navn er påkrævet"),
  email: yup.string().email("Ugyldig email").required("Email er påkrævet"),
  subject: yup
    .string()
    .min(3, "Emne skal være mindst 3 tegn")
    .required("Emne er påkrævet"),
  message: yup
    .string()
    .min(10, "Besked skal være mindst 10 tegn")
    .required("Besked er påkrævet"),
  newsletter: yup.boolean(),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form data:", data);
  };

  return (
    <form
      className="kontakt__container__form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="kontakt__container__form__groupped">
        <div className="kontakt__container__form__group">
          <label>Navn</label>
          <input
            type="text"
            placeholder="Indtast dit navn"
            {...register("name")}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        <div className="kontakt__container__form__group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Indtast din email"
            {...register("email")}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>
      </div>

      <div className="kontakt__container__form__group">
        <label>Emne</label>
        <input
          type="text"
          placeholder="Indtast emne"
          {...register("subject")}
        />
        {errors.subject && <p className="error">{errors.subject.message}</p>}
      </div>

      <div className="kontakt__container__form__group">
        <label>Besked</label>
        <textarea
          placeholder="Indtast din besked..."
          rows="5"
          cols="50"
          {...register("message")}
        />
        {errors.message && <p className="error">{errors.message.message}</p>}
      </div>

      <div className="kontakt__container__form__checkbox">
        <input type="checkbox" id="newsletter" {...register("newsletter")} />
        <label htmlFor="newsletter">
          Ja tak, jeg vil gerne modtage Din Mæglers nyhedsbrev.
        </label>
      </div>

      <button type="submit" className="kontakt__container__form__btn">
        Send besked
      </button>
    </form>
  );
};

export default ContactForm;
