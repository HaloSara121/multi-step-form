import { Button } from "../Button"
import { Input } from "../Input"
import { Textarea } from "../Textarea"

interface Step3Props {
  changeStep: (act: "next" | "prev") => void
}

export const Step3 = ({changeStep}: Step3Props) => {
  return (
    <div className="flex flex-col gap-4">
      <Textarea label="Objetivos do projeto" id="business-info" placeholder="Descreva quais os objetivos desse projeto" />

      <footer className="flex justify-between mt-4">
        <Button filled={false} onClick={() => changeStep("prev")}>VOLTAR</Button>
        <Button onClick={() => changeStep("next")}>ENVIAR PROPOSTA</Button>
      </footer>
    </div>
  )
}
