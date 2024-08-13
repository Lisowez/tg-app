export default function telega() {
  //@ts-ignore
  console.log(window.Telegram.WebApp.initDataUnsafe.user);
  //@ts-ignore
  return window.Telegram.WebApp;
}
