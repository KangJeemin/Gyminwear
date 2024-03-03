import React, { useEffect } from "react";
import NickName from "@/components/login/Nickname";
import useSession from "@/lib/useSession";
import { Router, useRouter } from "next/router";
import Modal from "@/components/modal";
import { useSearchParams } from "next/navigation";
import type { TextFieldColor } from "@/interface/board";
import { decodeToken } from "@/lib/useJwt";

const NicknameContainer = ({ urlToken }: any) => {
  const [isModalOpen, setModalOpen] = React.useState(true);
  const params = useSearchParams();
  const email = params.get("email");
  const oauth = params.get("oauth");
  const [nickname, setNickName] = React.useState("");
  const { session, isLoading, login } = useSession();
  const router = useRouter();
  const [joinCheck, setJoinCheck] = React.useState<boolean>(false);
  const [nicknameFiledColor, setNicknameFiledColor] =
    React.useState<TextFieldColor>(undefined);

  // 닉네임 체크중 닉네임을 지우는 순간 닉네임 다시 체크 해야함.
  const initializeCheck = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Backspace") {
        setNicknameFiledColor(undefined);
        setJoinCheck(false);
      }
    },
    []
  );
  const typingNickName = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNickName(e.target.value);
    },
    []
  );
  const checkNickName = React.useCallback(async () => {
    const regex = /^[a-zA-Z0-9가-힣]+$/;
    if (
      !(nickname.length >= 3 && nickname.length <= 12 && regex.test(nickname))
    ) {
      alert(
        "닉네임은 영어,숫자,한글을 조합하여 3~12자 이내로 입력해주세요.(특수문자 불포함)"
      );
      setNicknameFiledColor("warning");
      return false;
      // 닉네임 검증 단계 마치면 중복 확인 시작
    } else {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_IP}/api/join?nickname=${nickname}`
      );
      if (response.ok) {
        const responseData = await response.json();
        if (responseData) {
          alert("중복된 닉네임이 존재합니다. 다른 닉네임으로 재설정해주세요.");
          setNicknameFiledColor("warning");
          return;
        } else {
          alert("이 닉네임은 사용이 가능 합니다.");
          setJoinCheck(true);
        }
      } else {
        alert("닉네임 중복 검사 중 오류가 발생했습니다. 재시도 해주세요.");
        return;
      }
    }
  }, [nickname]);

  const closeModal = React.useCallback(() => {
    setModalOpen(!isModalOpen);
  }, []);
  React.useEffect(() => {
    // 로그인이 되어 있을 경우 전 페이지로 이동
    if (session.isLoggedIn) {
      router.replace(`${process.env.NEXT_PUBLIC_IP}/`);
    }
  });
  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_IP}/api/oauth/member`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            nickname: nickname,
            oauth: oauth,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        setModalOpen(false);
        router.push(`${process.env.NEXT_PUBLIC_IP}`);
      }
      //   회원정보 저장 후 어디로 redirect 시켜주지?
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <NickName
          nickname={nickname}
          joinCheck={joinCheck}
          nicknameFiledColor={nicknameFiledColor}
          initializeCheck={initializeCheck}
          typingNickName={typingNickName}
          checkNickName={checkNickName}
          handleSubmit={handleSubmit}
        />
      </Modal>
    );
  }
};

export default NicknameContainer;
