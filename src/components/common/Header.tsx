type HeaderProps = {
  title: string;
}

export default function Header({ title }:HeaderProps) {
  return (
    <h1 className="w-full flex justify-center font-extrabold text-5xl my-8">
      {title}
    </h1>
  );
}
