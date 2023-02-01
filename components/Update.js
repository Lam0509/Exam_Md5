import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Link from "next/link";
import {useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";

export default function UpdateProduct(props) {
    const router = useRouter()

    const [product, setProduct] = useState({})

    const handleChange = (e) => {
        setProduct({
            ...product, [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        let updateConfirm = confirm('Do you want to update this product?');
        if (updateConfirm) {
            axios.put(`http://localhost:3001/products/${props.data.id}`, product)
                .then(() => {
                    router.push('/products')
                })
        }
    }

    return (
        <div>
            <h2>Cập nhật sản phẩm</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Tên sản phẩm</Form.Label>
                    <Form.Control name='name' type="text"  value={props.data.name}  onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Giá(đ)</Form.Label>
                    <Form.Control name='price' type="number" value={props.data.price} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Tồn kho</Form.Label>
                    <Form.Control name='stock' type="number" value={props.data.stock} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Mô tả</Form.Label>
                    <Form.Control name='description' as="textarea" rows={3} value={props.data.description} onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="button" onClick={handleClick}>
                    Cập nhật
                </Button>
                <Link className='btn btn-secondary ms-2' href='/products'>
                    Hủy
                </Link>
            </Form>
        </div>
    )
}