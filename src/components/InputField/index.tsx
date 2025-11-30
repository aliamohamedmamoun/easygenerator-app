import React from 'react';
import { Field, FieldProps } from 'formik';

import styles from './index.module.css';

interface InputFieldProps {
  id: string;
  label?: string;
  name: string;
  placeholder?: string;
  type?: string;
  validate?: boolean;
  autoComplete?: string;
}
const InputField = ({
  id,
  name,
  placeholder,
  type,
  validate,
  label,
  autoComplete,
}: InputFieldProps) => {
  return (
    <div className={styles.groupField}>
      <label htmlFor={name} className={styles.fieldLabel}>
        {label}
      </label>
      <Field name={name}>
        {({ field, meta }: FieldProps) => {
          return (
            <div className={styles.fieldWrapper}>
              <input
                {...field}
                type={type}
                id={id}
                placeholder={placeholder}
                autoComplete={autoComplete}
                className={`${styles.inputField} ${
                  meta.touched && meta.error && validate
                    ? styles.invalidField
                    : ''
                }`}
              />
              {meta.touched && meta.error && validate && (
                <p className={styles.error}>{meta.error}</p>
              )}
            </div>
          );
        }}
      </Field>
    </div>
  );
};

export default InputField;
