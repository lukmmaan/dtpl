// AppRouter.js

import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "../Layout";
import Home from "../Home/Home";
import Services from "../Service/Service";
import Contact from "../Contact/Contact";
import RequestSurat from "../RequestSurat/RequestSurat";
import ApprovalSurat from "../ApprovalSurat/ApprovalSurat";
import StatusSurat from "../StatusSurat/StatusSurat";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Register from "../Register/Register";
import BlankPage from "../BlankPage/Blankpage";
import EditProfile from "../EditProfile/EditProfile";
import Keuangan from "../Keuangan/Keuangan";
import Pengaduan from "../Pengaduan/Pengaduan";
import DestinasiList from "../DestinasiList/DestinasiList";
import Berita from "../Berita/Berita";
import UMKMList from "../Umkm/UMKMList";
import UMKMDetail from "../Umkm/UMKMDetail";
import InputUmkm from "../InputUmkm/InputUmkm";
import UMKMApproval from "../Umkm/UMKMApproval";

const AppRouter = ({ user }) => {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/*"
          element={
            <Layout>
              <BlankPage />
            </Layout>
          }
        />
        <Route
          path="/umkm-list"
          element={
            <Layout>
              <UMKMList />
            </Layout>
          }
        />
        <Route
          path="/umkm/:id"
          element={
            <Layout>
              <UMKMDetail />
            </Layout>
          }
        />
        <Route
          path="/berita"
          element={
            <Layout>
              <Berita />
            </Layout>
          }
        />
        <Route
          path="/destinasi-list"
          element={
            <Layout>
              <DestinasiList />
            </Layout>
          }
        />
        <Route
          path="/pengaduan"
          element={
            <Layout>
              <Pengaduan />
            </Layout>
          }
        />
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/keuangan"
          element={
            <Layout>
              <Keuangan />
            </Layout>
          }
        />
        {user.fullName === "" && (
          <>
            <Route
              path="/login"
              element={
                <Layout>
                  <Login />
                </Layout>
              }
            />
            <Route
              path="/register"
              element={
                <Layout>
                  <Register />
                </Layout>
              }
            />
          </>
        )}
        {user.fullName !== "" && (
          <>
            <Route
              path="/pengajuan-surat"
              element={
                <Layout>
                  <RequestSurat />
                </Layout>
              }
            />
            <Route
              path="/approval-surat"
              element={
                <Layout>
                  <ApprovalSurat />
                </Layout>
              }
            />
            <Route
              path="/status-surat"
              element={
                <Layout>
                  <StatusSurat />
                </Layout>
              }
            />
            <Route
              path="/editProfile"
              element={
                <Layout>
                  <EditProfile />
                </Layout>
              }
            />
            {user.role === "user" && (
              <Route
                path="/input-umkm"
                element={
                  <Layout>
                    <InputUmkm />
                  </Layout>
                }
              />
            )}
            {user.role === "kepalaDesa" && (
              <Route
                path="/umkm-approval"
                element={
                  <Layout>
                    <UMKMApproval />
                  </Layout>
                }
              />
            )}
          </>
        )}
      </Routes>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(AppRouter);
