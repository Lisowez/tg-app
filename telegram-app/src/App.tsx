import { useState } from "react";
import telega from "./telegram/telegram";
import { LanguageContext } from "./utils/context";
import { RouterProvider } from "react-router-dom";
import { router } from "./utils/routing";

function App() {
  const telegramWebApp = telega();
  const [languageInfo, setLanguageInfo] = useState("ru");

  if (
    telegramWebApp &&
    telegramWebApp.initDataUnsafe?.user?.language_code === "ru"
  ) {
    setLanguageInfo("ru");
  } else {
    setLanguageInfo("eng");
  }

  return (
    <LanguageContext.Provider value={languageInfo}>
      <>
        {" "}
        <div
          onClick={() => {
            setLanguageInfo(languageInfo === "ru" ? "eng" : "ru");
          }}
          className='language_button'
        >
          {languageInfo! === "ru" ? "eng" : "ru"}
        </div>
        <RouterProvider router={router} />
      </>
    </LanguageContext.Provider>
  );
}

export default App;
