"use client"
import { IBM_Plex_Sans } from 'next/font/google'
import { Check } from "phosphor-react"

const IBM_plex_sans = IBM_Plex_Sans({ weight: ["400", "700"], subsets: ["latin"] })

interface StepTitleProps {
  step: number
  title: string
  currentStep: number
}

export const StepTitle = ({step, title, currentStep}: StepTitleProps) => {
  const isActive = currentStep > step
  const isSelected = currentStep === step
  const isDisabled = currentStep < step

  const stateStyle = () => {
    const baseStyle = "w-7 h-7 flex items-center justify-center rounded-full font-bold"
    
    if(isActive) return `bg-green-500 text-white ${baseStyle}`
    if(isSelected) return `bg-purple-500 text-white ${baseStyle}`
    if(isDisabled) return `bg-gray-100 text-gray-300 ${baseStyle}`
  }

  return (
    <div className="flex items-center p-2 gap-2">
      <div style={{...IBM_plex_sans.style}} className={stateStyle()}>
        {isActive ? (
          <Check weight="bold" size={18} />
        ): step}
      </div>
      <strong style={{...IBM_plex_sans.style}} className={isDisabled ? "text-gray-300" : "text-gray-400"}>{title}</strong>
    </div>
  )
}
