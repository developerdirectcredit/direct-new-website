import { useMemo, useState } from "react";
import DoughnutChart from "./DoughnutChart";
import EmiResult from "./EmiResult";
import TooltipInfo from "./TooltipInfo";

export default function EmiForm() {

  const [loanAmount, setLoanAmount] =
    useState(30000000);

  const [interestRate, setInterestRate] =
    useState(7.5);

  const [tenure, setTenure] =
    useState(15);

  const [isYearly, setIsYearly] =
    useState(true);

  const result = useMemo(() => {

    const months = isYearly
      ? tenure * 12
      : tenure;

    const r =
      interestRate / 12 / 100;

    const emi =
      (loanAmount *
        r *
        Math.pow(
          1 + r,
          months
        )) /
      (Math.pow(
        1 + r,
        months
      ) -
        1);

    const totalPayable =
      emi * months;

    const interestAmount =
      totalPayable - loanAmount;

    return {
      emi: Math.round(emi),
      totalPayable:
        Math.round(totalPayable),
      interestAmount:
        Math.round(
          interestAmount
        ),
    };

  }, [
    loanAmount,
    interestRate,
    tenure,
    isYearly,
  ]);

  return (
    <div className="max-w-md mx-auto p-4">

      <h1 className="text-3xl font-bold mb-6">
        Calculate Your EMI
      </h1>

      {/* Loan Amount */}

      <div className="mb-8">

        <div className="flex justify-between">

          <label>
            Loan Amount
          </label>

          <input
            type="number"
            value={loanAmount}
            onChange={(e) =>
              setLoanAmount(
                Number(
                  e.target.value
                )
              )
            }
            className="border rounded-xl p-3 w-40"
          />

        </div>

        <input
          type="range"
          min="3000000"
          max="30000000"
          value={loanAmount}
          onChange={(e) =>
            setLoanAmount(
              Number(
                e.target.value
              )
            )
          }
          className="w-full mt-4"
        />

      </div>

      {/* Interest */}

      <div className="mb-8">

        <div className="flex justify-between items-center">

          <div className="flex gap-2">

            Interest Rate

            <TooltipInfo
              text="The interest rate is the yearly cost of your loan."
            />

          </div>

          <input
            type="number"
            value={interestRate}
            onChange={(e) =>
              setInterestRate(
                Number(
                  e.target.value
                )
              )
            }
            className="border rounded-xl p-3 w-32"
          />

        </div>

        <input
          type="range"
          min="0"
          max="30"
          step="0.1"
          value={interestRate}
          onChange={(e) =>
            setInterestRate(
              Number(
                e.target.value
              )
            )
          }
          className="w-full mt-4"
        />

      </div>

      {/* Tenure */}

      <div className="mb-10">

        <div className="flex justify-between">

          <label>
            Loan Tenure
          </label>

          <input
            type="number"
            value={tenure}
            onChange={(e) =>
              setTenure(
                Number(
                  e.target.value
                )
              )
            }
            className="border rounded-xl p-3 w-24"
          />

        </div>

        <input
          type="range"
          min="1"
          max="15"
          value={tenure}
          onChange={(e) =>
            setTenure(
              Number(
                e.target.value
              )
            )
          }
          className="w-full mt-4"
        />

      </div>

      <h2 className="font-bold text-2xl mb-5">
        Breakup Of Total Payment
      </h2>

      <DoughnutChart
        principal={loanAmount}
        interest={
          result.interestAmount
        }
      />

      <EmiResult
        emi={result.emi}
        totalPayable={
          result.totalPayable
        }
        tenure={tenure}
        interestRate={
          interestRate
        }
        isYearly={isYearly}
      />

      <button className="w-full bg-blue-700 text-white py-4 rounded-full mt-8">
        Calculate
      </button>

    </div>
  );
}