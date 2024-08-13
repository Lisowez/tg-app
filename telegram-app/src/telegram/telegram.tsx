export default function telega() {
  //@ts-ignore
  const { initDataUnsafe } = window.Telegram.WebApp;

  if (initDataUnsafe?.user?.language_code) {
    return initDataUnsafe.user.language_code;
  } else {
    //@ts-ignore
    console.log(window.Telegram.WebApp);
    return "";
  }
}
