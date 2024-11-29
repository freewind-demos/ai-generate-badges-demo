import React from 'react';

type Badge = {
    title: string;
    url: string;
};

type BadgeGroup = {
    title: string;
    badges: Badge[];
};

const badges: BadgeGroup[] = [
    {
        title: "构建状态",
        badges: [
            {
                title: "Built with Love",
                url: "https://forthebadge.com/images/badges/built-with-love.svg"
            },
            {
                title: "Built by Developers",
                url: "https://forthebadge.com/images/badges/built-by-developers.svg"
            },
            {
                title: "Built for Android",
                url: "https://forthebadge.com/images/badges/built-for-android.svg"
            }
        ]
    },
    {
        title: "技术相关",
        badges: [
            {
                title: "Made with JavaScript",
                url: "https://forthebadge.com/images/badges/made-with-javascript.svg"
            },
            {
                title: "Made with Python",
                url: "https://forthebadge.com/images/badges/made-with-python.svg"
            },
            {
                title: "Made with Ruby",
                url: "https://forthebadge.com/images/badges/made-with-ruby.svg"
            },
            {
                title: "Uses HTML",
                url: "https://forthebadge.com/images/badges/uses-html.svg"
            },
            {
                title: "Uses CSS",
                url: "https://forthebadge.com/images/badges/uses-css.svg"
            },
            {
                title: "Uses Git",
                url: "https://forthebadge.com/images/badges/uses-git.svg"
            }
        ]
    },
    {
        title: "有趣标语",
        badges: [
            {
                title: "Powered by Coffee",
                url: "https://forthebadge.com/images/badges/powered-by-coffee.svg"
            },
            {
                title: "Contains Cat Gifs",
                url: "https://forthebadge.com/images/badges/contains-cat-gifs.svg"
            },
            {
                title: "Makes People Smile",
                url: "https://forthebadge.com/images/badges/makes-people-smile.svg"
            },
            {
                title: "Open Source",
                url: "https://forthebadge.com/images/badges/open-source.svg"
            },
            {
                title: "Gluten Free",
                url: "https://forthebadge.com/images/badges/gluten-free.svg"
            }
        ]
    },
    {
        title: "认证相关",
        badges: [
            {
                title: "Certified By Keyboard Cat",
                url: "https://forthebadge.com/images/badges/certified-by-keyboard-cat.svg"
            },
            {
                title: "Approved By VEGEMITE",
                url: "https://forthebadge.com/images/badges/approved-by-vegemite.svg"
            },
            {
                title: "Validated HTML5",
                url: "https://forthebadge.com/images/badges/validated-html5.svg"
            }
        ]
    },
    {
        title: "兼容性",
        badges: [
            {
                title: "Works on My Machine",
                url: "https://forthebadge.com/images/badges/works-on-my-machine.svg"
            },
            {
                title: "Compatible with IE 6",
                url: "https://forthebadge.com/images/badges/compatible-with-ie-6.svg"
            },
            {
                title: "Designed in MS Paint",
                url: "https://forthebadge.com/images/badges/designed-in-ms-paint.svg"
            }
        ]
    }
];

export const ForTheBadge: React.FC = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px'
        }}>
            {badges.map((group, groupIndex) => (
                <div key={groupIndex}>
                    <h3 style={{
                        margin: '0 0 15px 0',
                        color: '#333',
                        fontSize: '18px'
                    }}>
                        {group.title}
                    </h3>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        alignItems: 'start'
                    }}>
                        {group.badges.map((badge, badgeIndex) => (
                            <img
                                key={badgeIndex}
                                src={badge.url}
                                alt={badge.title}
                                style={{
                                    maxWidth: '200px',
                                    height: '35px'
                                }}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
