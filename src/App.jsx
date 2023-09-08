import AppRouter from "./components/AppRouter";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "./views/LandingPageView/LandingPage/LandingPage";
import { AuthContextProvider } from "./context/UserContext";
import { AppContextProvider } from "./context/AppContext";
import { Toaster } from 'react-hot-toast'
import { LoadScript } from '@react-google-maps/api';

const VITE_GOOGLE_API_FILE = 'AIzaSyArxnIuFJJezK4Zo99XnTJLy-wm1piTrBw';

const App = () => (
  <LoadScript googleMapsApiKey={VITE_GOOGLE_API_FILE}>
    <AuthContextProvider>
      <AppContextProvider>
        <BrowserRouter>
          <div className="bg-primary w-full overflow-hidden">
            {<LandingPage /> && <AppRouter />}
          </div>
          <Toaster position="top-right" />
        </BrowserRouter>
      </AppContextProvider>
    </AuthContextProvider>
  </LoadScript>
)


export default App;
