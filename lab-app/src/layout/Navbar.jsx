import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/Home">Drugs and Medicine Inventory System</Link>

                <ul className="navbar-nav flex-row gap-4">
                    <li className="nav-item">
                        <Link className="navbar-brand" to="/MedicineList">Medicine List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="navbar-brand" to="/AddMedicine">Add Medicine</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="navbar-brand" to="/MedicineDetails">Medicine Details</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;