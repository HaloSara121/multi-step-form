"use client"
import { IBM_Plex_Sans } from 'next/font/google'
import { Check } from "phosphor-react"

const IBM_plex_sans = IBM_Plex_Sans({ weight: ["400", "700"], subsets: ["latin"] })

interface StepTitleProps {
  state: "selected" | "active" | "disabled"
  step: number
  title: string
}

export const StepTitle = ({state="disabled", step, title}: StepTitleProps) => {
  const stateStyle = () => {
    switch(state) {
      case "active":
        return "bg-green-500 w-7 h-7 flex items-center justify-center rounded-full text-white font-bold"
      case "selected":
        return "bg-purple-500 w-7 h-7 flex items-center justify-center rounded-full text-white font-bold"
      case "disabled":
        return "bg-gray-100 w-7 h-7 flex items-center justify-center rounded-full text-gray-300 font-bold"
    }
  }

  const isActive = state === "active"

  return (
    <div className="flex items-center p-2 gap-2">
      <div style={{...IBM_plex_sans.style}} className={stateStyle()}>
        {isActive ? (
          <Check weight="bold" size={18} />
        ): step}
      </div>
      <strong style={{...IBM_plex_sans.style}} className={state === "disabled" ? "text-gray-300" : "text-gray-400"}>{title}</strong>
    </div>
  )
}
