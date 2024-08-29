import { BrowserRouter, Routes } from "react-router-dom";
// import { createBrowserRouter, RouterProvider} from "react-router-dom"
import { StudentList } from "./Components/StudentList";
// import ReactDOM from "react-dom/client";
import {Route } from "react-router-dom";
import { EditStudent } from "./Components/EditStudent";
import CreateStudent from "./Components/CreateStudent";
import DeleteStudent from "./Components/DeleteStudent";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <StudentList />,
  //     index: true,
  //   },
  // ]);

  return (
    <div>
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/edit/:id" component={EditStudent} />
        <Route path="/delete/:id" component={DeleteStudent} />
        <Route path="/create" component={CreateStudent} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
