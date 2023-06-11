"use client"
import { useState } from "react";
import { CaretRight } from "phosphor-react"

import { StepTitle } from "@/components/StepTitle";
import { Step2 } from "@/components/steps/Step2";
import { Step3 } from "@/components/steps/Step3";
import { Step1 } from "@/components/steps/Step1";

type Step = {
  state: "selected" | "active" | "disabled"
  step: number
  title: string
}

export default function Home() {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [steps, setSteps] = useState<Step[]>([
    {
      title: "Contato",
      step: 1,
      state: "selected"
    },
    {
      title: "Empresa",
      step: 2,
      state: "disabled"
    },
    {
      title: "Projeto",
      step: 3,
      state: "disabled"
    },
  ])

  const changeStep = (act: "next" | "prev") => {
    if (act === "next" && currentStep < steps.length) {
      setSteps((state) => {
        
        const newState = [
          ...state,
          state[currentStep - 1].state = "active",
          state[currentStep].state = "selected"
        ]
        newState.pop()
        newState.pop()
        
        return newState
      })

      setCurrentStep(state => state + 1)
    } else if (act === "prev" && currentStep > 1) {
      setSteps((state) => {
        
        const newState = [
          ...state,
          state[currentStep - 2].state = "selected",
          state[currentStep - 1].state = "disabled",
        ]
        newState.pop()
        newState.pop()

        return newState
      })

      setCurrentStep(state => state - 1)
    } else {
      setSteps((state) => {
        
        const newState = [
          ...state,
          state[currentStep - 1].state = "active",
        ]
        newState.pop()

        return newState
      })

      setCurrentStep((state) => state + 1)
    }
  }

  return (
    <main className="h-full flex items-center justify-center gap-8">
      <div className="w-[37rem] border border-gray-100 rounded-md p-8">
        <header className="flex items-center justify-between mb-8">
          {steps.map((step, index) => (
              <>
                <StepTitle key={index} state={step.state} step={step.step} title={step.title} />
                {index < steps.length - 1 && (
                  <CaretRight weight="bold" />
                )}
              </>
            )
          )}
        </header>

        <div className="h-[1px] w-full bg-gray-100 mb-8" />

        {currentStep === 1 && (
          <Step1 changeStep={changeStep} />
        )} 

        {currentStep === 2 && (
          <Step2 changeStep={changeStep} />
        )} 

        {currentStep === 3 && (
          <Step3 changeStep={changeStep} />
        )}

        {currentStep === 4 && (
          <div>
            <strong className="">Sua proposta foi enviada!</strong>
          </div>
        )} 
      </div>
    </main>
  )
}
