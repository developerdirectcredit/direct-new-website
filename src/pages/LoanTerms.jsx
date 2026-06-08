// export default function LoanTerms() {
//   return (
//     <div className="p-5 pb-24 bg-white">
      
//       <h2 className="text-2xl font-bold text-blue-700 mb-4">
//         About Direct Credit
//       </h2>

//       <p className="text-gray-700 leading-8 mb-6">
//         <strong>Direct Credit</strong> App is a Fintech platform
//         presented by YSS Direct Credit Private Limited. It is a
//         one stop solution for various Financial Products —
//         including <strong>Home Loans, Business Loans, Loan
//         Against Property, and Working Capital Loans.</strong>
//       </p>

//       <p className="text-gray-700 leading-8 mb-10">
//         Customers can check their
//         <strong> Free Credit Score </strong>
//         and choose from a wide range of
//         <strong> personalised loan offers </strong>
//         from India's top Banks.
//       </p>

//       {/* Business Loan */}

//       <h2 className="text-2xl font-bold text-blue-700 mb-6">
//         Business Loan
//       </h2>

//       <h3 className="font-bold text-lg mb-4">
//         1. Minimum and maximum period for repayment:
//       </h3>

//       <ul className="list-disc pl-6 space-y-2 mb-6">
//         <li>Minimum period of repayment – 12 Months</li>
//         <li>Maximum period of repayment – 60 Months</li>
//       </ul>

//       <h3 className="font-bold text-lg mb-6">
//         2. Maximum Annual Percentage Rate (APR): 36%
//       </h3>

//       <h3 className="font-bold text-lg mb-4">
//         3. Representative example of the total cost of the loan:
//       </h3>

//       <ul className="list-disc pl-6 space-y-2 mb-6">
//         <li>Annual Interest Rate (Sample): 18%</li>
//         <li>Loan Amount (Sample): INR 2,00,000</li>
//         <li>Installment (Tenure): 12 Months</li>
//         <li>Installment Per Month: INR 18,340</li>
//         <li>Total Amount to Repay: INR 220,080</li>
//         <li>Processing Fees: 1.5% to 4%</li>
//         <li>
//           For the given principal, the total interest cost is
//           INR 20,067.
//         </li>
//       </ul>

//       <h3 className="font-bold text-lg mb-10">
//         4. Full loan repayment is Greater than 90 days.
//       </h3>

//       {/* Benefits */}

//       <h2 className="text-2xl font-bold text-blue-700 mb-6">
//         What you get with the Direct Credit App:
//       </h2>

//       <ul className="list-disc pl-6 space-y-3 mb-10">
//         <li>Free Credit Report</li>
//         <li>
//           A wide choice of Loan Products from 50+ partner Banks
//         </li>
//         <li>
//           Instant loan offers curated just for you with minimal
//           documentation
//         </li>
//         <li>
//           Compare, choose, and apply for the most-suited loan
//         </li>
//         <li>
//           Free assistance from industry experts, online as well
//           as offline
//         </li>
//         <li>
//           Multiple Business Loan and Working Capital Loan offers
//           to grow your business
//         </li>
//         <li>
//           Home Loans with lowest interest rates from a wide
//           range of lenders
//         </li>
//         <li>
//           Explore secured loan offers on Loan Against Property
//         </li>
//         <li>
//           Easy loan transfer options for existing loans
//         </li>
//       </ul>

//       {/* About */}

//       <h2 className="text-2xl font-bold text-blue-700 mb-6">
//         Who are we? A brief introduction
//       </h2>

//       <p className="text-gray-700 leading-8 mb-6">
//         <strong>Direct Credit</strong> is an innovative one-stop
//         solution provider for all your financial needs —
//         including <strong>Home Loans, Business Loans,
//         Working Capital Loans, Loan Against Property</strong>
//         and more.
//       </p>

//       <p className="text-gray-700 leading-8 mb-6">
//         We have one of India's most expansive distribution
//         networks for Financial Products and Lending Solutions,
//         with a vision to be a leading loan aggregator by 2025.
//         With a presence across 1600+ cities,
//         <strong> Direct Credit </strong>
//         is one of the prominent lending establishments founded
//         by professionals and financial experts with over
//         20+ years of experience.
//       </p>

