import { useNavigate } from "react-router";
import '../../App.scss'

interface ProductProps {
    title: string;
    image: string;
}

const Product: React.FC<ProductProps> = ({title, image}): JSX.Element => {

    const navigate = useNavigate()
    const handleClick = () => navigate(`products/${title.trim()}`)

    return (        
        <div className="Product">
            <div className="Product__thumbnail">
                <img src={image} alt={title} onClick={handleClick} />
            </div>
            
            <h2 className="Product__title">
            {title}
            </h2>
        </div>
    )
}

export { Product }