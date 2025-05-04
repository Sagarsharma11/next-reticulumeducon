import React from 'react';
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <>
            <footer className="footer sm:footer-horizontal bg-violet-600 text-white p-10">
                <nav className={styles.paraContainer}>
                    <h6 className="footer-title">Services</h6>
                    <p>
                        Reticulum Educon LLP, focus on providing every possible bit of information for the medical education of the MBBS aspirations. The process for the whole consultation and admission is played out, to make it easy for the students and guardians to understand and work on the same. We try and complete the admission procedure in the shortest duration possible, for easy gliding into the new world of learning, so that you can focus on your career. At the same time, you study and stay at the college of your dreams. Full-blown support will be provided to you till the admission for your concerned country and your accommodation there.
                    </p>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Gallery</a>
                    <a className="link link-hover">Services</a>
                    <a className="link link-hover">Contact us</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://twitter.com/RETICULUMEDUCON?t=G74sAA57qBfOq7U0hyxi8w&s=08" target="_blank">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a href="https://www.youtube.com/@Mbbs-abroad" target="_blank">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        <a href='https://www.facebook.com/reticulumeducon' target="_blank">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/reticulumeducon" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H7v-3h3.5V9.5c0-3.4 2-5.2 5-5.2 1.4 0 2.9.3 2.9.3v3.2H16c-1.6 0-2.1 1-2.1 2v2.2h3.6l-.6 3h-3v7A10 10 0 0 0 22 12z" />
                            </svg>
                        </a>
                        <a href="https://wa.me/91+7667962400" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                <path d="M12 2A10 10 0 0 0 2 12a9.8 9.8 0 0 0 1.4 5.2L2 22l4.9-1.3A10 10 0 1 0 12 2zm4.3 13.6c-.3.9-1.5 1.6-2.6 1.6-.6 0-1.4-.2-2.2-.6-1.1-.6-2.2-1.8-3-3.1-.7-1.2-1-2.2-.9-3 .2-1.1.9-2.3 1.8-2.5h.6c.2 0 .5.6.7 1.3.1.7.3 1.3.2 1.5-.1.3-.2.3-.4.6-.2.2-.3.3-.5.5-.2.2-.4.4-.2.7.1.3.5.8.8 1.2.5.6 1.1 1.1 1.8 1.4.2.1.4.1.6-.1.2-.2.8-.9 1-.9s.5 0 .8.2c.3.1 1 .4 1.1.5.2.1.3.2.4.3 0 .3 0 .7-.1 1z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/reticulum-educon-937187229" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                <path d="M4 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0 5h4v12H4V8zm6 0h4v1.7c.6-1.2 2.3-2 4-2 4 0 4.7 2.6 4.7 6v6h-4v-5.5c0-1.3 0-3-2-3s-2.3 1.4-2.3 3V20h-4V8z" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/retic_ulum/?r=nametag" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                <path d="M12 2.2c3.1 0 3.5 0 4.7.1 3.2.2 4.7 1.7 4.9 4.9.1 1.2.1 1.6.1 4.7s0 3.5-.1 4.7c-.2 3.2-1.7 4.7-4.9 4.9-1.2.1-1.6.1-4.7.1s-3.5 0-4.7-.1c-3.2-.2-4.7-1.7-4.9-4.9-.1-1.2-.1-1.6-.1-4.7s0-3.5.1-4.7c.2-3.2 1.7-4.7 4.9-4.9 1.2-.1 1.6-.1 4.7-.1m0-2.2C8.8 0 8.4 0 7.2.1 2.5.3.3 2.5.1 7.2 0 8.4 0 8.8 0 12s0 3.6.1 4.8c.2 4.7 2.4 6.9 7.1 7.1C8.4 24 8.8 24 12 24s3.6 0 4.8-.1c4.7-.2 6.9-2.4 7.1-7.1.1-1.2.1-1.6.1-4.8s0-3.6-.1-4.8c-.2-4.7-2.4-6.9-7.1-7.1C15.6 0 15.2 0 12 0z" />
                            </svg>
                        </a>
                    </div>
                    <div className="grid grid-flow-col gap-4">
                        <p className={"text-gray-300"}>
                            <span>H.O.</span> - Bagdulhan, near p.k.jha school beside <br /> ITI College Hajipur
                            dist- Vaishali (Bihar) 844101
                        </p>
                    </div>
                    <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                            <path d="M6.6 10.8c1.5 3.1 4.5 6.1 7.6 7.6l2.5-2.5c.3-.3.8-.4 1.2-.3 1.3.4 2.7.6 4.1.6.6 0 1 .4 1 1v3.9c0 .6-.4 1-1 1C9.3 22 2 14.7 2 6.1c0-.6.4-1 1-1h3.9c.6 0 1 .4 1 1 0 1.4.2 2.8.6 4.1.1.4 0 .9-.3 1.2l-2.6 2.4z" />
                        </svg>
                        <a href="tel:+918862851969" target="_blank">
                            8862851969,
                        </a>
                        <a className="text-decoration-none" href="tel:7667962400">
                            7667962400
                        </a>
                    </div>
                </nav>
            </footer>
            <div className={styles.rights}>
                <div> Copyright ©2021-2022 | <a href="index.php" >WWW.RETICULUM.COM </a> All Rights Reserved</div>

                <div>
                    Design & Devlop By <a href="https://sagarsharma.vercel.app" target='__blank' className={"text-green-400"} >Sagar Sharma</a>
                </div>
            </div>
        </>
    )
}

export default Footer