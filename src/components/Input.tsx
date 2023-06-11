import { IBM_Plex_Sans } from 'next/font/google'

const IBM_plex_sans = IBM_Plex_Sans({ weight: ["400", "700"], subsets: ["latin"] })

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string
  id: string
}

export const Input = ({label, id, ...rest}: InputProps) => {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={id} className='font-bold text-gray-400 leading-6'>{label}</label>
      <input style={{...IBM_plex_sans.style}} id={id} {...rest} className='h-14 text-gray-400 placeholder:text-gray-200 px-4 py-2 border rounded-sm border-gray-100 leading-6 hover:border-purple-500'/>
    </div>
  )
}