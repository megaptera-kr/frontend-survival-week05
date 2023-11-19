type TextProps<T extends React.ElementType> = {
  // eslint-disable-next-line react/require-default-props
  as?: T;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'childern'>;

function Text<C extends React.ElementType>({
  as,
  children,
  ...rest
}: TextProps<C>) {
  const Component = as || 'span';

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...rest}>{children}</Component>;
}

export default Text;
