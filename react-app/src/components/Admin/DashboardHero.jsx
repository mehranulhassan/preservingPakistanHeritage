import React, { useEffect, useState } from 'react'
import { AiOutlineArrowRight, AiOutlineMoneyCollect } from 'react-icons/ai'
import {TbBorderSides} from 'react-icons/tb'
import {FiPackage, FiShoppingBag} from 'react-icons/fi'
import styles from '../../Styles/styles'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../redux/action/product'
import { getAllSellerOrders } from '../../redux/action/order'
import { Button } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

const DashboardHero = () => {
    const dispatch = useDispatch()
    const {seller} = useSelector((state)=> state.seller)
    const {orders} = useSelector((state)=>state.orders)
    const {products} = useSelector((state)=> state.products)
    const [deliveredOrder,setDeliverdOrder] = useState();

    useEffect(()=>{
        dispatch(getAllSellerOrders(seller._id))
        dispatch(getAllProducts(seller._id))
        const orderData = orders && orders.filter((item)=> item.status === "Deliverd");
        setDeliverdOrder(orderData)
    },[dispatch])
    // console.log(deliveredOrder)
    // const availableBalance = deliveredOrder && deliveredOrder.reduce((acc,item)=> acc + item.totalPrice, 0)
    const availableBalance = seller && seller.availableBalance;
    console.log(availableBalance)
    console.log(seller)


    const columns = [
        { field: "id", headerName: "Product Id", minWidth: 170, flex: 0.7 },
        {
          field: "name",
          headerName: "Name",
          minWidth: 180,
          flex: 1.4,
        },
        {
          field: "price",
          headerName: "Price",
          minWidth: 100,
          flex: 0.6,
        },
        {
          field: "Quantity",
          headerName: "Quantity",
          type: "number",
          minWidth: 130,
          flex: 0.5,
        },
        {
            field: "status",
            headerName: "Status",
            minWidth: 130,
            flex: 0.7,
            cellClassName: (params) => {
              return params.status === "Delivered" ? "greenColor" : "redColor";
            },
          },
          {
            field: " ",
            flex: 1,
            minWidth: 150,
            headerName: "",
            type: "number",
            sortable: false,
            renderCell: (params) => {
              return (
                <>
                  <Link to={`/order-detail/${params.id}`}>
                    <Button>
                      <AiOutlineArrowRight size={20} />
                    </Button>
                  </Link>
                </>
              );
            },
          },
      ];
  
    const row = [];
  
    orders.forEach((item) => {
        item.cart.forEach((product) => {
          row.push({
            id: item._id,
            name: product.name,
            price: "US$ " + product.discountPrice,
            Quantity: product.qty,
            status: item.status,
          });
        });
      });

  return (
    <>
        <div className="w-full p-8">
            <h3 className='text-[22px] font-Poppins pb-2'>Overview</h3>
            <div className="w-full block 800px:flex items-center justify-between">
                <div className="full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
                    <div className="flex items-center">
                        <AiOutlineMoneyCollect size={30} className='mr-2' fill='#00000085'/>
                        <h3 className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}>Account Balance </h3>
                    </div>
                    <h5 className='pt-2 pl-[36px] text-[22px] font-[500]'>$({availableBalance ? availableBalance : 0})</h5>
                    <Link to='/dashboard-withdraw'>
                        <h5 className='pt-4 pl-2 text-[#077f9c]'>Withdraw Money</h5>
                    </Link>
                </div>
                <div className="full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
                    <div className="flex items-center">
                        <TbBorderSides size={30} className='mr-2' fill='#00000085'/>
                        <h3 className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}>All Orders</h3>
                    </div>
                    <h5 className='pt-2 pl-[36px] text-[22px] font-[500]'>{orders && orders.length}</h5>
                    <Link to='/dashboard-orders'>
                        <h5 className='pt-4 pl-2 text-[#077f9c]'>View Orders</h5>
                    </Link>
                </div>
                <div className="full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
                    <div className="flex items-center">
                        <FiShoppingBag size={30} className='mr-2' fill='#00000085'/>
                        <h3 className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}>All Products</h3>
                    </div>
                    <h5 className='pt-2 pl-[36px] text-[22px] font-[500]'>{products && products.length}</h5>
                    <Link to='/dashboard-products'>
                        <h5 className='pt-4 pl-2 text-[#077f9c]'>View Products</h5>
                    </Link>
                </div>
            </div>
            <br />
            <h1 className='text-[22px] font-Poppins pb-2'>Latest Orders</h1>
            <div className='w-full min-h-[45vh] bg-white rounded shadow'>
                <DataGrid
                    rows={row}
                    columns={columns}
                    pageSize={10}
                    disableSelectionOnClick
                    autoHeight
                />
            </div>
        </div>
    </>
  )
}

export default DashboardHero
