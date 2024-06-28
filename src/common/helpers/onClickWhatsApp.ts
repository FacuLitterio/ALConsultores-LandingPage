export const PHONE_NUMBER = "+5491155256272";

const onClickWhatsApp = () => {
  const message = encodeURIComponent(
    "¡Hola! Quiero información sobre AL Consultores y sus servicios financieros. ¿Podemos hablar?"
  );
  window.open(`https://wa.me/${PHONE_NUMBER}/?text=${message}`, "_blank");
};

export default onClickWhatsApp;
