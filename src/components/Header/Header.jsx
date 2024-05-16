import React, { useContext, useEffect } from "react";
import cl from "./Header.module.scss";
import { Link } from "react-router-dom";
import UserContext from "../../UserContext";

const Header = () => {
    const {
        currentTown,
        setTownOverlay,
        setRequestOverlay,
        headerSub,
        setHeaderSub,
        setMessageOverlay,
        moveTop,
        setMoveTop,
    } = useContext(UserContext);

    useEffect(() => {
        const header = document.querySelector("header");

        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                header.classList.add(`${cl.scroll}`);
            } else if (window.scrollY == 0) {
                header.classList.remove(`${cl.scroll}`);
            }
        });
    });

    return (
        <header className={cl.header}>
            <div className={cl.container}>
                <div className={cl.header__wrap}>
                    <Link to={"/"} className={cl.header__logo}>
                        Стимул Роста
                    </Link>
                    <nav className={cl.header__nav}>
                        <ul className={cl.header__navList}>
                            <li className={cl.header__navItem}>
                                <Link
                                    className={cl.header__navLink}
                                    to={"/specialties"}
                                >
                                    Специалисты и цены
                                </Link>
                            </li>
                            <li className={cl.header__navItem}>
                                <a className={cl.header__navLink} href="tel:">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M6.67962 3.32038L7.29289 2.70711C7.68342 2.31658 8.31658 2.31658 8.70711 2.70711L11.2929 5.29289C11.6834 5.68342 11.6834 6.31658 11.2929 6.70711L9.50048 8.49952C9.2016 8.7984 9.1275 9.255 9.31653 9.63307C10.4093 11.8186 12.1814 13.5907 14.3669 14.6835C14.745 14.8725 15.2016 14.7984 15.5005 14.4995L17.2929 12.7071C17.6834 12.3166 18.3166 12.3166 18.7071 12.7071L21.2929 15.2929C21.6834 15.6834 21.6834 16.3166 21.2929 16.7071L20.6796 17.3204C18.5683 19.4317 15.2257 19.6693 12.837 17.8777L11.6286 16.9714C9.88504 15.6638 8.33622 14.115 7.02857 12.3714L6.12226 11.163C4.33072 8.7743 4.56827 5.43173 6.67962 3.32038Z"
                                            fill="#272C3E"
                                        />
                                    </svg>
                                    <b>+7 968 628-78-04</b>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className={cl.mediaHeader__town}>
                        <div className={cl.header__town}>
                            <span className={cl.town__text}>Ваш город:</span>
                            <button
                                onClick={(e) => {
                                    setTownOverlay(true);
                                }}
                                className={cl.town__btn}
                            >
                                {currentTown}
                            </button>
                        </div>
                        <button className={cl.mediaTownCall}>
                            <a
                                className={cl.mediaTownCall_Link}
                                href="tel:+79686287804"
                            >
                                <svg
                                    width="25"
                                    height="25"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        width="25"
                                        height="25"
                                        rx="12.5"
                                        fill="#B0AAD0"
                                    />
                                    <path
                                        d="M16.9703 14.5492L18.4486 16.0275C18.7531 16.3321 18.7531 16.8258 18.4486 17.1304C16.802 18.777 14.1952 18.9622 12.3324 17.5651L12.2238 17.4836C10.8186 16.4297 9.57029 15.1814 8.51639 13.7762L8.43494 13.6676C7.03778 11.8048 7.22304 9.19801 8.86961 7.55145C9.17416 7.24689 9.66794 7.24689 9.9725 7.55145L11.4508 9.02974C11.8413 9.42026 11.8413 10.0534 11.4508 10.4439L10.4477 11.447C10.2432 11.6515 10.1925 11.964 10.3218 12.2226C11.0695 13.718 12.282 14.9305 13.7774 15.6782C14.036 15.8075 14.3485 15.7568 14.553 15.5523L15.5561 14.5492C15.9466 14.1587 16.5797 14.1587 16.9703 14.5492Z"
                                        fill="white"
                                    />
                                </svg>
                            </a>
                        </button>
                    </div>
                    <button
                        onClick={(e) => setRequestOverlay(true)}
                        className={cl.header__orderBtn}
                    >
                        Заявка на персонал
                    </button>
                    <button
                        onClick={(e) => setMessageOverlay(true)}
                        className={cl.header__messageBtn}
                    >
                        Написать нам
                    </button>
                    <div className={cl.mediaHeader__order}>
                        <button
                            onClick={() => {
                                setHeaderSub(!headerSub);
                                setMoveTop(!moveTop);
                            }}
                            className={`${cl.mediaHeader__orderMenu} ${
                                cl.mediaMenuBtn
                            } ${headerSub && cl.menuOpened}`}
                        >
                            <img
                                className={cl.mediaImg}
                                src="/img/headerMenuMedia.svg"
                                alt=""
                            />
                        </button>
                        <button
                            onClick={() => setMessageOverlay(true)}
                            className={`${cl.mediaHeader__orderPages} ${cl.mediaMenuBtn}`}
                        >
                            <img
                                className={cl.mediaImg}
                                src="/img/headerChatMedia.svg"
                                alt=""
                            />
                        </button>
                        <button
                            onClick={() => setRequestOverlay(true)}
                            className={`${cl.mediaHeader__orderRequest} ${cl.mediaMenuBtn}`}
                        >
                            <img
                                className={cl.mediaImg}
                                src="/img/headerRequestMedia.svg"
                                alt=""
                            />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
