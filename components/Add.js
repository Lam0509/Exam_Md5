import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Link from "next/link";
import {useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";

export default function CreateProduct() {
    const router = useRouter()

    const [product, setProduct] = useState({})

    const handleChange = (e) => {
        setProduct({
            ...product, [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        let deleteConfirm = confirm('Do you want to add this product?');
        if (deleteConfirm) {
            axios.post('http://localhost:3001/products', product)
                .then(() => {
                    router.push('/products')
                })
        }
    }

    return (
        <div>
            <h2>Thêm sản phẩm</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Tên sản phẩm</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Tên sản phẩm" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Giá(đ)</Form.Label>
                    <Form.Control name='price' type="number" placeholder="Giá" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Tồn kho</Form.Label>
                    <Form.Control name='stock' type="number" placeholder="Tồn kho" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Mô tả</Form.Label>
                    <Form.Control name='description' as="textarea" rows={3} placeholder='Mô tả sản phẩm' onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="button" onClick={handleClick}>
                    Thêm mới
                </Button>
                <Link className='btn btn-secondary ms-2' href='/products'>
                    Hủy
                </Link>
            </Form>
        </div>
    )
}