import React from 'react';
import styled from 'styled-components';

interface BadgeProps {
  title: string;
  description: string;
  color: string;
  icon: string;
  style?: 'flat' | 'flat-square' | 'plastic' | 'for-the-badge';
  label?: string;
  logo?: string;
}

const BadgeContainer = styled.div<{ color: string }>`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  border: 2px solid ${props => props.color};
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const BadgeHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: -1rem;
    right: -1rem;
    bottom: -0.5rem;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent,
      rgba(0, 0, 0, 0.1) 50%,
      transparent
    );
  }
`;

const BadgeIcon = styled.div<{ color: string }>`
  width: 36px;
  height: 36px;
  font-size: 1.2rem;
  margin-right: 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(135deg, 
    #FFD700 0%,
    #FDB931 20%,
    #FDD017 40%,
    #FDB931 60%,
    #FFD700 80%,
    #FDB931 100%
  );
  box-shadow: 
    0 0 0 2px #FFF,
    0 0 0 3px #FFD700,
    0 0 0 4px #FFF,
    0 0 0 5px #B8860B,
    0 2px 4px rgba(0, 0, 0, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 28px;
    height: 28px;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.6);
    filter: blur(2px);
  }
`;

const IconInner = styled.div`
  position: relative;
  z-index: 1;
  color: #8B4513;
  text-shadow: 
    0 1px 2px rgba(255, 255, 255, 0.8);
  transform: scale(0.9);
`;

const BadgeTitle = styled.h3`
  margin: 0;
  color: #333;
  font-size: 1.1rem;
`;

const BadgeDescription = styled.p`
  margin: 0;
  color: #666;
  font-size: 0.85rem;
`;

const BadgesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const ShieldsIoBadge = styled.img`
  height: 20px;
`;

export const AchievementBadge: React.FC<BadgeProps> = ({
  title,
  description,
  color,
  icon,
  style = 'for-the-badge',
  label,
  logo
}) => {
  // 生成多个不同样式的徽章URL
  const getBadgeUrls = () => {
    const baseTitle = encodeURIComponent(label || title);
    const urls = [];
    
    // 基础徽章
    urls.push(`https://img.shields.io/badge/${baseTitle}-achieved-${color}?style=${style}`);
    
    // 带有进度的徽章
    urls.push(`https://img.shields.io/badge/${baseTitle}-100%25-${color}?style=${style}`);
    
    // 带有logo的徽章（如果提供）
    if (logo) {
      urls.push(`https://img.shields.io/badge/${baseTitle}-verified-${color}?style=${style}&logo=${logo}`);
    }
    
    return urls;
  };

  return (
    <BadgeContainer color={color}>
      <BadgeHeader>
        <BadgeIcon color={color}>
          <IconInner>{icon}</IconInner>
        </BadgeIcon>
        <BadgeTitle>{title}</BadgeTitle>
      </BadgeHeader>
      <BadgeDescription>{description}</BadgeDescription>
      <BadgesContainer>
        {getBadgeUrls().map((url, index) => (
          <ShieldsIoBadge key={index} src={url} alt={title} />
        ))}
      </BadgesContainer>
    </BadgeContainer>
  );
};
