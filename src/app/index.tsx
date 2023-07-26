import React from "react";
import { Routes, Route } from "react-router-dom";
import { ContactsPage } from "../pages/contacts";
import { LayoutWrapper } from "../pages/layout-wrapper";
import { MainPage } from "../pages/main";
import { MessagesPage } from "../pages/messages";
import { NotificationsPage } from "../pages/notifications";
import { WorkPage } from "../pages/work";
import { LoginPage } from "../pages/login";

function App() {
  return (
    <div className="text-mainBlack">
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/" element={<LayoutWrapper />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
