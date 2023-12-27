import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AppHeader from "./components/AppHeader/AppHeader";
import PageRoutes from "./routes/PageRoutes";
import ProductsProvider from "./contexts/ProductsContext";
import AppFooter from "./components/AppFooter/AppFooter";
import AuthProvider from "./contexts/AuthContext";
import UserProvider from "./contexts/UserContext";
import ThemeProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <AuthProvider>
          <UserProvider>
            <ProductsProvider>
              <AppHeader />
              <main>
                <PageRoutes />
              </main>
              <AppFooter />
            </ProductsProvider>
          </UserProvider>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
