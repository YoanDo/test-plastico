import axios from 'axios';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';

import { Field, Form, Input, ValidationInput } from './styles';

const SignUp = ({ switchToSignIn }) => {
  const { register, handleSubmit, errors, getValues } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post(
        'https://func-plasticorigins-backend-dev.azurewebsites.net/register',
        data
      )
      // eslint-disable-next-line no-console
      .then((response) => console.log(response))
      // eslint-disable-next-line no-console
      .catch((e) => console.log(e));
  };
  console.log({ errors }); // todo remove

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Field>
        <p>
          <FormattedMessage id="first_name" />:
        </p>
        <Input
          type="text"
          placeholder="First name"
          name="firstname"
          ref={register({
            required: true,
            minLength: 2,
            maxLength: 20
          })}
        />
        {errors.firstname && (
          <span>
            <FormattedMessage id="signup_error_first_name" />
          </span>
        )}
      </Field>
      <Field>
        <p>
          <FormattedMessage id="last_name" />:
        </p>
        <Input
          type="text"
          placeholder="Last name"
          name="lastname"
          ref={register({
            required: true,
            minLength: 2,
            maxLength: 30
          })}
        />
        {errors.lastname && (
          <span>
            <FormattedMessage id="signup_error_last_name" />
          </span>
        )}
      </Field>
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
            pattern: /^\S+@\S+$/i
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
          <FormattedMessage id="birthday" />:
        </p>
        <Input
          type="date"
          placeholder="01/01/2020"
          name="birthday"
          ref={register({
            required: true,
            maxLength: 12
          })}
        />
        {errors.birthday && (
          <span>
            <FormattedMessage id="signup_error_birthday" />
          </span>
        )}
      </Field>
      <Field>
        <p>
          <FormattedMessage id="password" />:
        </p>
        <Input
          type="password"
          placeholder="*******"
          name="password"
          ref={register({ required: true })}
        />
        {errors.password && (
          <span>
            <FormattedMessage id="signup_error_password" />
          </span>
        )}
      </Field>
      {/* password confirmation */}
      {/* <Field>
        <p>
          <FormattedMessage id="confirm_password" />:
        </p>
        <Input
          type="password"
          name="passwordConfirmation"
          ref={register({
            required: 'Please confirm your password!',
            validate: {
              matchesPreviousPassword: value => {
                const { password } = getValues()
                return password === value || 'Passwords should match!'
              },
            },
          })}
        />
        {errors.passwordConfirmation && <span>{errors.passwordConfirmation.message}</span>}
      </Field> */}
      <Field row>
        <input
          type="checkbox"
          placeholder="Newsletter"
          name="newsletter"
          ref={register}
        />
        <p>
          <FormattedMessage id="subscribe" />
        </p>
      </Field>
      <ValidationInput type="submit">
        <FormattedMessage id="confirm" />
      </ValidationInput>
      <Field onClick={() => switchToSignIn()}>
        <u>
          <FormattedMessage id="already_registered" />
        </u>
      </Field>
    </Form>
  );
};

export default SignUp;

SignUp.propTypes = {
  switchToSignIn: Function.prototype
};

SignUp.defaultProps = {
  switchToSignIn: false
};
