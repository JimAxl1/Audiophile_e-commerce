import React from 'react'
import { useState } from 'react';
import Form from './components/Form'
import Footer from '../../components/Footer'
import Summary from './components/Summary';
import GoBack from '../../components/GoBack';
import PaySuccess from './components/PaySuccess';
import { useForm } from 'react-hook-form'
import styles from './Checkout.module.scss'

const defaultValues = {
  Payment: 'e-Money'
}

const Checkout = ({ cart, deleteItems }) => {
  const [paySuccess, setPaySuccess] = useState(false)
  const { register, formState: { errors }, watch, handleSubmit } = useForm({ defaultValues });

  const onSubmit = () => {
    setPaySuccess(true)
  }

  var total = 0
  cart.map((item) => {
    return total = total + (item.price * item.quantity)
  })
  
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <GoBack className='checkout' />
        <Form register={register} errors={errors} watch={watch} handleSubmit={handleSubmit} onSubmit={onSubmit}/>
        <Summary cart={cart} handleSubmit={handleSubmit} onSubmit={onSubmit} total={total} />
      </div>
      <Footer />
      {paySuccess && <PaySuccess cart={cart} total={total} deleteItems={deleteItems}/>}
    </main>
  )
}

export default Checkout