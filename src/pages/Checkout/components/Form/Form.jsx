import React from 'react'
import InputText from '../InputText';
import styles from './Form.module.scss'
import deliveryCash from '../../../../assets/checkout/icon-cash-on-delivery.svg'
import "@fontsource/manrope";

const Form = ({ register, errors, watch, handleSubmit, onSubmit }) => {

  return (
    <form className={styles.container} id="theForm" onSubmit={handleSubmit(onSubmit)}>
      <h3 className={styles.title}>CHECKOUT</h3>
      <h4 className={styles.subtitle}>BILLING DETAILS</h4>
      <InputText propertie='name' label='Name' placeholder='Alexei Ward' 
        error={errors.name} register={register} />
      <InputText propertie='email' label='Email Address' placeholder='alexei@mail.com' 
        error={errors.email} register={register} pattern={/\S+@\S+\.\S+/} />
      <InputText propertie='tel' label='Phone Number' placeholder='+1 202-555-0136'
        error={errors.tel} register={register} pattern={/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/} />

      <h4 className={styles.subtitle}>SHIPPING INFO</h4>
      <InputText propertie='address' label='Streest address' placeholder='1137 Williams Avenue' 
        error={errors.address} register={register} pattern={/^(\d{1,}) [a-zA-Z0-9\s]+(\,)?/} />
      <InputText propertie='ZipCode' label='ZipCode' placeholder='10001'
        error={errors.ZipCode} register={register} pattern={/^(\d{5})$/} />
      <InputText propertie='city' label='City' placeholder='New York'
        error={errors.city} register={register} />
      <InputText propertie='country' label='Country' placeholder='United States'
        error={errors.country} register={register} />

      {/*input payment*/}
      <h4 className={styles.subtitle}>PAYMENT DETAILS</h4>
      <p className={`${styles.label} ${styles.paymentMethod}`}>Payment Method</p>
      <div className={styles.containerRadio}>
        <label className={styles.labelRadio} htmlFor="e-money">
          <input className={styles.radio} {...register("Payment", { required: true })} type="radio" 
            value="e-Money" id="e-money"/>e-Money
        </label>
        <label className={styles.labelRadio} htmlFor="Cash on delivery">
          <input className={styles.radio} {...register("Payment", { required: true })} type="radio" value="Cash on delivery"
            id="Cash on delivery" />Cash on Delivery
        </label>
      </div>

      {watch("Payment") === "e-Money" &&
        <div className={styles.containerEmoney}>
          <InputText propertie='eMoneyNumber' label='e-Money Number' placeholder='238521993' 
            error={errors.eMoneyNumber} register={register} pattern={/^(\d{9})$/} />
          <InputText propertie='eMoneyPin' label='e-Money PIN' placeholder='6891' 
            error={errors.eMoneyPin} register={register} pattern={/^(\d{4})$/} />
        </div>    
      }
      {watch("Payment") === "Cash on delivery" && 
        <div className={styles.containerDeliveryCash}>
          <img src={deliveryCash} alt="" />
          <p className={styles.textCashDelivery}>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
        </div>
      }
    </form>
  )
}

export default Form