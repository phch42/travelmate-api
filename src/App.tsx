import MainLayout from "./layouts/MainLayout";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {

  return (
    <LanguageProvider>
      <MainLayout />
    </LanguageProvider>
  )
}

export default App;