import List from "../../components/List";
import axios from 'axios'

export async function getServerSideProps() {
    let result = await axios.get('http://localhost:3001/products')
    return {
        props: {
            products: result.data
        }
    }
}

export default function Home(props) {
    return (
        <List data={props.products}/>
    )
}