import Button from "../Button";
import Styles from "./CartActions.module.css";

type CardActionsProps = {
    handleRedirect: () => void; 
}

const CardActions = ({handleRedirect}: CardActionsProps) => {
    return (
        <div className={Styles.cartActions}>
        <Button
          onClick={handleRedirect}
          variant="secondary"
        >
          Continuar comprando
        </Button>
        <Button
          onClick={() => console.log("pagamento")}
        >
          Ir para pagamento
        </Button>
      </div>
    )
}

export default CardActions;