//       <p className="text-gray-700 leading-8 mb-6">
//         We have successfully served more than 10 lakh+ clients.
//         Our internally developed, highly proficient
//         <strong> Loan Calculator algorithm </strong>
//         helps you get the best options and deals for the
//         financial product of your choice.
//       </p>

//       <p className="text-gray-700 leading-8 font-medium">
//         Download the Direct Credit App today and access top loan
//         offers from India's leading banks through seamless
//         digital processes.
//       </p>

//     </div>
//   );
// }



export default function LoanTerms() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8 pb-24">
      <div className="bg-white rounded-2xl shadow-sm p-8">

        {/* About */}
        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          About Direct Credit
        </h2>

        <div className="space-y-5 text-gray-700 leading-8 text-lg">
          <p>
            <strong>Direct Credit</strong> App is a Fintech platform presented
            by YSS Direct Credit Private Limited. It is a one stop solution
            for various Financial Products including
            <strong>
              {" "}Home Loans, Business Loans, Loan Against Property,
              and Working Capital Loans.
            </strong>
          </p>

          <p>
            Customers can check their
            <strong> Free Credit Score </strong>
            and choose from a wide range of
            <strong> personalised loan offers </strong>
            from India's top Banks.
          </p>
        </div>

        {/* Business Loan */}
        <h2 className="text-3xl font-bold text-blue-700 mt-12 mb-6">
          Business Loan
        </h2>

        <div className="space-y-6 text-gray-700">

          <div>
            <h3 className="font-bold text-xl mb-3">
              1. Minimum and Maximum Period for Repayment
            </h3>

            <ul className="list-disc pl-6 space-y-2">
              <li>Minimum repayment period – 12 Months</li>
              <li>Maximum repayment period – 60 Months</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl">
              2. Maximum Annual Percentage Rate (APR): 36%
            </h3>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-3">
              3. Representative Example of the Total Cost of Loan
            </h3>

            <ul className="list-disc pl-6 space-y-2">
              <li>Annual Interest Rate (Sample): 18%</li>
              <li>Loan Amount (Sample): INR 2,00,000</li>
              <li>Installment (Tenure): 12 Months</li>
              <li>Installment Per Month: INR 18,340</li>
              <li>Total Amount To Repay: INR 220,080</li>
              <li>Processing Fees: 1.5% to 4%</li>
              <li>
                For the given principal, the total interest cost is
                INR 20,067.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl">
              4. Full Loan Repayment is Greater than 90 Days
            </h3>
          </div>

        </div>

        {/* Benefits */}
        <h2 className="text-3xl font-bold text-blue-700 mt-12 mb-6">
          What You Get With The Direct Credit App
        </h2>

        <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
          <li>Free Credit Report</li>
          <li>A wide choice of Loan Products from 50+ partner Banks</li>
          <li>Instant loan offers with minimal documentation</li>
          <li>Compare, choose and apply for the most-suited loan</li>
          <li>Free assistance from industry experts</li>
          <li>Multiple Business Loan and Working Capital Loan offers</li>
          <li>Home Loans with competitive interest rates</li>
          <li>Loan Against Property offers from leading lenders</li>
          <li>Easy loan transfer options for existing loans</li>
        </ul>

        {/* Who Are We */}
        <h2 className="text-3xl font-bold text-blue-700 mt-12 mb-6">
          Who Are We? A Brief Introduction
        </h2>

        <div className="space-y-6 text-gray-700 leading-8 text-lg">

          <p>
            <strong>Direct Credit</strong> is an innovative one-stop solution
            provider for all your financial needs including
            <strong>
              {" "}Home Loans, Business Loans, Working Capital Loans,
              Loan Against Property
            </strong>
            {" "}and more.
          </p>

          <p>
            We have one of India's most expansive distribution networks
            for Financial Products and Lending Solutions, with a vision
            to be a leading loan aggregator. With a presence across
            1600+ cities, Direct Credit is one of the prominent lending
            establishments founded by professionals and financial experts.
          </p>

          <p>
            We have successfully served more than 10 lakh+ clients.
            Our internally developed highly proficient
            <strong> Loan Calculator Algorithm </strong>
            helps users compare offers and make informed financial decisions.
          </p>

          <p>
            <strong>Download the Direct Credit App</strong> today and
            access top loan offers from India's leading banks through
            seamless digital processes.
          </p>

        </div>

      </div>
    </div>
  );
}


