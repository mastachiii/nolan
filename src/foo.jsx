import { useParams } from "react-router-dom";

function Foo() {
    const { movieId } = useParams();

    return <p>FOO</p>;
}

export default Foo;
