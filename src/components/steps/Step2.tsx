import { Button } from "../Button"
import { Input } from "../Input"
import { Textarea } from "../Textarea"

interface Step2Props {
  changeStep: (act: "next" | "prev") => void
}

export const Step2 = ({changeStep}: Step2Props) => {
  return (
    <div className="flex flex-col gap-4">
      <Input label="Nome da empresa" id="company-name" placeholder="Qual é o nome da empresa" />

      <Input label="Número de funcionários" id="employees-amount" placeholder="Digite o número de colaboradores" />

      <Textarea label="Sobre seu negócio" id="business-info" placeholder="Fale um pouco sobre seus produtos ou serviços" />

      <footer className="flex justify-between mt-4">
        <Button filled={false} onClick={() => changeStep("prev")}>VOLTAR</Button>
        <Button onClick={() => changeStep("next")}>CONTINUAR</Button>
      </footer>
    </div>
  )
}
