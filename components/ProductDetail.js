import Button from 'react-bootstrap/Button';
import Link from 'next/link'

export default function ProductDetail(props) {
    return (
        <div>
            <div>
                <h2>Chi tiết sản phẩm</h2>
                <Link className='btn btn-primary' href='/products'>
                    Danh sách
                </Link>
            </div>
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
        </div>
    )
}