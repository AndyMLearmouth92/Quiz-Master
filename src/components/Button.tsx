interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  className: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  style = {},
}) => {
  return (
    <button className={className} onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
