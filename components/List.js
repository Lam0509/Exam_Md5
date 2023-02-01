import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import Link from 'next/link'

function List(props) {

    return (
        <div>
            <div>
                <h2 >Danh sách sản phẩm</h2>
                <Link className='btn btn-primary' href='/products/add'>
                    Thêm sản phẩm
                </Link>
            </div>
            <div >
                <Table striped>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá(đ)</th>
                        <th>Tồn kho</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.data.map(product => {
                        return (
                            <tr>
                                <td>{product.id}</td>
                                <td>
                                    <Link className='text-decoration-none text-black' href={`/products/detail/${product.id}`}>
                                        {product.name}
                                    </Link>
                                </td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td>
                                    <Link className='btn btn-primary me-2' href={`/products/update/${product.id}`}>
                                        Cập nhật
                                    </Link>
                                    <Link className='btn btn-danger' href={`/products/delete/${product.id}`}>
                                        Xoá
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default List;