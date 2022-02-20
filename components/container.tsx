import { ReactNode, ElementType } from 'react';
import classnames from 'classnames';

const Container = ({
  as: Tag = 'div',
  children,
  className,
  ...props
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Tag className={classnames('container', 'mx-auto', className)} {...props}>
      {children}
    </Tag>
  );
};

export default Container;
