interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: string | any;
  className: string;
}

//Reusable button which is used for next question, previous question and to return to the results page.
const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
