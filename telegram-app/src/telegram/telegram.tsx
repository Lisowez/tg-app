export default function telega() {
  //@ts-ignore
  const { initDataUnsafe } = window.Telegram.WebApp;
  if (initDataUnsafe?.user?.language_code) {
    console.log(initDataUnsafe.user.language_code);
    return initDataUnsafe.user.language_code;
  } else {
    console.log("User language code not available");
    //@ts-ignore
    return "111";
  }
}
