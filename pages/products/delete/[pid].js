import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from 'axios'
import Wait from "../../../components/shares/BackDrop";
import DeleteProduct from "../../../components/Delete";

export default function DetailForm() {
    const router = useRouter()
    const { pid } = router.query
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/products/${pid}`).then(res => {
            setProduct(res.data);
        })
    }, [])

    if (product) {
        return <DeleteProduct data={product}/>
    } else {
        return (
            <Wait/>
        )
    }
}