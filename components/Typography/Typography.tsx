
interface TypographyProps {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  lineHeight?: string;
  className?: string; 
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  fontSize = 'text-base',
  fontWeight = 'font-normal',
  color = 'text-white',
  className,
  children,
}: TypographyProps) => {
  const classNames = `${fontSize} ${fontWeight} ${color}`;

  return <span className={classNames}>{children}</span>;
};

export default Typography;
