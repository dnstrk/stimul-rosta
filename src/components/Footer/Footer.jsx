import React from "react";
import cl from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.container}>
                <div className={cl.footerWrap}>
                    <h5 className={cl.footer__title}>ООО «Стимул Роста»</h5>
                    <div className={cl.footer__info}>
                        <div className={cl.footer__infoContacts}>
                            <div className={cl.footer__infoContacts_num}>
                                <span>Телефон:</span>
                                <a
                                    className={cl.footer__infoContacts_link}
                                    href="tel:+7(968) 628-78-04"
                                >
                                    <b>+7(968) 628-78-04</b>
                                </a>
                            </div>
                            <div className={cl.footer__infoContacts_email}>
                                <span>Email:</span>
                                <a
                                    className={cl.footer__infoContacts_link}
                                    href="mailto:info@stimulrosta.ru"
                                >
                                    <b>info@stimulrosta.ru</b>
                                </a>
                            </div>
                        </div>
                        <div className={cl.footer__infoAddr}>
                            <span className={cl.footer__infoAddr_title}>
                                Адрес:
                            </span>
                            <p className={cl.footer__infoAddr_place}>
                            109240, г. Москва,<br /> вн.тер.г. муниципальный округ Таганский, ул. Верхняя Радищевская, д. 6, стр. 1
                            </p>
                        </div>
                    </div>
                    <p className={cl.footer__copyright}>
                        Copyright © 2024 | Стимул Роста - stimulrosta.ru Все
                        права защищены
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
