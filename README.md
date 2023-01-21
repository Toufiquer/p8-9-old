# Install dependencies

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
