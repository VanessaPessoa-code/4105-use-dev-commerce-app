import Button, {ButtonProps} from "../Button";

type IconButtonProps = {
  children: React.ReactNode; // Adiciona a propriedade icon
} & ButtonProps; // Permite passar outras props de botão

const IconButton = ({children, ...props}: IconButtonProps) => {
    return (
        <Button style={{gap: "8px"}} {...props}>
            {children}
        </Button>
    )
}

export default IconButton;