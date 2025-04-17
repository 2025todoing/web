import styled from '@emotion/styled';
import { Link, useLocation } from 'react-router-dom';

const BottomNavigation = () => {
  const location = useLocation();

  return (
    <Container>
      <NavigationBar>
        <NavItem to="/feed" active={location.pathname === '/feed' || location.pathname === '/'}>
          <NavIcon>📋</NavIcon>
        </NavItem>
        <NavItem to="/community" active={location.pathname === '/community'}>
          <NavIcon>👥</NavIcon>
        </NavItem>
        <NavItem to="/ai" active={location.pathname === '/ai'}>
          <NavIcon>🤖</NavIcon>
        </NavItem>
        <NavItem to="/my" active={location.pathname === '/my'}>
          <NavIcon>👤</NavIcon>
        </NavItem>
        <NavItem to="/more" active={location.pathname === '/more'}>
          <NavIcon>⋯</NavIcon>
        </NavItem>
      </NavigationBar>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  bottom: 16px;
  left: 16px;
  right: 16px;
  display: flex;
  justify-content: center;
  z-index: 1000;
`;

const NavigationBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 16px 32px;
  border-radius: 50px;
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.1),
    inset 0 2px 4px rgba(255, 255, 255, 0.5);
  width: 100%;
  max-width: 500px;
  border: 1px solid rgba(255, 255, 255, 0.8);
`;

const NavItem = styled(Link)<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.active ? 'rgba(135, 206, 235, 0.2)' : 'transparent'};
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: rgba(135, 206, 235, 0.1);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 50%;
    background: ${props => props.active ? 'linear-gradient(45deg, #87CEEB, #5FB8E3)' : 'transparent'};
    opacity: 0.3;
    z-index: -1;
    transition: all 0.3s ease;
  }
`;

const NavIcon = styled.span`
  font-size: 24px;
  color: #666;
  transition: all 0.3s ease;

  ${NavItem}:hover & {
    color: #87CEEB;
    transform: scale(1.1);
  }
`;

export default BottomNavigation; 