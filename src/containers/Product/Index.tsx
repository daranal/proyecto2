import "./Index.css"
import { useNavigate } from "react-router";

interface ProductProps {
    title: string;
    image: string;
}

const Product: React.FC<ProductProps> = ({title, image}): JSX.Element => {

    const navigate = useNavigate()
    const handleClick = () => navigate(`products/${title.trim()}`)

    return (
        <div className="Product" onClick={handleClick}>
            <div className="Product__thumbnail">
                <img src={image} alt={title} />
            </div>
            <h2 className="Product__title">
            {title}
            </h2>
        </div>
    )
}

export { Product }