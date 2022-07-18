import { Box } from '@chakra-ui/react';

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
  as,
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

  return (
    <Box
      as={as}
      paddingTop={noY || noTop ? 0 : responsivePadding}
      paddingBottom={noY || noBottom ? 0 : responsivePadding}
      paddingRight={noX || noRight ? 0 : responsivePadding}
      paddingLeft={noX || noLeft ? 0 : responsivePadding}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Padder;
