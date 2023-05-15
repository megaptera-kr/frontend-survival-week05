type MenuProps = {
  name: string;
  price: number;
  children: React.ReactNode
}

export default function Menu({ name, price, children }: MenuProps) {
  return (
    <li>
      <span>{`${name}(${price.toLocaleString()}원)`}</span>
      {children}
    </li>
  );
}
