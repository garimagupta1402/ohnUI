import { TextField, Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    required: {
      color: "#D32F2F",
    },
  })
);
interface Props {
  label?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  type?: string;
  onBlur?: any;
  values?: any;
  onChange?: any;
  style?: any;
  helperText?: any;
  error?: any;
  isRequired?: boolean;
  isDisabled?: boolean;
  multiline?: any;
}

function CustomField({
  name,
  label,
  placeholder,
  id,
  type,
  onBlur,
  values,
  onChange,
  style,
  helperText,
  error,
  isRequired,
  multiline,
}: Props) {
  const classes = useStyles();
  return (
    <TextField
      name={name}
      label={
        <span>
          {label}
          {isRequired ? <span className={classes.required}> *</span> : <span />}
        </span>
      }
      type={type}
      placeholder={placeholder}
      onBlur={onBlur}
      value={values}
      onChange={onChange}
      className={style}
      id={id}
      helperText={helperText}
      error={error}
      multiline={multiline}
    />
  );
}

export default CustomField;
