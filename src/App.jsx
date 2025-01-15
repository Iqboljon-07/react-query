import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

import { ToastContainer } from "react-toastify";
import Myproject from "./components/myproject";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
      <Myproject />
    </QueryClientProvider>
  );
}

export default App;
