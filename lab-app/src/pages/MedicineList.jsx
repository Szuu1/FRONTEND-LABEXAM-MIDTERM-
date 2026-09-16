import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MedicineList() {
    const [medicines, setMedicines] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        fetch("/api/medicines")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch medicines.");
                }

                return response.json();
            })
            .then((data) => {
                setMedicines(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading medicines...</p>;
    }

    if (error) {
        return (
            <p style={{ color: "red" }}>
                Error: {error}
            </p>
        );
    }

    return (
        <div>
            <h1>Medicine List</h1>

            {medicines.length === 0 ? (
                <p>No medicines found.</p>
            ) : (
                <ul>
                    {medicines.map((medicine) => (
                        <li
                            key={medicine.id}
                            onClick={() =>
                                navigate(
                                    `/medicine-details/${medicine.id}`
                                )
                            }
                            style={{
                                cursor: "pointer",
                                marginBottom: "10px",
                            }}
                        >
                            <strong>{medicine.brand_name}</strong>
                            {" - "}
                            {medicine.category}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
