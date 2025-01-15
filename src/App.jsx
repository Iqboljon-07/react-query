import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import MyComponent from "./components/MyComponent";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "./components/navbar/navbar";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MyComponent />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </QueryClientProvider>
  );
}

export default App;
