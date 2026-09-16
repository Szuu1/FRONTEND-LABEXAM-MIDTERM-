import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddMedicine() {
    const navigate = useNavigate();

    const [brandName, setBrandName] = useState("");
    const [category, setCategory] = useState("");
    const [stockQuantity, setStockQuantity] = useState("");

    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!brandName.trim()) {
            newErrors.brandName = "Brand name is required.";
        }

        if (!category.trim()) {
            newErrors.category = "Category is required.";
        }

        if (stockQuantity === "") {
            newErrors.stockQuantity = "Stock quantity is required.";
        } else if (Number(stockQuantity) < 0) {
            newErrors.stockQuantity =
                "Stock quantity cannot be negative.";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        console.log({
            brandName,
            category,
            stockQuantity,
        });

        navigate("/medicine-list");
    };

    return (
        <div>
            <h1>Add Medicine</h1>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Brand Name:</label>
                    <br />

                    <input
                        type="text"
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                        placeholder="Brand Name"
                    />

                    {errors.brandName && (
                        <p style={{ color: "red" }}>
                            {errors.brandName}
                        </p>
                    )}
                </div>

                <br />

                <div>
                    <label>Category:</label>
                    <br />

                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        placeholder="Category"
                    />

                    {errors.category && (
                        <p style={{ color: "red" }}>
                            {errors.category}
                        </p>
                    )}
                </div>

                <br />

                <div>
                    <label>Stock Quantity:</label>
                    <br />

                    <input
                        type="number"
                        min="0"
                        value={stockQuantity}
                        onChange={(e) =>
                            setStockQuantity(e.target.value)
                        }
                        placeholder="Stock Quantity"
                    />

                    {errors.stockQuantity && (
                        <p style={{ color: "red" }}>
                            {errors.stockQuantity}
                        </p>
                    )}
                </div>

                <br />

                <button type="submit">
                    Add Medicine
                </button>
            </form>
        </div>
    );
}
