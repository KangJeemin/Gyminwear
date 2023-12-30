import useSWR from "swr";
import { SessionData, defaultSession } from "@/lib/config/iron-config";
import useSWRMutation from "swr/mutation";

const sessionApiRoute = `${process.env.NEXT_PUBLIC_IP}/api/session`;

async function fetchJson<JSON>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  return fetch(input, {
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    ...init,
  }).then((res) => res.json());
}

function doLogin(url: string, { arg }: { arg: string }) {
  return fetchJson<SessionData>(url, {
    method: "POST",
    body: JSON.stringify({ email: arg }),
  });
}
// 로그인 할때 여러개의 인자를 보내게될 경우
// function doLogin(url: string, { arg }: { arg: { email: string, password: string } }) {
//   return fetchJson<SessionData>(url, {
//     method: "POST",
//     body: JSON.stringify(arg),
//   });
// }

function doLogout(url: string) {
  return fetchJson<SessionData>(url, {
    method: "DELETE",
  });
}

async function logout1() {
  const res= await fetch(`${process.env.NEXT_PUBLIC_IP}/api/logout`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if(res.ok){
    alert("로그아웃 되었습니다.")
  }
}
export default function useSession() {
  const { data: session, isLoading } = useSWR(
    sessionApiRoute,
    fetchJson<SessionData>,
    {
      fallbackData: defaultSession,
    },
  );

  //login함수는 useSWRMutation 훅으로부터 받은 trigger 메서드
  const { trigger: login } = useSWRMutation(sessionApiRoute, doLogin, {
    // 로그인 후에 데이터를 가져오지 않음.
    revalidate: false,
  });
  const { trigger: logout } = useSWRMutation(sessionApiRoute, doLogout);

  return { session, logout, login, isLoading, logout1 };
}