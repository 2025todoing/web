import styled from '@emotion/styled';
import { useState } from 'react';
import todoongiLogo from '../assets/todoongi_logo.png';
import kakaoIcon from '../assets/kakao_icon.png';
import googleIcon from '../assets/google_icon.png';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      onLogin();
    }
  };

  return (
    <Container>
      <StarShape>
        <LoginBox>
          <LogoContainer>
            <LogoImage src={todoongiLogo} alt="Todoongi Logo" />
          </LogoContainer>
          
          <form onSubmit={handleSubmit}>
            <InputGroup>
              <InputLabel>ID</InputLabel>
              <CustomInput
                type="text"
                placeholder="아이디를 입력하세요"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <InputLabel>Password</InputLabel>
              <CustomInput
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </InputGroup>

            <LoginButton type="submit">
              로그인
            </LoginButton>

            <SocialLoginGroup>
              <KakaoButton type="button">
                <img src={kakaoIcon} alt="Kakao" />
                KAKAO
              </KakaoButton>
              
              <GoogleButton type="button">
                <img src={googleIcon} alt="Google" />
                Google
              </GoogleButton>
            </SocialLoginGroup>
          </form>
        </LoginBox>
      </StarShape>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  position: relative;
  overflow-x: hidden;
`;

const StarShape = styled.div`
  position: relative;
  width: min(440px, 100%);
  height: auto;
  min-height: 300px;
  margin: 0 auto;
  background: 
  border-radius: 20px;
  padding: 20px;
  overflow: hidden;
  
  @media (max-width: 480px) {
    width: 100%;
    min-height: auto;
    margin-top: 0;
  }
  
  &:before {
    content: "";
    position: absolute;
    top: -40px;
    left: -40px;
    right: -40px;
    bottom: -40px;
    background: linear-gradient(45deg, #FFD700, #00BFFF, #FFD700);
    background-size: 400% 400%;
    z-index: -1;
    filter: blur(30px);
    opacity: 0.5;
    animation: gradientBG 15s ease infinite;
  }
  
  @keyframes gradientBG {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const LoginBox = styled.div`
  padding: 25px;
  backdrop-filter: blur(5px);
  border-radius: 4px;

  background: white;
  z-index: 3;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0px;
`;

const LogoImage = styled.img`
  width: min(500px, 120%);
  height: auto;
  margin-bottom: 10px;
  display: block;
  filter: drop-shadow(0 4px 10px blue);
  transform: rotate(-5deg);
  transition: all 0.3s ease;
  
  &:hover {
    transform: rotate(5deg) scale(1.1);
  }

  @media (max-width: 480px) {
    margin-bottom: 8px;
  }
`;

const InputLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #87CEEB;
  margin-left: 8px;
  text-shadow: 1px 1px 0 white;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const CustomInput = styled.input`
  width: 100%;
  padding: 15px;
  border-radius: 12px;
  background: white;
  border: 2px solid #87CEEB;
  font-size: 16px;
  transition: all 0.2s ease;
  margin-bottom: 12px;

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 14px;
  }

  &:focus {
    border-color: #87CEEB;
    box-shadow: 0 0 0 4px rgba(135, 206, 235, 0.2);
    transform: translateY(-2px);
  }

  &::placeholder {
    color: #BEE7F8;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 15px;
  border-radius: 12px;
  background: linear-gradient(45deg, #87CEEB, #5FB8E3);
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(135, 206, 235, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const SocialLoginGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const SocialButton = styled.button`
  width: 100%;
  padding: 15px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 14px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(135, 206, 235, 0.2);

    &:before {
      left: 100%;
    }
  }

  img {
    width: 24px;
    height: 24px;

    @media (max-width: 480px) {
      width: 20px;
      height: 20px;
    }
  }
`;

const KakaoButton = styled(SocialButton)`
  background: #FEE500;
  color: #000000;
  box-shadow: 0 4px 8px rgba(254, 229, 0, 0.2);
`;

const GoogleButton = styled(SocialButton)`
  background: white;
  color: #000000;
  border: 2px solid #87CEEB;
  box-shadow: 0 4px 8px rgba(135, 206, 235, 0.2);
`;

const CyberPanel = styled.div`
  position: relative;
  width: 100%;
  max-width: 450px;
  background: rgba(18, 18, 24, 0.9);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 0 20px rgba(0, 240, 255, 0.2),
    0 0 40px rgba(0, 240, 255, 0.1),
    inset 0 0 3px 1px rgba(0, 240, 255, 0.2);
  padding: 5px;
  overflow: hidden;
  z-index: 2;
  transition: box-shadow 0.3s ease;
  
  &.glow {
    box-shadow: 
      0 0 30px rgba(0, 240, 255, 0.3),
      0 0 60px rgba(0, 240, 255, 0.2),
      inset 0 0 5px 2px rgba(0, 240, 255, 0.3);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #00f0ff, #87CEEB, #00f0ff);
    z-index: 3;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #00f0ff, #87CEEB, #00f0ff);
    z-index: 3;
  }
`;

export default LoginPage; 