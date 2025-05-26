function Footer() {
  return (
    <footer className="bg-neutral p-10 text-neutral-content">
      <div className="footer m-auto max-w-7xl w-full flex flex-col sm:flex-row justify-between gap-10">
        <div>
          <span className="footer-title">Services</span>
          <a className="link-hover link block">Branding</a>
          <a className="link-hover link block">Design</a>
          <a className="link-hover link block">Marketing</a>
          <a className="link-hover link block">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link-hover link block">About us</a>
          <a className="link-hover link block">Contact</a>
          <a className="link-hover link block">Jobs</a>
          <a className="link-hover link block">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link-hover link block">Terms of use</a>
          <a className="link-hover link block">Privacy policy</a>
          <a className="link-hover link block">Cookie policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
