import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cards from "./pages/Cards";
import CreditScore from "./pages/CreditScore";
import Profile from "./pages/Profile";
import ProductDetails from "./pages/ProductDetails";
// import BottomNav from "./components/BottomNav";
import EmiCalculator from "./pages/EmiCalculator";
import HelpCenter from "./pages/HelpCenter";
import CheckCibil from "./pages/CheckCibil";


import MyApplications from "./pages/MyApplications";
import CoApplicants from "./pages/CoApplicants";
import References from "./pages/References";
import Documents from "./pages/Documents";
import LoanTerms from "./pages/LoanTerms";
import Settings from "./pages/Settings";
import RateUs from "./pages/RateUs";
import BasicDetails from "./pages/BasicDetails";
import AddressDetails from "./pages/AddressDetails";
import IncomeSources from "./pages/IncomeSources";
import CoApplicantDocuments from "./pages/CoApplicantDocuments";
import EditAddress from "./pages/EditAddress";
import AadharCard from "./pages/AadharCard";
import PanCard from "./pages/PanCard";
import PaySlips from "./pages/PaySlips";
import BankStatement from "./pages/BankStatement";


function App() {
  return (
    <BrowserRouter>

      {/* <Routes> */}

        {/* <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/cards"
          element={<Cards />}
        />

        <Route
          path="/credit-score"
          element={<CreditScore />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        /> */}

            <Navbar />
           <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/credit-score" element={<CreditScore />} />
        <Route path="/profile" element={<Profile />} />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/emi-calculator"
          element={<EmiCalculator />}
        />

        <Route
          path="/help-center"
          element={<HelpCenter />}
        /> 
           
           <Route
          path="/check-cibil"
          element={<CheckCibil />}
        /> 


        <Route
  path="/my-applications"
  element={<MyApplications />}
/>

<Route
  path="/co-applicants"
  element={<CoApplicants />}
/>

<Route
  path="/co-applicants/basic-details"
  element={<BasicDetails />}
/>

<Route
  path="/co-applicants/address-details"
  element={<AddressDetails />}
/>

<Route
  path="/co-applicants/income-sources"
  element={<IncomeSources />}
/>

<Route
  path="/co-applicants/documents"
  element={<CoApplicantDocuments />}
/>

<Route
  path="/references"
  element={<References />}
/>

<Route
  path="/documents"
  element={<Documents />}
/>

<Route
  path="/loan-terms"
  element={<LoanTerms />}
/>

<Route
  path="/settings"
  element={<Settings />}
/>

<Route
  path="/rate-us"
  element={<RateUs />}
/>


<Route
 path="/co-applicants/documents/aadhar"
 element={<AadharCard />}
/>

<Route
 path="/co-applicants/documents/pan"
 element={<PanCard />}
/>

<Route
 path="/co-applicants/documents/payslips"
 element={<PaySlips />}
/>

<Route
 path="/co-applicants/documents/bank-statement"
 element={<BankStatement />}
/>

<Route
  path="/co-applicants/address-details/edit"
  element={<EditAddress />}
/>

      </Routes>

      {/* <BottomNav /> */}

    </BrowserRouter>
  );
}

export default App;