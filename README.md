# Install dependencies

1. React
2. Tailwind css
3. React Router Dom
4. Hero Icon
5. Axios
6. Recharts

## Details

1. React
   a. npx crate-react-app my-app
2. Tailwind css
   a. npm install -D tailwindcss
   b. npx tailwindcss init
   c. much more from doc
3. React Router dom
   a. index.js =>
   <BrowserRouter>
   <App />
   </BrowserRouter>,
   b. app.js =>
   <Routes>
   <Route path="/" element={<Home></Home>}></Route>
   <Route path="/products" element={<Products></Products>}></Route>
   <Route path="/users" element={<Users></Users>}></Route>
   </Routes>

4. Hero Icon
   a. npm install @heroicons/react
5. Axios
   a. npm install axios

6. Recharts
   a. npm install recharts

# Working Tree

### Theme Configuration

1. Inside Theme component you got getThemeVariants. Here you can customize you theme color.
2. And Inside Theme you can modify your theme. Event Handlers will get data from getThemeVariants and put it to context(app.js)

### Setup Context for Theme Configuration

1. Create two context one for themeMode (Current theme) and another for themeVariables.
2. Code will be like this:
   const ThemeMode = createContext("dark");
   const ThemeData = createContext({});
   const [currentTheme, setCurrentTheme] = useState("dark");
   const [themeData, setThemeData] = useState({});
   <ThemeMode.Provider value={[currentTheme, setCurrentTheme]}>
   <ThemeData.Provider value={[themeData, setThemeData]}>
3. Inside Theme.js you get data from useContext and modify and put it to context(app.js)
4. Use it anywhere you want.

### After That User Page Configuration

1. All functions inside users.js
   $$ Products are same as User Page.
