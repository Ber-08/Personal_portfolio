export function InputFields({
  name = "Name",
  type = "text",
  placholder = "enter the name",
  className = "",
  field = "input",
}) {
  return (
    <div className={className}>
      <label>{name}</label>
      <TextFields
        type={type}
        placholder={placholder}
        val={field === "textarea"}
      />
    </div>
  );
}

function TextFields({ val, placholder, type }) {
  return (
    <>{val ? <textarea /> : <input type={type} placholder={placholder} />}</>
  );
}
