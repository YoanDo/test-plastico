import React from 'react'
import { useForm } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'
import axios from 'axios'

import { Field, Form, Input, ValidationInput } from './styles'

const SignIn = ({ switchToSignUp }) => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => {
    axios
      .post('https://func-plasticorigins-backend-dev.azurewebsites.net/login', data)
      // eslint-disable-next-line no-console
      .then((response) => console.log(response))
      // eslint-disable-next-line no-console
      .catch((e) => console.log(e))
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Field>
        <p>
          <FormattedMessage id="email" />:
        </p>
        <Input
          type="text"
          placeholder="Email"
          name="email"
          ref={register({
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
        />
        {errors.email && (
          <span>
            <FormattedMessage id="signup_error_email" />
          </span>
        )}
      </Field>
      <Field>
        <p>
          <FormattedMessage id="password" />:
        </p>
        <Input type="password" placeholder="*******" name="password" ref={register({ required: true })} />
        {errors.password && (
          <span>
            <FormattedMessage id="signup_error_password" />
          </span>
        )}
      </Field>
      <ValidationInput type="submit">
        <FormattedMessage id="confirm" />
      </ValidationInput>
      <Field onClick={() => switchToSignUp()}>
        <u>
          <FormattedMessage id="not_registered" />
        </u>
      </Field>
    </Form>
  )
}

export default SignIn

SignIn.propTypes = {
  switchToSignUp: Function.prototype,
}

SignIn.defaultProps = {
  switchToSignUp: false,
}
