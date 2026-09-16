import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function MedicineDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [medicine, setMedicine] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(`/api/medicines/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Medicine not found.");
                }

                return response.json();
            })
            .then((data) => {
                setMedicine(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <p>Loading medicine details...</p>;
    }

    if (error) {
        return (
            <div>
                <p style={{ color: "red" }}>
                    Error: {error}
                </p>

                <button onClick={() => navigate("/medicine-list")}>
                    Back
                </button>
            </div>
        );
    }

    return (
        <div>
            <h1>Medicine Details</h1>

            <p>
                <strong>Brand Name:</strong>{" "}
                {medicine.brand_name}
            </p>

            <p>
                <strong>Category:</strong>{" "}
                {medicine.category}
            </p>

            <p>
                <strong>Stock Quantity:</strong>{" "}
                {medicine.stock_quantity}
            </p>

            <button onClick={() => navigate("/medicine-list")}>
                Back
            </button>
        </div>
    );
}
