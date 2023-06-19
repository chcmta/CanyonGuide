import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        彰化縣登山協會溯溪嚮導訓練與檢定
      </Link>
    </h2>
  );
};

export default Header;
