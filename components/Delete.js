import Button from "react-bootstrap/Button";
import Link from "next/link";
import axios from "axios";
import {useRouter} from "next/router";

export default function DeleteProduct(props) {

    const router = useRouter()

    const handleClick = () => {
        let deleteConfirm = confirm('Do you want to delete this product?');
        if (deleteConfirm) {
            axios.delete(`http://localhost:3001/products/${props.data.id}`)
                .then(() => {
                    router.push('/products')
                })
        }
    }

    return (
        <div>
            <h2>Xóa sản phẩm</h2>
            <div>
                <p>Tên sản phẩm: {props.data.name}</p>
                <p>Giá(đ): {props.data.price}</p>
                <p>Tồn kho: {props.data.stock}</p>
            </div>
            <hr/>
            <div>
                Mô tả <br/>
                {props.data.description}
            </div>
            <div>
                <Button variant="danger" onClick={handleClick}>Xóa</Button>
                <Link className='btn btn-secondary ms-2' href='/products'>
                    Hủy
                </Link>
            </div>
        </div>
    )
}