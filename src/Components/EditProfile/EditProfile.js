import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateUserProfile } from "../../redux/reducers/userActions";
import Axios from "axios";
import swal from "sweetalert";

import { API_URL, Headers } from "../../Constants/Api";
import "./EditProfile.css";

const EditProfile = ({ user }) => {
  const [formData, setFormData] = useState({
    fullName: user?.fullName || "", // Menggunakan operator "?"
    email: user?.email || "",
    password: "",
    role: user?.role || "",
  });

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const isAdmin = user?.role === "admin"; // Menggunakan operator "?"
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Mengambil data pengguna dari API (mock data)
    Axios.get(`${API_URL}/users`, Headers(user.token))
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitRole = (e) => {
    e.preventDefault();
    setIsLoading(true);

    Axios.put(
      `${API_URL}/users/${selectedUser._id}`,
      { role: formData.role },
      Headers(user.token)
    )
      .then((response) => {
        Axios.get(`${API_URL}/users`, Headers(user.token))
          .then((response) => {
            setUsers(response.data);
            setIsModalVisible(false);
            swal({
              title: "Role Berhasil Terganti",
              icon: "success",
              button: "OK !",
            });
          })
          .catch((error) => {
            console.error("Error fetching user data:", error);
            swal({
              title: "Gagal Reload Data",
              text: "Gagal Reload Data",
              icon: "error",
              button: "OK",
            });
          })
          .finally(() => {
            setIsLoading(false);
          });
      })
      .catch((error) => {
        swal({
          title: "Gagal Mengganti Role",
          text: "Gagal Mengganti Role",
          icon: "error",
          button: "OK",
        });
        console.error("Error updating user role:", error);
        setIsLoading(false);
      });
  };

  const handleEditUser = (selectedId) => {
    const userToEdit = users.find((user) => user._id === selectedId);
    
    if (userToEdit) {
      setSelectedUser(userToEdit);
      setIsModalVisible(true);
    }
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
    setIsModalVisible(false);
  };

  return isAdmin && user?.fullName ? (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      {isAdmin && (
        <div className="admin-data">
          <ul className="user-list">
            {users.map((userData) => (
              <li key={userData.id}>
                {userData.fullName}
                <button onClick={() => handleEditUser(userData._id)}>
                  Edit
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {isModalVisible && selectedUser && (
        <div className="user-modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Edit User</h2>
            <form onSubmit={handleSubmitRole}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={selectedUser.fullName}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={selectedUser.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="role">Role</label>
                <select
                  id="role"
                  name="role"
                  onChange={handleChange}
                  value={formData.role}
                  className="form-input"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                  <option value="kepalaRT">Kepala RT</option>
                  <option value="kepalaRW">Kepala RW</option>
                  <option value="kepalaDesa">Kepala desa</option>
                </select>
              </div>
              {isAdmin && (
                <button
                  type="submit"
                  className="submit-button"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Save"}
                </button>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  ) : (
    <div className="userView">
      <h2 style={{ fontSize: "24px" }}>Hi {user?.fullName}</h2>
      <p style={{ fontSize: "18px" }}>
        Selamat datang di profil Anda. Semoga hari Anda menyenangkan!
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

const mapDispatchToProps = {
  updateUserProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
