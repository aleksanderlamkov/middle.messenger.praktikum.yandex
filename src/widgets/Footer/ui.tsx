// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import './Footer.pcss'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__copyright">© Alexander Lamkov, {year}</div>
      </div>
    </footer>
  )
}

export default Footer
