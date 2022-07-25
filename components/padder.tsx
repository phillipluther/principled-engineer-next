export type PadderProps = {
  as?: keyof JSX.IntrinsicElements;
  noX?: boolean;
  noY?: boolean;
  noTop?: boolean;
  noBottom?: boolean;
  noLeft?: boolean;
  noRight?: boolean;
  children: React.ReactNode;
  [key: string]: any;
};

const Padder = ({
  as: Tag = 'div',
  noX,
  noY,
  noTop,
  noBottom,
  noLeft,
  noRight,
  children,
  ...props
}: PadderProps) => {
  const responsivePadding = {
    base: 500,
    sm: 600,
    lg: 700,
  };

  return <Tag {...props}>{children}</Tag>;
};

export default Padder;
