"use client"
import { IBM_Plex_Sans } from 'next/font/google'

const IBM_plex_sans = IBM_Plex_Sans({ weight: ["400", "700"], subsets: ["latin"] })

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  filled?: boolean
}

export const Button = ({filled = true, ...rest}: ButtonProps) => {
  const filledStyle = "min-w-[9.875rem] bg-purple-500 px-8 py-4 rounded-md text-white font-bold hover:brightness-110 duration-150 leading-6"
  const lineStyle = "min-w-[9.875rem] px-8 py-4 rounded-md text-purple-500 font-bold border-1 border hover:brightness-90 duration-150 leading-6"

  return (
    <button style={{...IBM_plex_sans.style}} {...rest} className={filled ? filledStyle : lineStyle} />
  )
}