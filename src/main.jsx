import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import CommitteePage from "./pages/CommitteePage.jsx";
import BidOverviewPage from "./pages/BidOverviewPage.jsx";
import WinnerSelectPage from "./pages/WinnerSelectPage.jsx";
import SummaryPage from "./pages/SummaryPage.jsx";
import VerifyOtpPage from "./pages/VerifyOtpPage";
import VendorRevisePage from "./pages/VendorRevisePage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CommitteePage />} />

      <Route path="/status" element={<BidOverviewPage />} />
      <Route path="/winner" element={<WinnerSelectPage />} />
      <Route path="/summary" element={<SummaryPage />} />
      <Route path="/verify" element={<VerifyOtpPage />} />
      <Route path="/vendor/revise" element={<VendorRevisePage />} />
    
    
    </Routes>
  </BrowserRouter>
);



