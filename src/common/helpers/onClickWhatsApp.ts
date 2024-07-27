export const PHONE_NUMBER = "+5491155256272";
export const EMAIL = "alconsultores_economicos@gmail.com";

const onClickWhatsApp = () => {
  const subject = encodeURIComponent(
    "Información sobre AL Consultores y sus servicios financieros"
  );
  const body = encodeURIComponent(
    "¡Hola! Quiero información sobre AL Consultores y sus servicios financieros. ¿Podemos hablar?"
  );
  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${subject}&body=${body}`,
    "_blank"
  );
};

export default onClickWhatsApp;
