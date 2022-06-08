import { useRouter } from "next/router";

export default function Fruits() {
  const router = useRouter();
  const { name } = router.query;
  return <div>{name} 페이지</div>;
}
