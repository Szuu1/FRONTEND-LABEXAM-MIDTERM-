import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import MedicineList from './pages/MedicineList';
import AddMedicine from './pages/AddMedicine';
import MedicineDetails from './pages/MedicineDetails';
import Login from './Login';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/medicine-list" element={<MedicineList />} />
      <Route path="/add-medicine" element={<AddMedicine />} />
      <Route path="/medicine-details/:id" element={<MedicineDetails />} />
    </Routes>
  )
}