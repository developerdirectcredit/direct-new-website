export default function EmiResult({
  emi,
  totalPayable,
  tenure,
  interestRate,
  isYearly,
}) {
  return (
    <div className="bg-slate-100 rounded-3xl p-5">

      <div className="flex justify-between mb-4">
        <span>
          Interest Rate (per month)
        </span>

        <span>
          {(interestRate / 12).toFixed(3)}%
        </span>
      </div>

      <div className="flex justify-between mb-4">
        <span>Loan Tenure</span>

        <span>
          {tenure}
          {isYearly
            ? " Years"
            : " Months"}
        </span>
      </div>

      <div className="flex justify-between mb-4">
        <span>
          Total Amount Payable
        </span>

        <span>
          ₹
          {totalPayable.toLocaleString()}
        </span>
      </div>

      <hr />

      <div className="flex justify-between mt-4 text-xl font-bold">

        <span>EMI</span>

        <span>
          ₹{emi.toLocaleString()}
        </span>

      </div>

    </div>
  );
}