import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ul>
        <button>
          <Link href="/">홈</Link>
        </button>

        <button>
          <Link href="/gugudan">구구단</Link>
        </button>

        <button>
          <Link href="/wordrelay">끝말잇기</Link>
        </button>
        <button>
          <Link href="/question/question1">문제1번</Link>
        </button>
        <button>
          <Link href="/question/question2">문제2번</Link>
        </button>
        <button>
          <Link href="/question/question3">문제3번</Link>
        </button>
        <button>
          <Link href="/question/question4">문제4번</Link>
        </button>
        <button>
          <Link href="/question/question5">문제5번</Link>
        </button>
        <button>
          <Link href="/question/question6">문제6번</Link>
        </button>
        <button>
          <Link href="/question/question7">문제7번</Link>
        </button>
        <button>
          <Link href="/question/question8">문제8번</Link>
        </button>
        <button>
          <Link href="/question/question9">문제9번</Link>
        </button>
      </ul>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
