import { Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import "@/assets/css/Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="about-us">
          <Typography variant="h6" className="text-secondary-color">
            About Us
          </Typography>
          <Typography variant="p" className="normal-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </Typography>
        </div>

        <div className="category">
          <Typography variant="h6" className="text-secondary-color">
            Product
          </Typography>
          <ul className="test">
            <li>Asian</li>
            <li>Cold Drink</li>
            <li>Cookies</li>
            <li>Dessert</li>
            <li>Eastern</li>
            <li>Hot Drink</li>
            <li>Junk Food</li>
            <li>Western</li>
          </ul>
        </div>

        <div className="contact">
          <div className="address">
            <Typography variant="h6" className="text-secondary-color">
              Address
            </Typography>
            <Typography variant="p" className="normal-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque.
            </Typography>
          </div>
          <div className="contact-us">
            <Typography variant="h6" className="text-secondary-color">
              Contact Us
            </Typography>
            <div className="social">
              <LocalPhoneIcon />
              <InstagramIcon />
              <YouTubeIcon />
              <TelegramIcon />
              <MailOutlineIcon />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
