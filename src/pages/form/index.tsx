import { Props } from "../../types";

export const FormPage:React.FC<Props> = ({title, form_component}) => {
    return (
        <section>
            <h1>{title}</h1>
            {form_component}
        </section>
    )
}