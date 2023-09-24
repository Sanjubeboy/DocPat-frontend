import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import GlobalContextWrapper from "./context/GlobalContextWrapper.jsx"
import { Provider } from "react-redux"
import store from "./store/index.js"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <GlobalContextWrapper>
        <App />
        <ToastContainer
          autoClose={1000}
          progressClassName={"text-prm"}
          position="top-center"
        />
      </GlobalContextWrapper>
    </Provider>
  </QueryClientProvider>
  // </React.StrictMode>
)
