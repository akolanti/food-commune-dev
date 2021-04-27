import React from 'react'
import { FormLabel } from 'react-bootstrap'
import {FormBody, FormContainer, FormLink, FormRowLabel,FormRow, FormRowInput, FormSubmit,FormHeading} from '../PaymentPage/PaymentPageElements'
const PaymentPage = () => {
    return (
        <>
        <FormContainer>
        <FormHeading>Shipping address</FormHeading>
            <FormBody>
                
                <FormRow>
                    <FormRowLabel>demo</FormRowLabel>
                    <FormRowInput></FormRowInput>
                </FormRow>
                <FormRow>
                    <FormRowLabel>demo</FormRowLabel>
                    <FormRowInput></FormRowInput>
                </FormRow>
                <FormRow>
                    <FormRowLabel>demo</FormRowLabel>
                    <FormRowInput></FormRowInput>
                </FormRow>
                <FormRow>
                    <FormRowLabel>demo</FormRowLabel>
                    <FormRowInput></FormRowInput>
                </FormRow>
            </FormBody>
            <FormSubmit>
                    <FormLink>Pay Now</FormLink>
                </FormSubmit>
        </FormContainer>
        </>
    )
}

export default PaymentPage
