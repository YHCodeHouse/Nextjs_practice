import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">홈</Link>
        </li>

        <li>
          <Link href="/intro">소개</Link>
        </li>
        <li>
          <Link href="/details/apple">사과</Link>
        </li>
        <li>
          <Link href="/details/banana">바나나</Link>
        </li>
      </ul>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
