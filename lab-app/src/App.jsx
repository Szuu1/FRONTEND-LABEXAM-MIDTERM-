import { Routes, Route, Navigate } from "react-router-dom";

import MedicineList from "./pages/MedicineList";
import AddMedicine from "./pages/AddMedicine";
import MedicineDetails from "./pages/MedicineDetails";
import Login from "./Login";
import Navbar from "./layout/Navbar";
import ProtectedRoute from "./ProtectedRoute";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />

                <Route element={<ProtectedRoute />}>
                    <Route
                        path="/medicine-list"
                        element={
                            <>
                                <Navbar />
                                <MedicineList />
                            </>
                        }
                    />

                    <Route
                        path="/add-medicine"
                        element={
                            <>
                                <Navbar />
                                <AddMedicine />
                            </>
                        }
                    />

                    <Route
                        path="/medicine-details/:id"
                        element={
                            <>
                                <Navbar />
                                <MedicineDetails />
                            </>
                        }
                    />
                </Route>

                <Route
                    path="*"
                    element={<Navigate to="/login" replace />}
                />
            </Routes>
        </>
    );
}
