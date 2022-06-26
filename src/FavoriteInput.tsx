import { ChangeEvent } from "react";
type Props = {
  onChange: (onChange: () => {}) => void;
  id: undefined;
};
export default function FavoriteInput({ onChange: onInputChange, id }: Props) {
  const inputHandler = (e: ChangeEvent) => onInputChange(e.target.value);

  return (
    <label htmlFor={id}>
      What is your favorite wild animal?
      <input id={id} onChange={inputHandler} />
    </label>
  );
}
