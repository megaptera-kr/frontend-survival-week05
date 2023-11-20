import { Text } from '../../atoms';

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return <Text as="h1">{title}</Text>;
}
