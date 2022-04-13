import {Link} from "react-router-dom";
import { Props } from "../../types";

export const LinkSection:React.FC<Props> = ({link_to, text_content}) => {
    return (
        <section className="link-section">
            <Link to={link_to} className="btn btn-primary">{text_content}</Link>
        </section>
    )
}