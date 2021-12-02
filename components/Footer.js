import React from 'react'
import footer from '../styles/footer.module.css'

function Footer() {
    return (
        <div className={footer.footer}>
            <div>
                <image />
                <h5 className={footer.contact}>Contact</h5>
                <p>PT. Global bersama</p>
                <p>Jl. Cidodo Raya no 40 Kebayoran lama,<br /> Jakarta Selatan 12220</p>
                <p>+62-511-828-6996</p>
                <p>info@skills.id</p>
            </div>
            <div>
                <label>Category</label>
                <ul>
                    <li>Music</li>
                    <li>Art and Craft</li>
                    <li>Music and Beverages</li>
                    <li>Design</li>
                    <li>Photography</li>
                    <li>Sport</li>
                </ul>
            </div>
            <div>
                <div>
                    <label>social media</label>
                </div>
                <div>
                    <label>Branch</label>
                    <ul>
                        <li>Jakarta</li>
                        <li>Tangerang</li>
                        <li>Bali</li>
                        <li>Bekasi</li>
                        <li>Medan</li>
                        <li>Surabaya</li>
                        <li>Bandung</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
