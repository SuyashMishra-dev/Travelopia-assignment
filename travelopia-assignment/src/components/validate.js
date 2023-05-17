const mandatoryFieldMessage = "This field is mandatory";

export default function validate(values) {
  let errors = {};

  if (!values.name?.trim()) errors.name = mandatoryFieldMessage;
  if (!values.email?.trim()) errors.email = mandatoryFieldMessage;
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email))
    errors.email = "This Email is not valid";
  if (!values.destination?.trim()) errors.destination = mandatoryFieldMessage;
  if (!values.noOfTravelers) errors.noOfTravelers = mandatoryFieldMessage;
  if (!values.budgetPerPerson) errors.budgetPerPerson = mandatoryFieldMessage;
  return errors;
}
