import React from 'react';

type Achievement = {
    title: string;
    description: string;
    icon: string;
    level: number;
    color: string;
    textColor: string;
};

const achievements: Achievement[] = [
    {
        title: '编程达人',
        description: '精通多种编程语言',
        icon: '{ }',
        level: 9,
        color: '#845EF7',
        textColor: '#E5DBFF'
    },
    {
        title: '代码优化',
        description: '显著提升代码性能',
        icon: '⚡️',
        level: 8,
        color: '#FF6B6B',
        textColor: '#FFE3E3'
    },
    {
        title: '团队协作',
        description: '参与多个团队项目',
        icon: '🤝',
        level: 7,
        color: '#4DABF7',
        textColor: '#D0EBFF'
    }
];

const HexagonBadge: React.FC<{achievement: Achievement}> = ({achievement}) => (
    <svg width="120" height="140" viewBox="0 0 120 140">
        <defs>
            <linearGradient id={`grad-${achievement.title}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: achievement.color, stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: achievement.color, stopOpacity: 0.6}} />
            </linearGradient>
            <filter id="shadow">
                <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor={achievement.color} floodOpacity="0.3"/>
            </filter>
        </defs>
        
        {/* 六边形背景 */}
        <path d="M60 10L110 40V100L60 130L10 100V40L60 10Z" 
              fill={`url(#grad-${achievement.title})`}
              stroke={achievement.color}
              strokeWidth="2"
              filter="url(#shadow)"
        />
        
        {/* 图标 */}
        <text x="60" y="60" 
              fontSize="24"
              fill={achievement.textColor}
              textAnchor="middle"
              dominantBaseline="middle">
            {achievement.icon}
        </text>
        
        {/* 等级指示器 */}
        <circle cx="85" cy="100" r="15" 
                fill="#2A2A2A"
                stroke={achievement.color}
                strokeWidth="2"/>
        <text x="85" y="100"
              fontSize="14"
              fill={achievement.textColor}
              textAnchor="middle"
              dominantBaseline="middle">
            {achievement.level}
        </text>
    </svg>
);

const CircleBadge: React.FC<{achievement: Achievement}> = ({achievement}) => (
    <svg width="120" height="120" viewBox="0 0 120 120">
        <defs>
            <linearGradient id={`grad-circle-${achievement.title}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: achievement.color, stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: achievement.color, stopOpacity: 0.6}} />
            </linearGradient>
            <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
        
        {/* 主圆形 */}
        <circle cx="60" cy="60" r="50"
                fill={`url(#grad-circle-${achievement.title})`}
                stroke={achievement.color}
                strokeWidth="2"
                filter="url(#glow)"/>
        
        {/* 图标 */}
        <text x="60" y="50"
              fontSize="24"
              fill={achievement.textColor}
              textAnchor="middle"
              dominantBaseline="middle">
            {achievement.icon}
        </text>
        
        {/* 等级指示器 */}
        <circle cx="60" cy="85" r="12"
                fill="#2A2A2A"
                stroke={achievement.color}
                strokeWidth="2"/>
        <text x="60" y="85"
              fontSize="12"
              fill={achievement.textColor}
              textAnchor="middle"
              dominantBaseline="middle">
            {achievement.level}
        </text>
    </svg>
);

const ShieldBadge: React.FC<{achievement: Achievement}> = ({achievement}) => (
    <svg width="120" height="140" viewBox="0 0 120 140">
        <defs>
            <linearGradient id={`grad-shield-${achievement.title}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: achievement.color, stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: achievement.color, stopOpacity: 0.6}} />
            </linearGradient>
            <filter id="inner-shadow">
                <feOffset dx="0" dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite operator="out" in="SourceGraphic"/>
                <feColorMatrix type="matrix"
                    values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.3 0"/>
            </filter>
        </defs>
        
        {/* 盾牌形状 */}
        <path d="M60 10 
                 C60 10, 110 25, 110 40
                 C110 80, 100 100, 60 130
                 C20 100, 10 80, 10 40
                 C10 25, 60 10, 60 10Z"
              fill={`url(#grad-shield-${achievement.title})`}
              stroke={achievement.color}
              strokeWidth="2"
              filter="url(#inner-shadow)"/>
        
        {/* 图标 */}
        <text x="60" y="60"
              fontSize="24"
              fill={achievement.textColor}
              textAnchor="middle"
              dominantBaseline="middle">
            {achievement.icon}
        </text>
        
        {/* 等级指示器 */}
        <circle cx="60" cy="95" r="15"
                fill="#2A2A2A"
                stroke={achievement.color}
                strokeWidth="2"/>
        <text x="60" y="95"
              fontSize="14"
              fill={achievement.textColor}
              textAnchor="middle"
              dominantBaseline="middle">
            {achievement.level}
        </text>
    </svg>
);

export const SvgBadge: React.FC = () => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: '30px',
            padding: '20px'
        }}>
            {achievements.map((achievement, index) => (
                <div key={index} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px'
                }}>
                    {index % 3 === 0 ? (
                        <HexagonBadge achievement={achievement} />
                    ) : index % 3 === 1 ? (
                        <CircleBadge achievement={achievement} />
                    ) : (
                        <ShieldBadge achievement={achievement} />
                    )}
                    <h3 style={{ 
                        margin: '5px 0',
                        fontSize: '16px',
                        color: achievement.color
                    }}>
                        {achievement.title}
                    </h3>
                    <p style={{ 
                        margin: 0,
                        fontSize: '14px',
                        color: '#666',
                        textAlign: 'center'
                    }}>
                        {achievement.description}
                    </p>
                </div>
            ))}
        </div>
    );
};
