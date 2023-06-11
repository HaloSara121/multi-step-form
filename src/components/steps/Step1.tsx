import { Button } from "../Button"
import { Input } from "../Input"

interface Step1Props {
  changeStep: (act: "next" | "prev") => void
}

export const Step1 = ({changeStep}: Step1Props) => {
  return (
    <div className="flex flex-col gap-4">
      <Input label="Nome" id="name" placeholder="Como prefere ser chamado" />

      <Input label="Telefone" id="phone-number" placeholder="Digite seu número de WhatsApp" />

      <Input label="E-mail" id="email" placeholder="Digite seu e-mail" />

      <footer className="flex justify-end mt-4">
        <Button onClick={() => changeStep("next")}>CONTINUAR</Button>
      </footer>
    </div>
  )
}
