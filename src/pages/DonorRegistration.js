import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DonorRegistration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    dateOfBirth: "",
    bloodType: "",
    gender: "",
    address: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    hasMedicalConditions: false,
    medicalConditions: "",
    // Donation preferences
    isOrganDonor: false,
    isTissueDonor: false,
    isFluidDonor: false,
    // Organ donations
    organs: {
      heart: false,
      intestines: false,
      kidney: false,
      liver: false,
      lungs: false,
      pancreas: false,
    },
    // Tissue donations
    tissues: {
      birthTissues: false,
      bones: false,
      corneas: false,
      heartValves: false,
      skin: false,
      tendons: false,
      veins: false,
    },
    // Fluid donations (blood is separate)
    fluids: {
      plasma: false,
      breastMilk: false,
    },
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const submissionData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        dateOfBirth: formData.dateOfBirth,
        bloodType: formData.bloodType,
        gender: formData.gender,
        address: formData.address,
        emergencyContact: {
          name: formData.emergencyContactName,
          phone: formData.emergencyContactPhone
        },
        medicalHistory: {
          hasConditions: formData.hasMedicalConditions,
          conditions: formData.medicalConditions || null
        },
        donationPreferences: {
          organs: formData.organs,
          tissues: formData.tissues,
          fluids: formData.fluids
        },
        isOrganDonor: formData.isOrganDonor,
        isTissueDonor: formData.isTissueDonor,
        isFluidDonor: formData.isFluidDonor
      };

      const response = await fetch("http://localhost:5000/api/donors/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(`Donor Registered Successfully! Welcome, ${data.donor.first_name}!`);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
          phone: "",
          dateOfBirth: "",
          bloodType: "",
          gender: "",
          address: "",
          emergencyContactName: "",
          emergencyContactPhone: "",
          hasMedicalConditions: false,
          medicalConditions: "",
          isOrganDonor: false,
          isTissueDonor: false,
          isFluidDonor: false,
          organs: Object.keys(formData.organs).reduce((acc, key) => ({ ...acc, [key]: false }), {}),
          tissues: Object.keys(formData.tissues).reduce((acc, key) => ({ ...acc, [key]: false }), {}),
          fluids: Object.keys(formData.fluids).reduce((acc, key) => ({ ...acc, [key]: false }), {}),
        });
        navigate("/login");
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Failed to register. Please check your connection.");
      console.error("Registration error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
            Join LifeLink - Save Lives Today
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Your generosity can make a life-changing difference. Register now to become an organ, tissue, fluid, or blood donor.
          </p>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  required
                  minLength="6"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  required
                  minLength="6"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Blood Type</label>
                <select
                  name="bloodType"
                  value={formData.bloodType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  required
                >
                  <option value="">Select Blood Type</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none"
                required
              ></textarea>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Emergency Contact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Contact Name</label>
                  <input
                    type="text"
                    name="emergencyContactName"
                    value={formData.emergencyContactName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Contact Phone</label>
                  <input
                    type="tel"
                    name="emergencyContactPhone"
                    value={formData.emergencyContactPhone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Medical History</h3>
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="hasMedicalConditions"
                    checked={formData.hasMedicalConditions}
                    onChange={handleChange}
                    className="rounded focus:ring-red-500 focus:ring-2"
                  />
                  <span className="ml-2 text-gray-700">I have medical conditions that I should disclose</span>
                </label>
              </div>

              {formData.hasMedicalConditions && (
                <div className="mt-4">
                  <label className="block text-gray-700 font-medium mb-2">Please describe your medical conditions</label>
                  <textarea
                    name="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={handleChange}
                    rows="3"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Describe any medical conditions, allergies, or medications..."
                  ></textarea>
                </div>
              )}
            </div>

            <div className="bg-white border-2 border-red-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Choose Your Donation Types</h3>
              <p className="text-center text-gray-600 mb-6">Select what you'd like to donate to save more lives</p>

              {/* Organ Donation */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    name="isOrganDonor"
                    checked={formData.isOrganDonor}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      setFormData({
                        ...formData,
                        isOrganDonor: checked,
                        organs: Object.keys(formData.organs).reduce((acc, key) => ({ ...acc, [key]: false }), {})
                      });
                    }}
                    className="w-4 h-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <label className="ml-3 text-lg font-medium text-gray-900">I wish to become an Organ Donor</label>
                </div>

                {formData.isOrganDonor && (
                  <div className="ml-7 grid grid-cols-2 md:grid-cols-3 gap-3">
                    {Object.entries(formData.organs).map(([organ, isSelected]) => (
                      <div key={organ} className="flex items-center">
                        <input
                          type="checkbox"
                          name={`organ_${organ}`}
                          checked={isSelected}
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              organs: { ...formData.organs, [organ]: e.target.checked }
                            });
                          }}
                          className="w-4 h-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                        />
                        <label className="ml-2 text-sm text-gray-700 capitalize">{organ.replace(/([A-Z])/g, ' $1').trim()}</label>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Tissue Donation */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    name="isTissueDonor"
                    checked={formData.isTissueDonor}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      setFormData({
                        ...formData,
                        isTissueDonor: checked,
                        tissues: Object.keys(formData.tissues).reduce((acc, key) => ({ ...acc, [key]: false }), {})
                      });
                    }}
                    className="w-4 h-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <label className="ml-3 text-lg font-medium text-gray-900">I wish to donate Tissues</label>
                </div>

                {formData.isTissueDonor && (
                  <div className="ml-7 grid grid-cols-2 md:grid-cols-3 gap-3">
                    {Object.entries(formData.tissues).map(([tissue, isSelected]) => (
                      <div key={tissue} className="flex items-center">
                        <input
                          type="checkbox"
                          name={`tissue_${tissue}`}
                          checked={isSelected}
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              tissues: { ...formData.tissues, [tissue]: e.target.checked }
                            });
                          }}
                          className="w-4 h-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                        />
                        <label className="ml-2 text-sm text-gray-700 capitalize">
                          {tissue === 'birthTissues' ? 'Birth Tissues' :
                           tissue === 'heartValves' ? 'Heart Valves' :
                           tissue.replace(/([A-Z])/g, ' $1').trim()}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Fluid Donation */}
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    name="isFluidDonor"
                    checked={formData.isFluidDonor}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      setFormData({
                        ...formData,
                        isFluidDonor: checked,
                        fluids: Object.keys(formData.fluids).reduce((acc, key) => ({ ...acc, [key]: false }), {})
                      });
                    }}
                    className="w-4 h-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <label className="ml-3 text-lg font-medium text-gray-900">I wish to donate Fluids (besides Blood)</label>
                </div>

                {formData.isFluidDonor && (
                  <div className="ml-7 grid grid-cols-2 gap-3">
                    {Object.entries(formData.fluids).map(([fluid, isSelected]) => (
                      <div key={fluid} className="flex items-center">
                        <input
                          type="checkbox"
                          name={`fluid_${fluid}`}
                          checked={isSelected}
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              fluids: { ...formData.fluids, [fluid]: e.target.checked }
                            });
                          }}
                          className="w-4 h-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                        />
                        <label className="ml-2 text-sm text-gray-700 capitalize">
                          {fluid === 'breastMilk' ? 'Breast Milk' : fluid}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                <div className="flex">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-800">
                      <strong>Important:</strong> Blood donation options are configured separately. Please contact us for information about becoming a whole blood donor.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 text-white py-3 sm:py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Registering..." : "Register as Donor"}
            </button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            Already registered?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-red-600 hover:text-red-800 font-medium underline"
            >
              Sign in here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DonorRegistration;
