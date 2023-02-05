import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

interface IStepsProps {
    title: string;
    isCompleted: boolean;
}

const Step: React.FC<IStepsProps> = ({ title, isCompleted }) => {
  return (
    <li className={`relative text-${isCompleted ? 'mint-green' : 'gray-100'}`}>
      <span
        className={`absolute left-0 bottom-[1.75rem] rounded-full bg-${isCompleted ? 'mint-green' : 'gray-100'} text-off-white`}
      >
        {isCompleted && <CheckIcon />}
      </span>
      <span className="hidden sm:block">{title}</span>
      {isCompleted && <CheckIcon />}
    </li>
  );
};

export const Steps: React.FC = () => {
  const steps = [
    { title: 'Details', isCompleted: true },
    { title: 'Address', isCompleted: true },
    { title: 'Payment', isCompleted: false },
  ];

  return (
    <div>
      <h2 className="sr-only">Steps</h2>
      <div className="after:mt-4 after:block after:h-1 after:w-full after:rounded-lg after:bg-gray">
        <ol className="grid grid-cols-3 text-sm font-medium text-off-white">
          {steps.map((step) => (
            <Step key={step.title} title={step.title} isCompleted={step.isCompleted} />
          ))}
        </ol>
      </div>
    </div>
  );
};