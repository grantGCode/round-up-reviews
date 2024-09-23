interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}
const Button: React.FC<ButtonProps> = ({ onClick, children, className = '', type = 'button', disabled = false }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-[#005FF6] text-white hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition ${className}`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button;